const dadosDosCards = [   //Mudar o condeudo dos cards do carrossel
    {  //Card 1
        titulo: "Casa Moderna",
        imagem: "https://img.youtube.com/vi/_RbFspZq0Mg/hqdefault.jpg",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus, amorzinho."
    },
    {  //Card 2
        titulo: "Cabana de Madeira",
        imagem: "https://img.youtube.com/vi/Kp73eZjLQi8/hqdefault.jpg",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus, congue vel laoreet ac."
    },
    {  //Card 3
        titulo: "Castelo Medieval",
        imagem: "https://img.youtube.com/vi/a4_qLnYZuls/hqdefault.jpg",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus, congue vel laoreet ac."
    },
    {  //Card 4
        titulo: "Casa Subterrânea",
        imagem: "https://img.youtube.com/vi/grWjBuCMi-c/hqdefault.jpg",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus, congue vel laoreet ac."
    },
    {  //Card 5
        titulo: "Casa na Árvore",
        imagem: "https://img.youtube.com/vi/U49dQAakmnk/hqdefault.jpg",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus, congue vel laoreet ac."
    }
];

const container = document.getElementById('carroselContainer');

dadosDosCards.forEach(item => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `
        <div class="carrosel-mais-populares-item_card">
            <div class="img" style="background-image: url('${item.imagem}')"></div>
            <div class="campo-info">
                <h3 class="titulo-card-mais-populares">${item.titulo}</h3>
                <p class="descricao-card-mais-populares">${item.descricao}</p>
                <div class="opc-bnt">
                    <button class="bnt-tutorial">TUTORIAL</button>
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
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    // breakpoints: {
    //     768: {
    //         slidesPerView: 2
    //     },
    //     1024: {
    //         slidesPerView: 3
    //     }
    // }
});

document.getElementById('carroselContainer').addEventListener('click', function(e) {
    const cardClicado = e.target.closest('.carrosel-mais-populares-item_card');
    if (cardClicado) {
        swiper.autoplay.stop(); // pausa o autoplay
        console.log('Autoplay pausado');

        clearTimeout(window._carroselTimeout); // evita múltiplos timeouts empilhados

        window._carroselTimeout = setTimeout(() => {
            swiper.autoplay.start(); // retoma autoplay após 5 segundos
            console.log('Autoplay retomado');
        }, 5500);
    }
});