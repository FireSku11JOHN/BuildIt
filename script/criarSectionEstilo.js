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
            <button class="btn-voltar bnt-vermais-cards" data-tag="${item.tag}">
                VER MAIS <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `;

    containeEstilo.appendChild(divDoEstilo);

    const cardsList = divDoEstilo.querySelector('.cards-list');

    function widthDaTela() {
        // Função para obter a largura da tela
        // e de acordo com o tamanho, limita a quabtidade de cards exibidos
        // na seção de estilos do indexe.html

        const larguraTela = window.innerWidth;
        if (larguraTela >= 814) {
            return 10;
          } else if (larguraTela >= 648) {
            return 8;
          } else {
            return 6;
          }
    }

    const larguraTela = widthDaTela(); // Chama a função para obter a largura da tela
    let contador = 0; // Contador para limitar a exibição de cards

    dadosCardSection.forEach(card => {
        if (item.tag === card.tag && contador < larguraTela) {
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
            contador++; 
    }
    });
});

// Detecta a mudança de tamanho da tela e atualiza os cards exibidos
window.addEventListener('resize', () => {
    const todasAsSections = document.querySelectorAll('.section-estilos');
  
    todasAsSections.forEach((section, index) => {
      const cardsList = section.querySelector('.cards-list');
      const item = dadosEstilos[index];
  
      // Limpa os cards atuais
      cardsList.innerHTML = '';
  
      // Lógica de limite de cards conforme a largura da tela
      const larguraTela = window.innerWidth;
      let limite;
      if (larguraTela >= 814) {
        limite = 10;
      } else if (larguraTela >= 648) {
        limite = 8;
      } else {
        limite = 6;
      }
  
      let contador = 0;
      dadosCardSection.forEach(card => {
        if (card.tag === item.tag && contador < limite) {
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
          contador++;
        }
      });
    });
  });
  

// Ação do botão "VER MAIS"
document.getElementById('container-estilos').addEventListener('click', (e) => {
    const botao = e.target.closest('.bnt-vermais-cards');
    if (botao) {
        const tag = botao.getAttribute('data-tag');
        window.location.href = `./pages/todosCardsEstilos.html?estilo=${encodeURIComponent(tag)}`;
    }
});

// Ação do botão "TUTORIAL"
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
