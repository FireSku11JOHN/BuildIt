import { dadosCardSection } from "./dadosCardSection.js";

const params = new URLSearchParams(window.location.search);
const tagEstilo = params.get('estilo');

const titulo = document.getElementById('titulo-estilo');
const lista = document.getElementById('lista-de-cards');

// Título da página com base na tag
titulo.textContent = tagEstilo.charAt(0).toUpperCase() + tagEstilo.slice(1);

// Filtra e exibe os cards da tag correspondente
dadosCardSection.forEach(card => {
  if (card.tag === tagEstilo) {
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
    lista.appendChild(cardItem);
  }
});

document.title = tagEstilo.charAt(0).toUpperCase() + tagEstilo.slice(1) +"  - Build It";
