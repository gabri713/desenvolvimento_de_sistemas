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






    const imagens = [
        {
            "id": 11,
            "alternativo": "fun",
            "caminho": "1724968856063.jpg",
            "created_at": "2024-08-29T22:00:56.000Z"
        },
        {
            "id": 12,
            "alternativo": "tes",
            "caminho": "1724968882685.jpg",
            "created_at": "2024-08-29T22:01:22.000Z"
        }
    ]
    
    const anuncios = document.getElementById('anuncios');
    let listaAnuncios = '';
    
    for (let imagem of imagens) {
        listaAnuncios += `<img src='http://10.145.40.222:8080/public/${imagem.caminho}' alt='${imagem.alternativo}' />`
        console.log(imagem.caminho);
    }
    
    anuncios.innerHTML = listaAnuncios;







    const data = new Date('2024-08-29T03:00:00.000Z');

    let aula = [
        {
            "id": 1300,
            "data": "2024-08-29T03:00:00.000Z",
            "data_hora_inicio": "2024-08-29T21:00:00.000Z",
            "data_hora_fim": "2024-08-30T01:00:00.000Z",
            "turma": "EMP-NBM-03",
            "instrutor": "JOEL HERBERT BARBOSA SILVA",
            "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
            "ambiente": "VTRIA-3-SALA-3004",
            "chave": null
        },
        {
            "id": 1280,
            "data": "2024-08-29T03:00:00.000Z",
            "data_hora_inicio": "2024-08-29T21:00:00.000Z",
            "data_hora_fim": "2024-08-30T01:00:00.000Z",
            "turma": "UMO-MBMM-03",
            "instrutor": "THADEU VASCONCELOS DA SILVA GOMES",
            "unidade_curricular": "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
            "ambiente": "VTRIA-EXTER-EXTERNO",
            "chave": null
        },
        {
            "id": 1326,
            "data": "2024-08-29T03:00:00.000Z",
            "data_hora_inicio": "2024-08-29T21:30:00.000Z",
            "data_hora_fim": "2024-08-30T01:00:00.000Z",
            "turma": "HTC-MEC-4-92",
            "instrutor": "AFONSO DE JESUS CORDEIRO",
            "unidade_curricular": "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
            "ambiente": "VTRIA-3-LAB-3003",
            "chave": null
        }
    ]







    
console.log(data);



function abreviaData(data){
    const hora_aula = new Date(data);
    return hora_aula.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit'});
}

export default abreviaData;





const aulas = [
    {
        "id": 1300,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "EMP-NBM-03",
        "instrutor": "JOEL HERBERT BARBOSA SILVA",
        "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
        "ambiente": "VTRIA-3-SALA-3004",
        "chave": null
    },
    {
        "id": 1280,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "UMO-MBMM-03",
        "instrutor": "THADEU VASCONCELOS DA SILVA GOMES",
        "unidade_curricular": "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
        "ambiente": "VTRIA-EXTER-EXTERNO",
        "chave": null
    },
    {
        "id": 1326,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:30:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "HTC-MEC-4-92",
        "instrutor": "AFONSO DE JESUS CORDEIRO",
        "unidade_curricular": "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
        "ambiente": "VTRIA-3-LAB-3003",
        "chave": null
    }
]

const anuncios = [
    {
        "id": 11,
        "alternativo": "fun",
        "caminho": "1724968856063.jpg",
        "created_at": "2024-08-29T22:00:56.000Z"
    },
    {
        "id": 12,
        "alternativo": "tes",
        "caminho": "1724968882685.jpg",
        "created_at": "2024-08-29T22:01:22.000Z"
    }
]


for (let aula of aulas){
    console.log(abreviaData(aula.data_hora_inicio));
}
    