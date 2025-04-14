// const bntExibir =  document.getElementsByClassName("bnt-exibir");
// const icone = document.getElementsByClassName("fa-chevron-right");
// let menuAberto = false;

// bntExibir.addEventListener("click", function() {
//     if (menuAberto) {
//         icone[0].classList.remove("fa-chevron-right");
//         icone[0].classList.add("fa-chevron-down");
//     } else {
//         icone[0].classList.remove("fa-chevron-down");
//         icone[0].classList.add("fa-chevron-right");
//     }
// })

document.addEventListener("DOMContentLoaded", function () {
    const botaoExibir = document.querySelector(".bnt-exibir");
    const icone = botaoExibir.querySelector("i");
    const submenu = document.querySelector(".menu-lateral-submenu");

    botaoExibir.addEventListener("click", function (e) {
        e.preventDefault(); // previne comportamento do <a href="#">
        
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

