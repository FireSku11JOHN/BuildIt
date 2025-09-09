export function login() {
    const btnEntrar = document.getElementById('btnEntrar');
    btnEntrar.addEventListener('click', () => {
        window.location.href = '../pages/login.html'; // Redireciona para a página de login
    });
}