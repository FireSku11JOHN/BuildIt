// import { dadosDosCards } from "./dadosDosCards"; 

export function criarPaginaCard(cardDados){
    localStorage.setItem('cardSelecionado', JSON.stringify(cardDados));
    window.location.href = "./pages/card.html"; 
}
    