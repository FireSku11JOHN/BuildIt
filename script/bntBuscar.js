import { dadosCardSection } from "./dadosCardSection.js";  

const bntBuscar = document.querySelector("#btn-buscar");
const inputBuscar = document.querySelector("#input-buscar");

bntBuscar.addEventListener("click", function () {
    const inputValue = inputBuscar.value;
    console.log(inputValue);
    dadosCardSection.forEach(card => {
        if (card.titulo.toLowerCase().includes(inputValue.toLowerCase())) {
            console.log("Título encontrado:", card.titulo);
            const tituloCard = dadosCardSection.find(card => card.titulo === inputValue);
            console.log(tituloCard)
            if (tituloCard) {
                const cardId = tituloCard.id;
                console.log("ID do card:", cardId);
                window.location.href = `/pages/verMais.html?id=${cardId}`;
            }
        } else {
            // console.log("Título não encontrado:", card.titulo);
        }
    });
    
})


inputBuscar.addEventListener("keypress", function (event) {
    console.log("Tecla pressionada:", event.key);
})
