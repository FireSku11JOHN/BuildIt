const input = document.querySelector('[data-input-buscar-menu-lateral]');
const trocarIcon = document.querySelector('.icone');
const bntItem= document.querySelector('[data-none-itens');
const bntVoltar = document.querySelector('fa-arrow-left')
const divResultado = document.querySelector('[data-div-resultado-menu-lateral]');


trocarIcon.addEventListener('click', () => {
    trocarIcon.classList.add('fas');
    trocarIcon.classList.add('fa-search');
    trocarIcon.classList.remove('fa-solid');
    trocarIcon.classList.remove('fa-arrow-left');

    input.value = ''; // Limpa o campo de busca

    bntItem.style.display = 'flex';

    divResultado.style.display = 'none';
})