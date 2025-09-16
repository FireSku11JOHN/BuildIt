import { dadosEstilos } from '../dados/dadosEstilos.js';
import { criarSecoesEstilo } from './layout.js';
import { inicializarCards } from './criarCards.js';
import { observarRedimensionamentoTela } from './resize.js';

import { criarCabecalho } from "./elementos/criarCabecalho.js";
import { abrirOpcoesAvatar } from './cabecalho/btnAvatar.js';
import { login } from './login.js';

const containerEstilo = document.getElementById('container-estilos');
const containerBotao = document.getElementById('botao-ver-todos-container');

let exibindoTodos = false;

// Função auxiliar para limpar estilos existentes
function limparEstilos() {
    containerEstilo.innerHTML = '';
}

// Função para atualizar botões
function atualizarBotoes() {
    botaoVerTodos.style.display = exibindoTodos ? 'none' : 'inline-block';
    botaoVerMenos.style.display = exibindoTodos ? 'flex' : 'none';
}

// Botão "VER TODOS ESTILOS"
const botaoVerTodos = document.createElement('button');
botaoVerTodos.classList.add('btn-voltar', 'bnt-vermais-cards-todos');
botaoVerTodos.innerHTML = `VER TODOS ESTILOS <i class="fa-solid fa-arrow-right"></i>`;
botaoVerTodos.addEventListener('click', () => {
    exibindoTodos = true;
    limparEstilos();
    criarSecoesEstilo(dadosEstilos); // todos
    inicializarCards();
    atualizarBotoes();
});

// Botão "VER MENOS ESTILOS"
const botaoVerMenos = document.createElement('button');
botaoVerMenos.classList.add('btn-voltar', 'bnt-vermais-cards-todos');
botaoVerMenos.innerHTML = `VER MENOS ESTILOS <i class="fa-solid fa-arrow-up"></i>`;
botaoVerMenos.style.display = 'none'; // inicia escondido
botaoVerMenos.addEventListener('click', () => {
    exibindoTodos = false;
    limparEstilos();
    criarSecoesEstilo(dadosEstilos.slice(0, 8)); // apenas os 8 primeiros
    inicializarCards();
    atualizarBotoes();
});

// Adiciona os dois botões no container
containerBotao.appendChild(botaoVerTodos);
containerBotao.appendChild(botaoVerMenos);

// Inicializa com os primeiros estilos
criarSecoesEstilo(dadosEstilos.slice(0, 8));
inicializarCards();
observarRedimensionamentoTela();

// document.addEventListener("DOMContentLoaded", criarCabecalho);
abrirOpcoesAvatar();
login();

