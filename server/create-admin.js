const { DatabaseSync } = require('node:sqlite');
const path = require('path');
const bcrypt = require('bcryptjs');

// Путь к базе данных
const dbPath = path.join(__dirname, 'data', 'app.db');
const db = new DatabaseSync(dbPath);

const adminLogin = 'admin';
const adminPassword = 'admin123'; // Пароль для первого входа
const testInviteCode = 'TEST-2345'; // Код для тестовой регистрации (без 0, 1, I, O, L)

async function setup() {
    try {
        // 1. Проверяем, есть ли уже админ
        const existingAdmin = db.prepare('SELECT id FROM users WHERE login = ?').get(adminLogin);
        let adminId;
        
        if (existingAdmin) {
            console.log('⚠️ Администратор уже существует.');
            adminId = existingAdmin.id;
        } else {
            // 2. Создаём админа
            const passwordHash = await bcrypt.hash(adminPassword, 10);
            const stmt = db.prepare('INSERT INTO users (login, password_hash, role) VALUES (?, ?, ?)');
            const result = stmt.run(adminLogin, passwordHash, 'admin');
            adminId = result.lastInsertRowid;
            console.log(`✅ Администратор '${adminLogin}' создан. Пароль: ${adminPassword}`);
        }

        // 3. Проверяем, есть ли уже тестовый код
        const existingCode = db.prepare('SELECT id FROM invite_codes WHERE code = ?').get(testInviteCode);
        if (existingCode) {
            console.log(`⚠️ Тестовый код '${testInviteCode}' уже существует.`);
        } else {
            // 4. Создаём тестовый пригласительный код
            const codeStmt = db.prepare('INSERT INTO invite_codes (code, created_by) VALUES (?, ?)');
            codeStmt.run(testInviteCode, adminId);
            console.log(`✅ Тестовый пригласительный код создан: ${testInviteCode}`);
        }

        console.log('\n🎉 Готово! Теперь можно тестировать регистрацию.');
    } catch (error) {
        console.error('❌ Ошибка:', error);
    }
}

setup();