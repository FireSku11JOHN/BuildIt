export function criarCabecalho() {
    const headerHTML = `
        <header class="cabecalho">
        <a href="/" class="container_logo">
            <img class="logo"
            src="/src/logo_buildit-mobile.svg" 
            sizes="( max-width: 768px ) 100vw, 1280px"
            srcset="/src/logo_buildit-desktop.svg 1280w"
            alt="Logo Buildit">
        </a>

        <nav id="menu">
            <ul class="botoes">
            <li><a href="/" class="botoes-item">HOME</a></li>
            <li><a href="pages/sobre_nos.html" class="botoes-item">SOBRE</a></li>
            <li><button class="botoes-item btn-estilo">ESTILOS</button></li>
            </ul>
        </nav>

        <div id="container-buscar">
            <div class="campo-busca">
            <a id="btn-buscar"><i class="fas fa-search"></i></a>
            <input id="input-buscar" type="text" placeholder="Buscar por palavra-chave" autocomplete="off" data-input-buscar>
            <a id="btn-limpar" data-btn-limpar><i class="fa-solid fa-xmark"></i></a>
            </div>
        </div>   

        <div id="container-opcoes">


            <label class="burger" for="menuToggle">
            <input type="checkbox" id="menuToggle">
            <span></span>
            <span></span>
            <span></span>
            </label>
        </div>
        </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);                                             
}

/* <div id="btn-entrar">
<button id="btnEntrar">Entrar</button>
</div> */