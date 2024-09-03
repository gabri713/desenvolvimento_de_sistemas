'use strict';

// Criando função para atualizar saudação
function atualizaSaudacao(){


// Obtendo data de agora
const agora = new Date();
//console.log(agora.getDay());

// Obtendo o numero da semana iniciando de 0 indo até 6
const dia = agora.getDay();

// Criando o Array de dias da semana equivalente
const dias = ['Domingo','Segunda-feira', 'Terça-feira','Quarta-feira','Quinta-feira', 'Sexta-feira','Sabado'];
//console.log(dias[dia]);

//Obtendo horas em valor inteiro
const hora = agora.getHours();

//Declarando variavel de cumprimento
let cumprimento = '';

//verificação da saudação adequada
if (hora < 6){
    cumprimento = 'Boa madrugada';
}else if (hora < 12){
    cumprimento = 'Bom Dia';

}else if (hora< 18){
    cumprimento = ' Boa tarde';


}else{
    cumprimento = 'Boa Noite';
}

// selecionando elemento
const saudacao = document.getElementById('saudacao');

//adicionando no documento html
saudacao.innerHTML = `${dias[dia] } -  ${cumprimento}`;

// chamando função de forma recursiva
setTimeout(atualizaSaudacao, 1000);

}
atualizaSaudacao();