// import { dadosCardSection } from "./dadosCardSection.js";  
// const InputBuscar = () => {
//     const inputBuscar = document.querySelector('[data-input-buscar]')

//     inputBuscar.addEventListener('input', (event) => {
//         console.log(event.target.value);
//         const ul = document.querySelector('[data-ul-resultado]')
//         const li = document.createElement('li');
//         li.classList.add('li-resultado-busca');
//         li.innerHTML = `<p>${inputBuscar.value}</p>`
//         ul.appendChild(li);
//     })

// }

// InputBuscar();


import { dadosCardSection } from "./dadosCardSection.js";

const input = document.querySelector('[data-input-buscar]');
const ul = document.querySelector('[data-ul-resultado]');

input.addEventListener('input', () => {
  const termo = input.value.toLowerCase().trim();
  ul.innerHTML = ''; // Limpa resultados antigos

  if (!termo) return;

  const resultados = dadosCardSection.filter(item =>
    item.titulo.toLowerCase().includes(termo) ||
    item.descricao.toLowerCase().includes(termo) ||
    item.tag.toLowerCase().includes(termo)
  );

  resultados.forEach(card => {
    const li = document.createElement('li');
    li.classList.add('li-resultado-busca');
    li.innerHTML = `
      <p><strong>${card.titulo}</strong></p>
      <p>${card.descricao.slice(0, 60)}...</p>
    `;
    li.addEventListener('click', () => {
      window.open(card.url, '_blank'); // Abre o vídeo ao clicar
    });
    ul.appendChild(li);
  });

  ul.style.display = resultados.length ? 'block' : 'none';
});
