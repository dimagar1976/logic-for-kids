export async function apiRequest(url, options = {}) {
    const token = localStorage.getItem('token');
    const headers = new Headers(options.headers || {});

    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }

    const response = await fetch(url, { ...options, headers });

    if (response.status === 401 || response.status === 403) {
        window.location.href = '/auth.html';
    }

    return response.json();
}
