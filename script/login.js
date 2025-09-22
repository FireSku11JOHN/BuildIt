export function login() {
    document.addEventListener('click', (event) => {

        if (event.target && event.target.id === 'btnEntrar') {
            window.location.href = '../pages/login.html';
            console.log('Clicou no botão Entrar', event.target);
        }

        if (event.target && event.target.id === 'btnCadastrar') {
            console.log('Clicou no botão Cadastrar', event.target);
            // window.location.href = '../pages/cadastrar.html';
        }
        
        if (event.target && event.target.id === 'toggle-password') {
            console.log('Clicou no ícone de olho', event.target);
        }
    })
}

// Botão de mostrar/ocultar senha
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');

togglePassword?.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    const icon = togglePassword.querySelector('i');

    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');

    if (type === 'text') {
        icon.classList.add('icon-visivel');
    } else {
        icon.classList.remove('icon-visivel');
    }
});

function validaEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInput.addEventListener('input', () => {
        console.log('Digitando no campo de email');
    });
}