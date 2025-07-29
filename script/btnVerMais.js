// Ação do botão "VER MAIS"
document.getElementById('container-estilos').addEventListener('click', (e) => {
    const botao = e.target.closest('.bnt-vermais-cards');
    if (botao) {
        const tag = botao.getAttribute('data-tag');
        window.location.href = `./pages/todosCardsEstilos.html?estilo=${encodeURIComponent(tag)}`;
    }
});