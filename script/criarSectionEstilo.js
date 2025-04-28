import { dadosEstilos } from "./dadosEstilos.js";
import { dadosCardsEstilos } from "./dadosCardsEstilos.js";

const containeEstilo = document.getElementById('container-estilos');

dadosEstilos.forEach(item => {

    const divDoEstilo = document.createElement('div');
    divDoEstilo.classList.add('section-estilos');
    divDoEstilo.innerHTML = `
        <div class="section-estilo">
            <h3 class="titulo-section_sub">${item.nome}</h3>
            <div class="container-card">
                <ul class="cards-list">
                    
            </div>
        </div>
        `
    containeEstilo.appendChild(divDoEstilo);

    dadosCardsEstilos.forEach(card => {
        const cardsList = document.getElementsByClassName('cards-list');

        if (card.tag == item.tag) {
            cardsList.innerHTML += `
            <li class="card">
                <img class="img-card" src="${card.imagem}" alt="">
                <div class="div">
                    <h4 class="titulo-card">${card.titulo}</h4>
                    <button class="bnt-favoritar bnt bnt-favoritar-card">
                        <i class="fa-regular fa-bookmark"></i>
                    </button>
                </div>
                <div class="opc-bnt-cardb">
                    <button class="bnt-tutorial bnt-tutorial-card" >TUTORIAL</button>
                </div>
            </li>
        `
        } else {
            return
        }

        
    });

});