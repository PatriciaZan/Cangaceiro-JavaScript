System.register(['./domain/negociacao/NegociacaoController.js'], function (_export, _context) {
    "use strict";

    var NegociacaoController;
    return {
        setters: [function (_domainNegociacaoNegociacaoControllerJs) {
            NegociacaoController = _domainNegociacaoNegociacaoControllerJs.NegociacaoController;
        }],
        execute: function () {

            const controller = new NegociacaoController(); // let controller = new NegociacaoController();

            // document.querySelector('.form').addEventListener('submit', function(event){
            //     controller.adiciona(event)
            // })

            const $ = document.querySelector.bind(document);

            $('.form').addEventListener('submit', controller.adiciona.bind(controller));

            $('#botao-apaga').addEventListener('click', controller.apaga.bind(controller));

            $('#botao-importa').addEventListener('click', controller.importaNegociacoes.bind(controller));
        }
    };
});
//# sourceMappingURL=app.js.map