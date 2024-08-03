const menu = document.querySelector('.menu');
const quantidade_de_icones = 12;
let icones_visiveis = 6;
let largura_a_percorrer = (icones_visiveis / quantidade_de_icones) * 100;
let cliques_possiveis = quantidade_de_icones / icones_visiveis;
let repetições = 0;

function ajustarMenu() {
    if (window.innerWidth <= 600) {
        icones_visiveis = 4;
    } else {
        icones_visiveis = 6;
    }
    largura_a_percorrer = (icones_visiveis / quantidade_de_icones) * 100;
    cliques_possiveis = quantidade_de_icones / icones_visiveis;
}

function direita() {
    repetições++;
    if (repetições >= cliques_possiveis) {
        repetições = cliques_possiveis - 1;
    }
    menu.style.transform = `translate(-${largura_a_percorrer * repetições}%)`;
}

function esquerda() {
    repetições--;
    if (repetições < 0) {
        repetições = 0;
    }
    menu.style.transform = `translate(-${largura_a_percorrer * repetições}%)`;
}

ajustarMenu();
window.addEventListener('resize', ajustarMenu);
