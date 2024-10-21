class NegociacaoController {

    constructor(){
        const $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        // self é a negociacaoController
        //const self = this;

        this._negociacoes = new Negociacoes(model => {
            console.log(this);
            this._negociacoesView.update(model);
        });

        this._negociacoesView = new NegociacoesView('#negociacoes');
        this._negociacoesView.update(this._negociacoes);
        this._mensagem = new Mensagem();

        this._mensagemView = new mensagemView('#mensagemView');
        this._mensagemView.update(this._mensagem);
    }
     

    adiciona(event){
        event.preventDefault();
        this._negociacoes.adiciona(this._criaNegociacao());
        //this._negociacoesView.update(this._negociacoes);
        //console.log(this._negociacoes);
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem); // atualiza a view 

        this._limpaFormulario();// limpando o formulario
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0
        this._inputData.focus();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

    apaga(){
        this._negociacoes.esvazia();
        //this._negociacoesView.update(this._negociacoes);
        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }
}
        
    

    
// Codigo Removido
/* let inputData = document.querySelector('#data');
        // let inputQuantidade = document.querySelector('#quantidade');
        // let inputValor = document.querySelector('#valor');
        /*
        console.log(this._inputData.value);
        console.log(parseInt(this._inputQuantidade.value));
        console.log(parseFloat(this._inputValor.value));
        
        // 2
        let negociacao = new Negociacao(
            this._inputData.value,
            parsenInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )
        
        //console.log(negociacao.data);

        // 3
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map((item, indice) =>  item - indice % 2)
        );
        
        //console.log(data);

        // 4
        let converter = new DateConverter();
        let data = converter.paraData(this._inputData.value);
            
        let negociacao = new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )
        
        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.paraArray());
        
        let diaMesAno = converter.paraTexto(negociacao.data);
        console.log(diaMesAno);;
        
        // Apagar a lista
        this._negociacoes.paraArray().length = 0;
        //
        console.log(this._negociacoes.paraArray());
*/