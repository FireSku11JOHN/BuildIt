const menuEstilo = document.getElementById('menu-estilo');

function mostrarMenuEstilo() {
    if (menuEstilo.style.display === 'block'){
        menuEstilo.style.display = 'none';
    }
    else{menuEstilo.style.display = 'block';}
}
