'use strict';

const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const path = require('path');

if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is required');
}

const dbConnectionString = process.env.DB_CONNECTION_STRING || undefined;
const pool = mysql.createPool(dbConnectionString || {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4'
});
const JWT_SECRET = process.env.JWT_SECRET;
const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const INVITE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const INVITE_THRESHOLDS = [5, 7, 9, 11, 13];

app.use(express.json());

// Keep deployment-only files, local databases, and dependencies out of static hosting.
app.use((req, res, next) => {
    if (/^\/(server|node_modules|\.git)(\/|$)/i.test(req.path) || /\.(db|sqlite|env)$/i.test(req.path)) {
        return res.status(403).send('Доступ запрещён');
    }
    next();
});

async function initializeDatabase() {
    await pool.execute(`
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            login VARCHAR(20) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            role VARCHAR(10) NOT NULL DEFAULT 'user',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    await pool.execute(`
        CREATE TABLE IF NOT EXISTS invite_codes (
            id INT AUTO_INCREMENT PRIMARY KEY,
            code VARCHAR(9) NOT NULL UNIQUE,
            created_by INT NULL,
            used_by INT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            used_at TIMESTAMP NULL,
            INDEX idx_invite_codes_created_by (created_by),
            INDEX idx_invite_codes_used_by (used_by),
            CONSTRAINT fk_invite_codes_created_by FOREIGN KEY (created_by) REFERENCES users(id),
            CONSTRAINT fk_invite_codes_used_by FOREIGN KEY (used_by) REFERENCES users(id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    await pool.execute(`
        CREATE TABLE IF NOT EXISTS medals (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            lesson_id VARCHAR(20) NOT NULL,
            score INT NOT NULL DEFAULT 0,
            is_gold TINYINT(1) NOT NULL DEFAULT 0,
            earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE KEY uq_medals_user_lesson (user_id, lesson_id),
            INDEX idx_medals_user_gold (user_id, is_gold),
            CONSTRAINT fk_medals_user FOREIGN KEY (user_id) REFERENCES users(id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
}

async function getInviteSlots(userId, role) {
    if (role === 'admin') return 999;
    const [[medalRow], [inviteRow]] = await Promise.all([
        pool.execute('SELECT COUNT(*) AS count FROM medals WHERE user_id = ? AND is_gold = 1', [userId]),
        pool.execute('SELECT COUNT(*) AS count FROM invite_codes WHERE created_by = ?', [userId])
    ]);
    const goldMedals = Number(medalRow.count);
    const issued = Number(inviteRow.count);
    const earnedSlots = INVITE_THRESHOLDS.filter(threshold => goldMedals >= threshold).length;
    return Math.max(0, earnedSlots - issued);
}

function generateInviteCode() {
    const bytes = crypto.randomBytes(8);
    let code = '';
    for (let i = 0; i < 8; i += 1) {
        code += INVITE_ALPHABET[bytes[i] % INVITE_ALPHABET.length];
    }
    return `${code.slice(0, 4)}-${code.slice(4)}`;
}

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Требуется авторизация' });

    jwt.verify(token, JWT_SECRET, (error, user) => {
        if (error) return res.status(403).json({ error: 'Неверный или просроченный токен' });
        req.user = user;
        next();
    });
};

app.get('/api/health', async (req, res) => {
    try {
        res.json({ status: 'ok', time: new Date().toISOString() });
    } catch (error) {
        console.error('Ошибка проверки состояния:', error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

app.post('/api/auth/register', async (req, res) => {
    let connection;
    try {
        const { login, password, inviteCode } = req.body;
        if (!login || !password || !inviteCode) {
            return res.status(400).json({ error: 'Заполните все поля' });
        }
        if (typeof login !== 'string' || login.length < 3 || login.length > 20) {
            return res.status(400).json({ error: 'Логин должен содержать от 3 до 20 символов' });
        }

        const [existingUsers] = await pool.execute('SELECT id FROM users WHERE login = ?', [login]);
        if (existingUsers.length) {
            return res.status(400).json({ error: 'Этот логин уже занят' });
        }
        const passwordHash = await bcrypt.hash(String(password), 10);

        connection = await pool.getConnection();
        await connection.beginTransaction();
        const [codes] = await connection.execute(
            'SELECT id FROM invite_codes WHERE code = ? AND used_by IS NULL FOR UPDATE',
            [inviteCode]
        );
        if (!codes.length) {
            await connection.rollback();
            return res.status(400).json({ error: 'Неверный или уже использованный пригласительный код' });
        }

        const [insertResult] = await connection.execute(
            'INSERT INTO users (login, password_hash, role) VALUES (?, ?, ?)',
            [login, passwordHash, 'user']
        );
        const userId = insertResult.insertId;
        await connection.execute(
            'UPDATE invite_codes SET used_by = ?, used_at = CURRENT_TIMESTAMP WHERE id = ?',
            [userId, codes[0].id]
        );
        await connection.commit();

        const user = { id: userId, login, role: 'user' };
        const token = jwt.sign(user, JWT_SECRET, { expiresIn: '30d' });
        return res.status(201).json({ message: 'Регистрация успешна', token, user });
    } catch (error) {
        if (connection) {
            try { await connection.rollback(); } catch (rollbackError) { console.error('Ошибка отката регистрации:', rollbackError); }
        }
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'Этот логин уже занят' });
        }
        console.error('Ошибка регистрации:', error);
        return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    } finally {
        if (connection) connection.release();
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { login, password } = req.body;
        const [rows] = await pool.execute(
            'SELECT id, login, password_hash, role FROM users WHERE login = ?',
            [login]
        );
        const user = rows[0];
        if (!user || typeof password !== 'string' || !(await bcrypt.compare(password, user.password_hash))) {
            return res.status(401).json({ error: 'Неверный логин или пароль' });
        }

        const publicUser = { id: user.id, login: user.login, role: user.role };
        const token = jwt.sign(publicUser, JWT_SECRET, { expiresIn: '30d' });
        return res.json({ token, user: publicUser });
    } catch (error) {
        console.error('Ошибка входа:', error);
        return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

app.post('/api/admin/reset-password', authenticateToken, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Доступ запрещен: требуется роль администратора' });
        }
        const { targetLogin, newPassword } = req.body;
        if (!targetLogin || !newPassword) {
            return res.status(400).json({ error: 'Укажите login и новый пароль' });
        }
        const [users] = await pool.execute('SELECT id FROM users WHERE login = ?', [targetLogin]);
        if (!users.length) {
            return res.status(404).json({ error: 'Пользователь не найден' });
        }
        const passwordHash = await bcrypt.hash(String(newPassword), 10);
        await pool.execute('UPDATE users SET password_hash = ? WHERE login = ?', [passwordHash, targetLogin]);
        return res.json({ message: `Пароль для пользователя ${targetLogin} успешно изменён` });
    } catch (error) {
        console.error('Ошибка сброса пароля:', error);
        return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

app.post('/api/progress', authenticateToken, async (req, res) => {
    try {
        const { lessonId, score } = req.body;
        if (!lessonId || !Number.isInteger(score) || score < 0 || score > 6) {
            return res.status(400).json({ error: 'Некорректные данные урока или оценки (0-6)' });
        }
        await pool.execute(`
            INSERT INTO medals (user_id, lesson_id, score, is_gold, earned_at)
            VALUES (?, ?, ?, IF(? >= 5, 1, 0), CURRENT_TIMESTAMP)
            ON DUPLICATE KEY UPDATE
                score = GREATEST(score, VALUES(score)),
                is_gold = IF(GREATEST(score, VALUES(score)) >= 5, 1, 0),
                earned_at = CURRENT_TIMESTAMP
        `, [req.user.id, String(lessonId), score, score]);

        const [goldRows] = await pool.execute(
            'SELECT COUNT(*) AS count FROM medals WHERE user_id = ? AND is_gold = 1',
            [req.user.id]
        );
        return res.json({
            isGold: score >= 5,
            totalGoldMedals: Number(goldRows[0].count),
            availableInviteSlots: await getInviteSlots(req.user.id, req.user.role)
        });
    } catch (error) {
        console.error('Ошибка прогресса:', error);
        return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

app.get('/api/me', authenticateToken, async (req, res) => {
    try {
        const [goldRows, inviteRows] = await Promise.all([
            pool.execute('SELECT COUNT(*) AS count FROM medals WHERE user_id = ? AND is_gold = 1', [req.user.id]),
            pool.execute('SELECT COUNT(*) AS count FROM invite_codes WHERE created_by = ?', [req.user.id])
        ]);
        return res.json({
            user: { id: req.user.id, login: req.user.login, role: req.user.role },
            totalGoldMedals: Number(goldRows[0][0].count),
            issued: Number(inviteRows[0][0].count),
            availableInviteSlots: await getInviteSlots(req.user.id, req.user.role)
        });
    } catch (error) {
        console.error('Ошибка получения профиля:', error);
        return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

app.post('/api/invites', authenticateToken, async (req, res) => {
    try {
        if (await getInviteSlots(req.user.id, req.user.role) <= 0) {
            return res.status(403).json({ error: 'Недостаточно золотых медалей для создания нового кода' });
        }

        let code;
        for (let attempt = 0; attempt < 6; attempt += 1) {
            const candidate = generateInviteCode();
            try {
                const [result] = await pool.execute(
                    'INSERT INTO invite_codes (code, created_by) VALUES (?, ?)',
                    [candidate, req.user.id]
                );
                if (result.affectedRows === 1) {
                    code = candidate;
                    break;
                }
            } catch (error) {
                if (error.code !== 'ER_DUP_ENTRY') throw error;
            }
        }
        if (!code) throw new Error('Не удалось создать уникальный пригласительный код');

        return res.status(201).json({
            code,
            availableInviteSlots: await getInviteSlots(req.user.id, req.user.role)
        });
    } catch (error) {
        console.error('Ошибка генерации кода:', error);
        return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

app.get('/api/invites', authenticateToken, async (req, res) => {
    try {
        const [rows] = await pool.execute(`
            SELECT code, used_by, created_at, used_at
            FROM invite_codes
            WHERE created_by = ?
            ORDER BY created_at DESC
        `, [req.user.id]);
        return res.json(rows.map(row => ({
            code: row.code,
            isUsed: row.used_by !== null,
            createdAt: row.created_at,
            usedAt: row.used_at
        })));
    } catch (error) {
        console.error('Ошибка получения кодов:', error);
        return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

app.use(express.static(ROOT));

async function start() {
    await initializeDatabase();

    if (process.env.ADMIN_LOGIN && process.env.ADMIN_PASSWORD) {
        const [admins] = await pool.execute('SELECT id FROM users WHERE login = ?', [process.env.ADMIN_LOGIN]);
        if (!admins.length) {
            const passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
            await pool.execute(
                'INSERT INTO users (login, password_hash, role) VALUES (?, ?, ?)',
                [process.env.ADMIN_LOGIN, passwordHash, 'admin']
            );
            console.log(`Создан администратор: ${process.env.ADMIN_LOGIN}`);
        }
    }

    app.listen(PORT, () => {
        console.log(`Сервер запущен на порту ${PORT}`);
    });
}

start().catch(error => {
    console.error('Не удалось запустить сервер:', error);
    process.exitCode = 1;
});
