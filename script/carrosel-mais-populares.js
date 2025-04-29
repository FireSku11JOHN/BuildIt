import { dadosCardsCarrossel } from './dadosCardsCarrossel.js';
import { criarPaginaCard } from './criarPaginaCard.js';

const container = document.getElementById('carroselContainer');

dadosCardsCarrossel.forEach(item => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `
        <div class="carrosel-mais-populares-item_card">
            <div class="img" style="background-image: url('${item.imagem}')"></div>
            <div class="campo-info">
                <h3 class="titulo-card-mais-populares">${item.titulo}</h3>
                <p class="descricao-card-mais-populares">${item.descricaoBreve}</p>
                <div class="opc-bnt">
                    <button class="bnt-tutorial" >TUTORIAL</button>
                    <button class="bnt-favoritar bnt">
                        <i class="fa-regular fa-bookmark"></i>
                    </button>
                    <button class="bnt-compartilhar bnt">
                        <i class="fa-solid fa-share-nodes"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    container.appendChild(slide);
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
});

document.getElementById('carroselContainer').addEventListener('click', function(e) {
    const btn = e.target.closest('.bnt-tutorial');
    if (btn) {
        const card = btn.closest('.swiper-slide');
        const index = [...document.querySelectorAll('.swiper-slide')].indexOf(card);

        const cardDados = dadosCardsCarrossel[index];
        criarPaginaCard(cardDados);
        return;
    }

    const cardClicado = e.target.closest('.carrosel-mais-populares-item_card');
    if (cardClicado) {
        swiper.autoplay.stop(); 
        console.log('Autoplay pausado');

        clearTimeout(window._carroselTimeout); 

        window._carroselTimeout = setTimeout(() => {
            swiper.autoplay.start();
            console.log('Autoplay retomado');
        }, 5500);
    }
});