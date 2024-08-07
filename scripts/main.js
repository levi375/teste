const menu = document.querySelector('.menu');
const quantidade_de_icones = 14;
let icones_visiveis = 7;
let largura_a_percorrer = 0
let cliques_possiveis = 0
let repetições = 0;

function ajustarMenu() {
    if (window.innerWidth <= 600) {
        icones_visiveis = 3;
    } else {
        icones_visiveis = 7;
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

/*----------------------------------------------------------------------------------------------*/
const links = document.querySelectorAll('a');
const opcao = document.querySelector('#opcao');

links.forEach((link, index) => {
    if (index < links.length - 2) { 
        link.addEventListener('click', function(event) {
			opcao.style.visibility = 'visible';
			opcao.style.opacity = '100%';
        });
    }
});
	
/*----------------------------------------------------------------------------------------------*/
const opcao1 = document.querySelector('#opcao1');
const opcao2 = document.querySelector('#opcao2');
const canais = [
    { id: 'cnnbrasil', embedMax: 'cnnbrasil.php', reidosCanais: 'cnnbrasil' },
    { id: 'globonews', embedMax: 'globonews.php', reidosCanais: 'globonews' },
    { id: 'globo', embedMax: 'globoRJ.php', reidosCanais: 'globorj-globorio' },
    { id: 'starchannel', embedMax: 'starchannel.php', reidosCanais: 'starchannel' },
    { id: 'tnt', embedMax: 'tnt.php', reidosCanais: 'tnt' },
    { id: 'megapix', embedMax: 'megapix.php', reidosCanais: 'megapix' },
    { id: 'fx', embedMax: 'fx.php', reidosCanais: 'fx' },
    { id: 'warnerchannel', embedMax: 'warnertv.php', reidosCanais: 'warnertv' },
    { id: 'comedycentral', embedMax: 'comedycentral.php', reidosCanais: 'comedycentral' },
    { id: 'sportv1', embedMax: 'sportv1.php', reidosCanais: 'sportvalternativo' },
    { id: 'sportv2', embedMax: 'sportv2.php', reidosCanais: 'sportv2alternativo' },
	{ id: 'sportv3', embedMax: 'sportv3.php', reidosCanais: 'sportv3alternativo' },
    { id: 'animalplanet', embedMax: 'animalplanet.php', reidosCanais: 'animalplanet' },
    { id: 'ufcfightpass', embedMax: 'ufcfightpass.php', reidosCanais: 'ufcfightpass' },
];

canais.forEach(canal => {
    const element = document.querySelector(`#${canal.id}`);
    element.addEventListener('click', function() {
        opcao2.href = `https://embedmax.site/tvl/${canal.embedMax}`;
        opcao1.href = `https://reidoscanais.eu/embed/?id=${canal.reidosCanais}`;
    });
});

/*----------------------------------------------------------------------------------------------*/
const botaoteste = document.querySelector("#botaoteste");
const img_button = botaoteste.querySelector("img");
const img1 = "images/buttons/abrir.svg";
const img2 = "images/buttons/fechar.svg";


function menu2() {
    if (img_button.src.includes(img1)){
		alert("Em construção");
        img_button.src = img2;
		
    } else {
        img_button.src = img1;
    }
}

