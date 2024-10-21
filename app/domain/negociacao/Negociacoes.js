class Negociacoes {
    constructor(armadilha){
        this._negociacoes = [];
        this._armadilha = armadilha;
        //this._contexto = contexto;
        // Congela a instância
        Object.freeze(this);
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);

        //chamando a função
        this._armadilha(this);
    }
    paraArray(){
        // retorna nova referencia com os itens de this._negociacoes
        return [].concat(this._negociacoes);
    }

    get volumeTotal(){
        return this._negociacoes.reduce((total, negociacao) => total + negociacao.volum, 0)
    }

    esvazia(){
        this._negociacoes.length = 0;

        //chamando a função
        this._armadilha(this);
    }
}