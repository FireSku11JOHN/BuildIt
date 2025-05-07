const botaoEstilo = document.querySelector(".btn-estilo");
const menuEstilo = document.getElementById("menu-estilo");
let menuAberto = false;

botaoEstilo.addEventListener("click", mostrarMenuEstilo);

function mostrarMenuEstilo() {
    if (!menuAberto) {
        menuEstilo.classList.remove("fechar");
        menuEstilo.classList.add("ativo");
        menuAberto = true;
    } else {
        menuEstilo.classList.remove("ativo");
        menuEstilo.classList.add("fechar");
        menuAberto = false;
    }
}

document.addEventListener("click", function (event) {
    const dentroDoMenu = menuEstilo.contains(event.target);
    const clicouNoBotao = botaoEstilo.contains(event.target);

    if (!dentroDoMenu && !clicouNoBotao && menuAberto) {
        menuEstilo.classList.remove("ativo");
        menuEstilo.classList.add("fechar");
        menuAberto = false;
    }
});
