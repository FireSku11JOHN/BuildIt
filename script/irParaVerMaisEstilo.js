import { dadosEstilos } from "./dadosEstilos.js";

function normalizarTag(str) {
    return str
      .normalize("NFD")                         // Remove acentos
      .replace(/[\u0300-\u036f]/g, "")         // Remove marcas de acento
      .toLowerCase()                           // Converte para minúsculo
      .replace(/\s+/g, '-');                   // Substitui espaços por traços
  }
  

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('menu-estilo').addEventListener('click', (e) => {
        const bnt = e.target.closest('.btnEstilo');
        if (bnt) {
            console.log('Botão clicado:',bnt.textContent);
            const tagEstilo = dadosEstilos.find(id => id.tag === normalizarTag(bnt.textContent));
            if (tagEstilo) {
                console.log('Tag do estilo:', tagEstilo.tag);
                window.location.href = `/pages/todosCardsEstilos.html?estilo=${encodeURIComponent(tagEstilo.tag)}`;               
            }
        }
    })  
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('menu-lateral').addEventListener('click', (e) => {
        const bnt = e.target.closest('.menu-lateral-submenu_item-botao');
        if (bnt) {
            console.log('Botão clicado:',bnt.textContent);
            const tagEstilo = dadosEstilos.find(id => id.tag === normalizarTag(bnt.textContent));
            if (tagEstilo) {
                console.log('Tag do estilo:', tagEstilo.tag);
                window.location.href = `/pages/todosCardsEstilos.html?estilo=${encodeURIComponent(tagEstilo.tag)}`;               
            }
        }
    })  
});