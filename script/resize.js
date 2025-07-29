import { inicializarCards } from './criarCards.js';

export function observarRedimensionamentoTela() {
    const observer = new ResizeObserver(() => {
        inicializarCards();
    });

    observer.observe(document.body);
}
