import { dadosEstilos } from "../dados/dadosEstilos.js";

document.addEventListener("DOMContentLoaded", () => {
    const botaoEstilo = document.querySelector(".btn-estilo");
    const menuEstilo = document.getElementById("menu-estilo");

    // ✅ Garante que só continua se os elementos existem
    if (!botaoEstilo || !menuEstilo) {
        console.warn("⚠️ Elementos do menu de estilos não foram encontrados.", botaoEstilo , menuEstilo);
        return;
    }
    
// const botaoEstilo = document.querySelector(".btn-estilo");
// const menuEstilo = document.getElementById("menu-estilo");

    let menuAberto = false;

    function criarMenuEstilos() {
        const ul = document.createElement("ul");
        ul.classList.add("menu-estilo-lista");

        dadosEstilos.forEach(estilo => {
            const li = document.createElement("li");
            li.classList.add("menu-estilo_item");
            li.classList.add("btnEstilo");
            li.textContent = estilo.nome;
            ul.appendChild(li);
        });

        menuEstilo.appendChild(ul);
    }

    function abrirMenu() {
        menuEstilo.classList.remove("fechar");
        menuEstilo.classList.add("ativo");
        menuAberto = true;
    }

    function fecharMenu() {
        menuEstilo.classList.remove("ativo");
        menuEstilo.classList.add("fechar");
        menuAberto = false;
    }

    function toggleMenu() {
        if (menuAberto) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    }

    criarMenuEstilos();

    document.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("btnEstilo")) {
        toggleMenu()
        }
    })
    // botaoEstilo.addEventListener("click", toggleMenu);

    document.addEventListener("click", function (event) {
        const dentroDoMenu = menuEstilo.contains(event.target);
        const clicouNoBotao = botaoEstilo.contains(event.target);

        if (!dentroDoMenu && !clicouNoBotao && menuAberto) {
            fecharMenu();
        }
    });

    botaoEstilo.addEventListener("click", toggleMenu);
});
