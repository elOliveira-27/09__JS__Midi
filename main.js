/* 
querySelect - BUSCA APENAS UM ITEM // querySelectAll -  BUSTA A LISTA DOS ITENS
while = enquanto; 
lenth = tamanho, comprimento;
for - para;
template string = ${}
if = se 
|| = ou
!= diferente
== igual
=== igual melhor
*/

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
        //alert('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/*
Trocamos - while (contador < listaDeTeclas.length) por for (let contador = 0; contador < listaDeTeclas.length)
pois com o for podemos declarar a varivavel contador ("let contador = 0") dentro dos parenteses.
Ou seja, se for utilizar o WHILE precisa declarar a variavel fora dos parenteses.

Outro ponto, no WHILE precisamos declarar dentro das {} contador = contador + 1;, 
utrilizando FOR podemos colocar dentro dos parenteses com contador ++ que representa contador = contador + 1.

ABAIXO SEGUE A FUNCAO UTILIZANDO WHILE:

let contador = 0
while (contador < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    contador = contador + 1;
}
*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento) {

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
