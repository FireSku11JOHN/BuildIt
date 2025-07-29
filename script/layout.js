import { dadosEstilos } from './dadosEstilos.js';

export function criarSecoesEstilo() {
    const containerEstilo = document.getElementById('container-estilos');

    dadosEstilos.forEach(item => {
        const divDoEstilo = document.createElement('div');
        divDoEstilo.classList.add('section-estilos');
        divDoEstilo.innerHTML = `
        <div class="section-estilo">
            <h3 class="titulo-section_sub">${item.nome}</h3>
            <div class="container-card">
            <ul class="cards-list"></ul>
            </div>
            <button class="btn-voltar bnt-vermais-cards" data-tag="${item.tag}">
            VER MAIS <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
        `;
        containerEstilo.appendChild(divDoEstilo);
    });
}
