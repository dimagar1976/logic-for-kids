(function () {
    let user;
    try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) user = JSON.parse(storedUser);
    } catch (error) {
        return;
    }

    if (!user || typeof user.login !== 'string' || !user.login) return;

    const badge = document.createElement('aside');
    badge.setAttribute('aria-label', 'Пользователь');
    badge.style.cssText = [
        'position:fixed',
        'top:10px',
        'right:10px',
        'z-index:9999',
        'display:flex',
        'align-items:center',
        'gap:10px',
        'padding:8px 12px',
        'border-radius:12px',
        'background:linear-gradient(135deg,#667eea 0%,#764ba2 100%)',
        'color:#fff',
        'font:14px Arial,sans-serif',
        'box-shadow:0 4px 14px rgba(0,0,0,.2)'
    ].join(';');

    const label = document.createElement('span');
    label.textContent = `Ученик: ${user.login}`;

    const logout = document.createElement('button');
    logout.type = 'button';
    logout.textContent = 'Выйти';
    logout.setAttribute('aria-label', 'Выйти из аккаунта');
    logout.style.cssText = 'border:0;border-radius:8px;padding:5px 9px;background:#fff;color:#604b9a;font:inherit;cursor:pointer';
    logout.addEventListener('click', function () {
        localStorage.clear();
        window.location.href = '/auth.html';
    });

    badge.append(label, logout);
    document.body.appendChild(badge);
}());
