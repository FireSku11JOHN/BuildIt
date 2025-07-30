import { dadosCard } from "../dados/dadosCard.js";
import { criarPaginaCard } from './criarPaginaCard.js';

const input = document.querySelector('[data-input-buscar-menu-lateral]');
const ul = document.querySelector('[data-ul-resultado-menu-lateral]');
const divResultado = document.querySelector('[data-div-resultado-menu-lateral]');
const trocarIcon = document.querySelector('.icone');
const bntItem= document.querySelector('[data-none-itens');

input.addEventListener('click', () => {
    trocarIcon.classList.remove('fas');
    trocarIcon.classList.remove('fa-search');
    trocarIcon.classList.add('fa-solid');
    trocarIcon.classList.add('fa-arrow-left');

    bntItem.style.display = 'none';
})

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
      <p style="color: black">Nenhum resultado encontrado para: <span class="msg-erro-busca">${input.value}</span></p>
    `;
    ul.appendChild(li);
    // divResultado.style.padding = '10px';
    return;
  }

  resultados.forEach(card => {
    const li = document.createElement('li');
    li.classList.add('li-resultado-busca');
    li.innerHTML = `
      <p class="p-resultado-ml">${card.titulo}</p>
      <img src="${card.imagem}" alt="${card.titulo}" class="img-resultado-busca-ml">
    `;

    li.addEventListener('click', () => {
      criarPaginaCard(card); //  Redireciona para card.html
    });

    ul.appendChild(li);

    divResultado.style.padding = '10px';
  });
});



