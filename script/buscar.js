import { dadosCard } from "./dadosCard.js";
import { criarPaginaCard } from './criarPaginaCard.js';

const input = document.querySelector('[data-input-buscar]');
const ul = document.querySelector('[data-ul-resultado]');
const divResultado = document.querySelector('[data-div-resultado]');

input.addEventListener('input', () => {
    const termo = input.value.toLowerCase().trim();
    ul.innerHTML = ''; // Limpa resultados antigos
    divResultado.style.display = 'block'

    const resultados = dadosCard.filter(item =>
      item.titulo.toLowerCase().includes(termo) ||
      item.descricao.toLowerCase().includes(termo) ||
      item.tag.toLowerCase().includes(termo)
    );

    if (resultados.length === 0) {
      const li = document.createElement('li');
      li.classList.add('li-resultado-busca');
      li.innerHTML = `
        <p>Nenhum resultado encontrado para: <span class="msg-erro-busca">${input.value}</span></p>
      `;
      ul.appendChild(li);
      // divResultado.style.padding = '10px';
      return;
    }


    resultados.forEach(card => {
      const li = document.createElement('li');
      li.classList.add('li-resultado-busca');
      li.innerHTML = `
        <p>${card.titulo}</p>
        <img src="${card.imagem}" alt="${card.titulo}" class="img-resultado-busca">
      `;

      li.addEventListener('click', () => {
        criarPaginaCard(card); //  Redireciona para card.html
      });

      ul.appendChild(li);

      divResultado.style.padding = '10px';
    });
});


document.addEventListener('click', (event) => {
const isClickInsideInput = input.contains(event.target);
const isClickInsideResults = divResultado.contains(event.target);

if (!isClickInsideInput && !isClickInsideResults) {
  divResultado.style.display = 'none';
} else {
  divResultado.style.display = 'block';
} 
});


