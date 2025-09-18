document.addEventListener('DOMContentLoaded', () => {
    const btnLimparBusca = document.querySelector('[data-btn-limpar]');
    const inputBuscar = document.querySelector('[data-input-buscar]');

    btnLimparBusca.addEventListener('click', () => {
        inputBuscar.value = '';
    });

    const btnLimparBuscaML = document.querySelector('[data-btn-limpar-ml]');
    const inputBuscarML = document.querySelector('[data-input-buscar-menu-lateral]');

    btnLimparBuscaML.addEventListener('click', () => {
        inputBuscarML.value = '';
    });
});