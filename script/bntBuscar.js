import { dadosCardSection } from "./dadosCardSection.js";  

const bntBuscar = document.querySelector("#btn-buscar");
const inputBuscar = document.querySelector("#input-buscar");

function buscarTutorial() {
    const inputValue = inputBuscar.value.trim().toLowerCase();
    const resEscritoInput = document.getElementById("res-escrito")

     // Atualiza a li id= res-ecrito com o que foi digitado
    resEscritoInput.innerText = inputValue ? `${inputValue}` : "";

    // Remove apenas os cards anteriores
    const cardsAnteriores = campoResultado.querySelectorAll(".li-card-busca");
    cardsAnteriores.forEach(card => card.remove());

    const resultados = dadosCardSection.filter((item) => {
        return (
            item.titulo.toLowerCase().includes(inputValue)                                                           
            // item.descricao.toLowerCase().includes(inputValue)
        );
    });

    if (resultados.length === 0 && inputValue !== "") {
        const li = document.createElement("li");
        li.textContent = "Nenhum resultado encontrado.";
        li.classList.add("li-card-busca");
        campoResultado.appendChild(li);
        return;
    }


    // Cria e exibe os cards
    resultados.forEach((item) => {
        const card = document.createElement("li");
        card.classList.add("li-card-busca");
        card.innerHTML = `
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
// inputBuscar.addEventListener("focus", function () {
//     campoResultado.style.display = "flex";
//     campoBusca.style.borderRadius = "20px 20px 0px 0px";
// });

// Detectar digitação (pega corretamente o valor atualizado)
inputBuscar.addEventListener("input", function () {
    const inputValue = inputBuscar.value;
    console.log(inputValue);
    campoResultado.style.display = "flex";
    campoBusca.style.borderRadius = "20px 20px 0px 0px";
    buscarTutorial();
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

