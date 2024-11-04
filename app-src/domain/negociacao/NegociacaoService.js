import { HttpService } from '../../util/HttpService.js';
import { Negociacao } from './Negociacao.js';
import { isApplicationException } from '../../util/ApplicationExeption.js';

export class NegociacaoService {

    constructor(){
        this._http = new HttpService();
    }
    obterNegociacoesDaSemana(){
        return this._http.get('negociacoes/semana')
        .then(
            dados => 
                dados.map(objeto =>
                    new NegociacaoService(new Date(objeto.data), objeto.quantidade, objeto.valor)),
                    err => {
                        throw new ApplicationException('Não foi possível obter as negociações da semana');
                    }
            ) 
    }

    obterNegociacoesDaSemanaAnteior(){
        return this._http.get('negociacoes/anterior')
        .then(
            dados => 
                new Negociacoes = dados.map(objeto =>
                    new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)),
            err => {
                throw new ApplicationException('Não foi possível obter as negociações da semana anterior');
            }
        )
    }

    obterNegociacoesDaSemanaRetrasada(){
        return this._http
        .get('negociacoes/retrasada')
        .then(
            dados =>  dados.map(objeto => 
                    new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)),
            err => {
                throw new ApplicationException('Não foi possível obter as negociações da semana retrasada');
            }
        );
    }

    async obtemNegociacoesDoPeriodo() {
        try{
            let periodo = await Promise.all([
                this.obtemNegociacoesDaSemana(),
                this.obtemNegociacoesDaSemanaAnterior(),
                this.obtemNegociacoesDaSemanaRetrasada()
            ]);
            return periodo
                .reduce((novoArray, item) => novoArray.concat(item), [])
                .sort((a, b) => b.data.getTime() - a.data.getTime());
        } catch(err){
            console.log(err);
            throw new ApplicationException('Não foi possível obter as negociações do período');
            
        }
            
        /*
        .then(periodo =>  periodo
            .reduce((novoArray, item) => novoArray.concat(item), [])
            .sort((a, b) => b.data.getTime() - a.data.getTime())
        )
        .catch(err => {
            console.log(err);
            throw new ApplicationException('Não foi possível obter as negociações do período')
        });
        */
    }

    
    importaNegociacoes(){
        this._service
        .obtemNegociacoesDoPeriodo()
        .then(negociacoes => {
            negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações do período importadascom sucesso';
        })
        .catch(err => this._mensagem.texto = err);
        
    }

    
}

/*
        const negociacoes = [];

        this._service
        .obtemNegociacoesDaSemana()
        .then(semana => {
            negociacoes.push(...semana);
            return this._service.obtemNegociacoesDaSemanaAnterior();
        })
        .then(anterior => {
            negociacoes.push(...anterior);
            return this._service.obtemNegociacoesDaSemanaRetrasada()
        })
        .then(retrasada => {
            negociacoes.push(...retrasada);
            negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso';
        })
        .catch(err => this._mensagem.texto = err);
        */

/*
return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'negociacoes/semana');

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                const negociacoes = JSON
                .parse(xhr.responseText)
                .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))

                //cb(null, negociacoes);
                resolve(negociacoes);
    } else {
        //console.log(xhr.responseText);
        //cb('Não foi possível obter as negociações da seman', null)
        reject('Não foi possível obter as negociações da seman')
    }
}
};
xhr.send();
});
*/