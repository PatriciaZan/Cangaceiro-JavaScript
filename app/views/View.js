class View {
    constructor(seletor){
        this._elemeto = document.querySelector(seletor);
    }

    update(model){
        this._elemeto.innerHTML = this.template(model);
    }

    template(model){
        throw new Error('Você precisa emplementar o método template');
    }
}