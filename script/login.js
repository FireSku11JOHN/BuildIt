export function login() {
    document.addEventListener('click', (event) => {

        const btnCadastrar = document.getElementById('btnCadastrar');

        if (event.target && event.target.id === 'btnEntrar') {
            window.location.href = '../pages/login.html';
            console.log('Clicou no botão Entrar', event.target);
        }

        if (event.target && event.target.id === 'btnCadastrar') {
            console.log('Clicou no botão Cadastrar', event.target);
            // window.location.href = '../pages/cadastrar.html';
        }
    });
}