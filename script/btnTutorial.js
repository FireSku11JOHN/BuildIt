// Ação do botão "TUTORIAL"
import { criarPaginaCard } from './criarPaginaCard.js';
import { dadosCard } from "../dados/dadosCard.js";

document.getElementById('container-estilos').addEventListener('click', function (e) {
    const botaoTutorial = e.target.closest('.bnt-tutorial-card');
    if (botaoTutorial) {
        const cardElement = botaoTutorial.closest('.card');
        const titulo = cardElement.querySelector('.titulo-card').textContent;

        const cardDados = dadosCard.find(card => card.titulo === titulo);
        if (cardDados) {
            criarPaginaCard(cardDados);
        } else {
            console.warn('Card não encontrado:', titulo);
        }
    }
});