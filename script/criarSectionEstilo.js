import { dadosEstilos } from "./dadosEstilos.js";
import { dadosCardSection } from "./dadosCardSection.js";

const containeEstilo = document.getElementById('container-estilos');

dadosEstilos.forEach(item => {

    const divDoEstilo = document.createElement('div');
    divDoEstilo.classList.add('section-estilos');
    divDoEstilo.innerHTML = `
        <div class="section-estilo">
            <h3 class="titulo-section_sub">${item.nome}</h3>
            <div class="container-card">
                <ul class="cards-list"></ul>
            </div>
        </div>
    `;

    containeEstilo.appendChild(divDoEstilo);

    const cardsList = divDoEstilo.querySelector('.cards-list');

    dadosCardSection.forEach(card => {
        if (item.tag === card.tag) {
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
            cardsList.appendChild(cardItem);
        }
    });

});

import { criarPaginaCard } from './criarPaginaCard.js';

document.getElementById('container-estilos').addEventListener('click', function (e) {
    const botaoTutorial = e.target.closest('.bnt-tutorial-card');
    if (botaoTutorial) {
        const cardElement = botaoTutorial.closest('.card');
        const titulo = cardElement.querySelector('.titulo-card').textContent;

        const cardDados = dadosCardSection.find(card => card.titulo === titulo);
        if (cardDados) {
            criarPaginaCard(cardDados);
        } else {
            console.warn('Card não encontrado:', titulo);
        }
    }
});
