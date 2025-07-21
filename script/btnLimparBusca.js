const btnLimparBusca = document.querySelector('[data-btn-limpar]');
const inputBuscar = document.querySelector('[data-input-buscar]');

btnLimparBusca.addEventListener('click', () => {
    inputBuscar.value = '';
});