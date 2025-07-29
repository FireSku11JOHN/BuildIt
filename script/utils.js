export function obterLimitePorLargura(largura) {
    if (largura >= 814) return 10;
    if (largura >= 648) return 8;
    return 6;
}
