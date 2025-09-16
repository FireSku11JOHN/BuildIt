export function login() {
    document.addEventListener('click', (event) => {
        if (event.target && event.target.id === 'btnEntrar') {
            window.location.href = '../pages/login.html';
        }
    });
}