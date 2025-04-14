const menuToggle = document.getElementById("menuToggle");
const menuLateral = document.getElementById("menu-lateral");

menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    menuLateral.classList.remove("fechar");
    menuLateral.classList.add("ativo");
  } else {
    menuLateral.classList.remove("ativo");
    menuLateral.classList.add("fechar");
  }
});

document.addEventListener("click", function (event) {
  const clicouDentroDoMenu = menuLateral.contains(event.target);
  const clicouNoToggle = menuToggle === event.target || menuToggle.contains(event.target);
  const labelToggle = document.querySelector("label[for='menuToggle']");
  const clicouNoLabel = labelToggle && labelToggle.contains(event.target);

  // Se clicou fora do menu e fora do botão/label
  if (!clicouDentroDoMenu && !clicouNoToggle && !clicouNoLabel && menuToggle.checked) {
    // Dá um pequeno delay pra não interferir no clique do input
    setTimeout(() => {
      menuToggle.checked = false;
      menuLateral.classList.remove("ativo");
      menuLateral.classList.add("fechar");
    }, 10);
  }
});
