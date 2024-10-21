// let controller = new NegociacaoController();

// document.querySelector('.form').addEventListener('submit', function(event){
//     controller.adiciona(event)
// })

const controller = new NegociacaoController();

    document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));

    document
    .querySelector('#botao-apaga')
    .addEventListener('click', controller.apaga.bind(controller));