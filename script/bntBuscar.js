import { dadosCardSection } from "./dadosCardSection.js";  

const bntBuscar = document.querySelector("#btn-buscar");
const inputBuscar = document.querySelector("#input-buscar");

function buscarTutorial() {
    const inputValue = inputBuscar.value.trim().toLowerCase();
    const resultados = dadosCardSection.filter((item) => {
        return (
            item.titulo.toLowerCase().includes(inputValue) ||
            item.descricao.toLowerCase().includes(inputValue)
        );
    });

    // Limpa os resultados anteriores
    campoResultado.innerHTML = "";

    if (resultados.length === 0) {
        campoResultado.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        return;
    }

    // Cria e exibe os cards
    resultados.forEach((item) => {
        const card = document.createElement("li");
        card.classList.add("li-card-busca");
        card.innerHTML = `
            <img class="img-card-busca" src="${item.imagem}" alt="${item.titulo}" />
            <div class="info">
                <h3>${item.titulo}</h3>
            </div>
        `;
        campoResultado.appendChild(card);
    });
}

bntBuscar.addEventListener("click",buscarTutorial);


inputBuscar.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        buscarTutorial();
    }
})


const campoBusca = document.querySelector(".campo-busca");
const campoResultado = document.querySelector("#campo-resultado");

// Abrir campo de reultados
inputBuscar.addEventListener("focus", function () {
    campoResultado.style.display = "flex";
    campoBusca.style.borderRadius = "20px 20px 0px 0px";
});

// Detectar digitação (pega corretamente o valor atualizado)
inputBuscar.addEventListener("input", function () {
    const inputValue = inputBuscar.value;
    console.log(inputValue);
});

// Detectar clique fora para fechar o resultado
document.addEventListener("click", function (event) {
    const dentroDoCampoBusca = campoBusca.contains(event.target);
    const dentroDoCampoResultado = campoResultado.contains(event.target);
    if (!dentroDoCampoBusca && !dentroDoCampoResultado) {
        campoResultado.style.display = "none";
        campoBusca.style.borderRadius = "25px";
    }
});

