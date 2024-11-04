// let controller = new NegociacaoController();

// document.querySelector('.form').addEventListener('submit', function(event){
//     controller.adiciona(event)
// })

import { NegociacaoController } from './domain/negociacao/NegociacaoController.js';
//import { debounce } from './util/Debounce.js';

const controller = new NegociacaoController();
const $ = document.querySelector.bind(document);

    
    $('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));

    $('#botao-apaga')
    .addEventListener('click', controller.apaga.bind(controller));

    $('#botao-importa')
    .addEventListener('click', controller.importaNegociacoes.bind(controller));
    /*
    $('#botao-importa')
    .addEventListener('click', debounce(() => {
        console.log('EXECUTOU A OPERAÇÃO DE DEBOUNCE');
        controller.importaNegociacoes()}, 1000));
    */
        