class NegociacaoController {

    constructor(){
        const $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        // Com auxilio do ProxyFactory
        this._negociacoes = new Bind(
            new Negociacoes(),
            new NegociacoesView('#negociacoes'),
            'adiciona', 'esvazia'
        );
        /*
        this._negociacoesView = new NegociacoesView('#negociacoes');
        this._negociacoesView.update(this._negociacoes);
        */
        this._mensagem = new Bind(
            new Mensagem(),
            new mensagemView('#mensagemView'),
            'texto'
        );

        /*
        this._mensagemView = new mensagemView('#mensagemView');
        this._mensagemView.update(this._mensagem);
        */
    }
     

    adiciona(event){

        try{
            event.preventDefault();
            this._negociacoes.adiciona(this._criaNegociacao());
            this._mensagem.texto = 'Negociação adicionada com sucesso';
            this._limpaFormulario();// limpando o formulario
        } catch(err){
            console.log(err);
            this._mensagem.texto = err.message;
            if(err instanceof DataInvalidaException){
                this._mensagem.texto = err.mensagem;
            } else{
                this._mensagem.texto = 'Umero não esperado aconteceu. Entre em contato com o suporte'
            }
            
        }

        //this._negociacoesView.update(this._negociacoes);
        //console.log(this._negociacoes);
        //this._mensagemView.update(this._mensagem); // atualiza a view 
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
        //this._mensagemView.update(this._mensagem);
    }
}
        
    

    
// Codigo Removido

//Proxy
        /*
        // referencia para a instancia de NegociacaoController
        const self = this;

        this._negociacoes = new Proxy(new Negociacoes(), {
            get (target, prop, receiver){
                if(typeof(target[prop]) == typeof(Function) && ['adiciona', 'esvazia']
                    .includes(prop)){
                        return function(){
                            console.log(`"${prop}" disparou a armadilha`);
                            target[prop].apply(target, arguments)
                            self._negociacoesView.update(target);
                        }
                    } else{
                        return target[prop];
                    }
            }
        });
        */

        // self é a negociacaoController
        //const self = this;
        /*
        this._negociacoes = new Negociacoes(model => {
            console.log(this);
            this._negociacoesView.update(model);
        });
        */


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