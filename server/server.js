const express = require('express');
const path = require('path');
const os = require('os');
const fs = require('fs');
const { DatabaseSync } = require('node:sqlite');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const JWT_SECRET = process.env.JWT_SECRET || 'my_super_secret_local_key_123';

const app = express();
const PORT = 3000;
const ROOT = path.join(__dirname, '..');

app.use(express.json());

app.use((req, res, next) => {
    const blocked =
        /^\/(server|node_modules|\.git)/i.test(req.path) ||
        /\.(db|sqlite|env)$/i.test(req.path);
    if (blocked) return res.status(403).send('Доступ запрещён');
    next();
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
});

const DATA_DIR = path.join(__dirname, 'data');
fs.mkdirSync(DATA_DIR, { recursive: true });
const db = new DatabaseSync(path.join(DATA_DIR, 'app.db'));
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        login TEXT NOT NULL UNIQUE
            CHECK (length(login) BETWEEN 3 AND 20),
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'user',
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS invite_codes (
        id INTEGER PRIMARY KEY,
        code TEXT NOT NULL UNIQUE
            CHECK (
                length(code) = 9
                AND substr(code, 5, 1) = '-'
                AND substr(code, 1, 4) NOT GLOB '*[^ABCDEFGHJKLMNPQRSTUVWXYZ23456789]*'
                AND substr(code, 6, 4) NOT GLOB '*[^ABCDEFGHJKLMNPQRSTUVWXYZ23456789]*'
            ),
        created_by INTEGER NOT NULL,
        used_by INTEGER,
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        used_at DATETIME,
        FOREIGN KEY (created_by) REFERENCES users(id),
        FOREIGN KEY (used_by) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS medals (
        id INTEGER PRIMARY KEY,
        user_id INTEGER NOT NULL,
        lesson_id TEXT NOT NULL,
        score INTEGER NOT NULL CHECK (score BETWEEN 0 AND 6),
        is_gold INTEGER NOT NULL
            CHECK (is_gold = CASE WHEN score >= 5 THEN 1 ELSE 0 END),
        earned_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        UNIQUE (user_id, lesson_id),
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
`);

// --- Middleware для проверки токена ---
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Требуется авторизация' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Неверный или просроченный токен' });
        req.user = user;
        next();
    });
};

// --- POST /api/auth/register ---
app.post('/api/auth/register', async (req, res) => {
    try {
        const { login, password, inviteCode } = req.body;
        if (!login || !password || !inviteCode) {
            return res.status(400).json({ error: 'Заполните все поля' });
        }

        // 1. Проверяем, свободен ли логин
        const existingUser = db.prepare('SELECT id FROM users WHERE login = ?').get(login);
        if (existingUser) {
            return res.status(400).json({ error: 'Этот логин уже занят' });
        }

        // 2. Проверяем пригласительный код
        const codeRecord = db.prepare('SELECT id FROM invite_codes WHERE code = ? AND used_by IS NULL').get(inviteCode);
        if (!codeRecord) {
            return res.status(400).json({ error: 'Неверный или уже использованный пригласительный код' });
        }

        // 3. Хешируем пароль
        const password_hash = await bcrypt.hash(password, 10);

        // 4. Транзакция: создаем пользователя и активируем код
        // В node:sqlite транзакции делаются через db.exec('BEGIN') и 'COMMIT'
        db.exec('BEGIN');
        try {
            const insertUser = db.prepare('INSERT INTO users (login, password_hash, role) VALUES (?, ?, ?)');
            insertUser.run(login, password_hash, 'user');
            
            // Получаем ID только что созданного пользователя
            const newUser = db.prepare('SELECT id, login, role FROM users WHERE login = ?').get(login);
            
            // Обновляем код
            const updateCode = db.prepare('UPDATE invite_codes SET used_by = ?, used_at = CURRENT_TIMESTAMP WHERE id = ?');
            updateCode.run(newUser.id, codeRecord.id);
            
            db.exec('COMMIT');

            // 5. Генерируем токен
            const token = jwt.sign({ id: newUser.id, login: newUser.login, role: newUser.role }, JWT_SECRET, { expiresIn: '30d' });

            res.status(201).json({ 
                message: 'Регистрация успешна', 
                token, 
                user: { id: newUser.id, login: newUser.login, role: newUser.role } 
            });
        } catch (err) {
            db.exec('ROLLBACK');
            throw err;
        }
    } catch (error) {
        console.error('Ошибка регистрации:', error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

// --- POST /api/auth/login ---
app.post('/api/auth/login', async (req, res) => {
    try {
        const { login, password } = req.body;
        const user = db.prepare('SELECT id, login, password_hash, role FROM users WHERE login = ?').get(login);
        
        if (!user) {
            return res.status(401).json({ error: 'Неверный логин или пароль' });
        }

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(401).json({ error: 'Неверный логин или пароль' });
        }

        const token = jwt.sign({ id: user.id, login: user.login, role: user.role }, JWT_SECRET, { expiresIn: '30d' });
        
        // Возвращаем данные без пароля
        const { password_hash, ...userWithoutPassword } = user;
        res.json({ token, user: userWithoutPassword });
    } catch (error) {
        console.error('Ошибка входа:', error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

// --- POST /api/admin/reset-password ---
app.post('/api/admin/reset-password', authenticateToken, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Доступ запрещен: требуется роль администратора' });
    }

    try {
        const { targetLogin, newPassword } = req.body;
        if (!targetLogin || !newPassword) {
            return res.status(400).json({ error: 'Укажите login и новый пароль' });
        }

        const user = db.prepare('SELECT id FROM users WHERE login = ?').get(targetLogin);
        if (!user) {
            return res.status(404).json({ error: 'Пользователь не найден' });
        }

        const password_hash = await bcrypt.hash(newPassword, 10);
        db.prepare('UPDATE users SET password_hash = ? WHERE login = ?').run(password_hash, targetLogin);

        res.json({ message: `Пароль для пользователя ${targetLogin} успешно изменён` });
    } catch (error) {
        console.error('Ошибка сброса пароля:', error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

// --- Вспомогательная функция: расчёт доступных слотов для кодов ---
const getInviteSlots = (userId, role) => {
    if (role === 'admin') return 999;
    const goldMedals = db.prepare('SELECT COUNT(*) as count FROM medals WHERE user_id = ? AND is_gold = 1').get(userId).count;
    const thresholds = [5, 7, 9, 11, 13];
    const earnedSlots = thresholds.filter(t => goldMedals >= t).length;
    const issued = db.prepare('SELECT COUNT(*) as count FROM invite_codes WHERE created_by = ?').get(userId).count;
    return Math.max(0, earnedSlots - issued);
};

// --- Вспомогательная функция: генерация кода (без 0, 1, I, O, L) ---
const generateInviteCode = () => {
    const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    const bytes = crypto.randomBytes(8);
    for (let i = 0; i < 8; i++) {
        code += ALPHABET[bytes[i] % ALPHABET.length];
    }
    return code.slice(0, 4) + '-' + code.slice(4);
};

// --- POST /api/progress (Сохранение результата урока) ---
app.post('/api/progress', authenticateToken, (req, res) => {
    try {
        const { lessonId, score } = req.body;
        if (!lessonId || score === undefined || score < 0 || score > 6) {
            return res.status(400).json({ error: 'Некорректные данные урока или оценки (0-6)' });
        }
        const upsertSql = `
            INSERT INTO medals (user_id, lesson_id, score, is_gold, earned_at) 
            VALUES (?, ?, ?, CASE WHEN ? >= 5 THEN 1 ELSE 0 END, CURRENT_TIMESTAMP)
            ON CONFLICT(user_id, lesson_id) 
            DO UPDATE SET 
                score = CASE WHEN excluded.score > medals.score THEN excluded.score ELSE medals.score END,
                is_gold = CASE WHEN (CASE WHEN excluded.score > medals.score THEN excluded.score ELSE medals.score END) >= 5 THEN 1 ELSE 0 END,
                earned_at = CURRENT_TIMESTAMP
        `;
        db.prepare(upsertSql).run(req.user.id, lessonId, score, score);
        
        const totalGoldMedals = db.prepare('SELECT COUNT(*) as count FROM medals WHERE user_id = ? AND is_gold = 1').get(req.user.id).count;
        res.json({ 
            isGold: score >= 5, 
            totalGoldMedals, 
            availableInviteSlots: getInviteSlots(req.user.id, req.user.role) 
        });
    } catch (error) {
        console.error('Ошибка прогресса:', error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

// --- GET /api/me (Профиль пользователя) ---
app.get('/api/me', authenticateToken, (req, res) => {
    try {
        const totalGoldMedals = db.prepare('SELECT COUNT(*) as count FROM medals WHERE user_id = ? AND is_gold = 1').get(req.user.id).count;
        const issued = db.prepare('SELECT COUNT(*) as count FROM invite_codes WHERE created_by = ?').get(req.user.id).count;
        res.json({
            user: { id: req.user.id, login: req.user.login, role: req.user.role },
            totalGoldMedals,
            issued,
            availableInviteSlots: getInviteSlots(req.user.id, req.user.role)
        });
    } catch (error) {
        console.error('Ошибка получения профиля:', error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

// --- POST /api/invites (Генерация нового кода) ---
app.post('/api/invites', authenticateToken, (req, res) => {
    try {
        const availableSlots = getInviteSlots(req.user.id, req.user.role);
        if (availableSlots <= 0) {
            return res.status(403).json({ error: 'Недостаточно золотых медалей для создания нового кода' });
        }
        
        let code = generateInviteCode();
        let attempts = 0;
        while (db.prepare('SELECT id FROM invite_codes WHERE code = ?').get(code) && attempts < 5) {
            code = generateInviteCode();
            attempts++;
        }
        
        db.prepare('INSERT INTO invite_codes (code, created_by) VALUES (?, ?)').run(code, req.user.id);
        res.status(201).json({ 
            code, 
            availableInviteSlots: getInviteSlots(req.user.id, req.user.role) 
        });
    } catch (error) {
        console.error('Ошибка генерации кода:', error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

// --- GET /api/invites (Список своих кодов) ---
app.get('/api/invites', authenticateToken, (req, res) => {
    try {
        const codes = db.prepare(`
            SELECT code, used_by, created_at, used_at 
            FROM invite_codes 
            WHERE created_by = ? 
            ORDER BY created_at DESC
        `).all(req.user.id);

        res.json(codes.map(c => ({
            code: c.code,
            isUsed: c.used_by !== null,
            createdAt: c.created_at,
            usedAt: c.used_at
        })));
    } catch (error) {
        console.error('Ошибка получения кодов:', error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

app.use(express.static(ROOT));

app.listen(PORT, '0.0.0.0', () => {
    console.log('\n=== Сервер запущен ===');
    console.log('На этом ПК:         http://localhost:' + PORT);
    console.log('С телефона (Wi-Fi): http://' + getLocalIP() + ':' + PORT);
    console.log('Остановить: Ctrl + C\n');
});

function getLocalIP() {
    const nets = os.networkInterfaces();
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            if (net.family === 'IPv4' && !net.internal) return net.address;
        }
    }
    return 'localhost';
}