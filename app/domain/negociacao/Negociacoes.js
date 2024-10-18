class Negociacoes {
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }
    paraArray(){
        // retorna nova referencia com os itens de this._negociacoes
        return [].concat(this._negociacoes);
    }
}