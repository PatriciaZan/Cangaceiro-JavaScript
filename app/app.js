// let controller = new NegociacaoController();

// document.querySelector('.form').addEventListener('submit', function(event){
//     controller.adiciona(event)
// })

let controller = new NegociacaoController();

    document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));