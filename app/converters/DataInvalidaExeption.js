class DataInvalidaException extends AplicationExeption {
    constructor(){
        super('A data deve estar no formato dd/mm/aaaa');
        //this.name = this.constructor.name;
    }
}