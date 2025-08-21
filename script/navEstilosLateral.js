import { dadosEstilos } from "../dados/dadosEstilos.js";

document.addEventListener("DOMContentLoaded", function () {
    const botaoExibir = document.querySelector(".bnt-exibir");
    const icone = botaoExibir.querySelector("i");
    const submenu = document.querySelector(".menu-lateral-submenu");

    // Gera dinamicamente os itens do submenu
    function criarItensSubmenu() {
        submenu.innerHTML = ""; // limpa antes de recriar (caso chame de novo)
        
        dadosEstilos.forEach(estilo => {
            const li = document.createElement("li");
            const a = document.createElement("a");

            li.classList.add("menu-lateral-submenu_item");
            a.classList.add("menu-lateral-submenu_item-botao", "btnEstilo");
            a.href = "#"; // pode mudar se for redirecionar para página específica
            a.textContent = estilo.nome;

            li.appendChild(a);
            submenu.appendChild(li);
        });
    }

    criarItensSubmenu();

    botaoExibir.addEventListener("click", function (e) {
        e.preventDefault(); // previne comportamento padrão do botão/link
        
        submenu.classList.toggle("aberto");

        if (submenu.classList.contains("aberto")) {
            icone.classList.remove("fa-chevron-right");
            icone.classList.add("fa-chevron-down");
        } else {
            icone.classList.remove("fa-chevron-down");
            icone.classList.add("fa-chevron-right");
        }
    });
});
