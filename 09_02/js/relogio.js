'use strict';

// Criando função para atualizar o relogio
function atualizaRelogio(){

// Atribuindo a uma variavel o elemento com id relogio
const relogio = document.getElementById('relogio');

//Obtendo data-hora de agora
const agora = new Date();

//console.log(agora);

//Obtendo hora, minutos e segundos da hora atual
const horasMinutosSegundos = agora.toLocaleTimeString('pt-br',{hour: '2-digit', minute: '2-digit', second: '2-digit'});

// Adicionando pagina ao relogio 
relogio.innerHTML = horasMinutosSegundos;

// Aplicando recursividade para o relogio atualiozando a cada 1000 milisegundo(1 segundo)
setTimeout(atualizaRelogio,1000);
}
atualizaRelogio();