'use strict';

let html = document.getElementById('saudacao');

console.log(html);

// DOM (document object model) é a estrutura da pagína HTML.
// o DOM permite que linguagens interajam com a pagina

html.innerHTML= '<h1>Olá mundo</h1>';

let alunos = [
    {nome: 'GABRIEL' , sobrenome: 'RESENDE PEREIRA'},
    {nome: 'GIAMPAOLO' , sobrenome: 'RESENDE PEREIRA'},
    {nome: 'GUSTAVO' , sobrenome: 'DIAS SANTANA'}
]

let tabela = document.getElementById('tabela');

for(let aluno of alunos){
    exibir+= '<tr>'
    exibir+= '<td>'+aluno.nome+'</td>'
    exibir+= '<td>'+aluno.sobrenome+'</td>'
    exibir+= '</tr>'
}

tabela.innerHTML += exibir;

console.log(tabela);