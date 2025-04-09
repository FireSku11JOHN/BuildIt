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