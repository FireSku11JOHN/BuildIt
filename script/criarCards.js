import { dadosCard } from './dadosCard.js';
import { dadosEstilos } from './dadosEstilos.js';
import { obterLimitePorLargura } from './utils.js';

export function renderizarCardsPorEstilo(tag, container, limite) {
    container.innerHTML = '';
    let contador = 0;

    dadosCard.forEach(card => {
        if (card.tag === tag && contador < limite) {
        const cardItem = document.createElement('li');
        cardItem.classList.add('card');
        cardItem.innerHTML = `
            <img class="img-card" src="${card.imagem}" alt="">
            <div class="div">
            <h4 class="titulo-card">${card.titulo}</h4>
            <button class="bnt-favoritar bnt bnt-favoritar-card">
                <i class="fa-regular fa-bookmark"></i>
            </button>
            </div>
            <div class="opc-bnt-cardb">
            <button class="bnt-tutorial bnt-tutorial-card">TUTORIAL</button>
            </div>
        `;
        container.appendChild(cardItem);
        contador++;
        }
    });           
}

export function inicializarCards() {
    const largura = window.innerWidth;
    const limite = obterLimitePorLargura(largura);

    const secoes = document.querySelectorAll('.section-estilos');
    secoes.forEach((secao, index) => {
        const lista = secao.querySelector('.cards-list');
        const estilo = dadosEstilos[index];
        renderizarCardsPorEstilo(estilo.tag, lista, limite);
    });
}
