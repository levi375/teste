const menu = document.querySelector('.menu');
const quantidade_de_icones = 12;
const icones_visiveis = 6;
const largura_a_percorrer = (icones_visiveis / quantidade_de_icones) * 100;
const cliques_possiveis = quantidade_de_icones / icones_visiveis;
let repetições = 0;

if (window.innerWidth <= 600) {

	const quantidade_de_icones = 12;
	const icones_visiveis = 4;
	const largura_a_percorrer = (icones_visiveis / quantidade_de_icones) * 100;
	const cliques_possiveis = quantidade_de_icones / icones_visiveis;
	
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


