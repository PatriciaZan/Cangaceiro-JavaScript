/*import { Negociacoes } from '../domain/negociacao/Negociacoes.js'
;
import { NegociacoesView } from '../ui/views/NegociacoesView.js';
import { Mensagem } from '../ui/models/Mensagem.js';
import { MensagemView } from '../ui/views/MensagemView.js';
import { NegociacaoService } from '../domain/negociacao/NegociacaoService.js';

import { getNegociacaoDao } from '../util/DaoFactory.js';
import { DataInvalidaException } from '../ui/converters/DataInvalidaException.js';
import { Negociacao } from '../domain/negociacao/Negociacao.js';
import { Bind } from '../util/Bind.js';
import { DateConverter } from '../ui/converters/DateConverter.js';
*/
import { Negociacoes, NegociacaoService, Negociacao} from '../../domain/index.js';
import { NegociacoesView, MensagemView, Mensagem, DateConverter } from '../../ui/index.js';
import { getNegociacaoDao, Bind, getExceptionMessage } from '../../util/index.js';
export class NegociacaoController {

    constructor(){
        const $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._service = new NegociacaoService();

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
        this._init();
    }
    async _init(){
        try{
            const dao = await getNegociacaoDao();
            const negociacao = await dao.listaTodos();
            negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao))
        } catch(err){

            this._mensagem.texto = getExceptionMessage(err);
        }
        /*
        getNegociacaoDao()
        .then(dao => dao.listaTodos())
        .then(negociacoes => 
            negociacoes.forEach(negociacao =>
                this._negociacoes.adiciona(negociacao)))
        .catch(err => this._mensagem.texto = err);
        */
    };


    async adiciona(event){
        try{
            event.preventDefault();
            //DaoFactory add
            const negociacao = this._criaNegociacao();

            const dao = await getNegociacaoDao();
            await dao.adiciona(negociacao);
            this._negociacoes.adiciona(negociacao);
            this._mensagem.texto = 'Negociação adicionada com sucesso';
            this._limpaFormulario();
        
        } catch(err){
            this._mensagem.texto = getExceptionMessage(err);     
        }
        //this._negociacoesView.update(this._negociacoes);
        //console.log(this._negociacoes);
        //this._mensagemView.update(this._mensagem); // atualiza a view 
    }

    async importaNegociacoes(){  
        try{
            const negociacoes = await this._service.obterNegociacoesDoPeriodo();
            console.log(negociacoes);
            negociacoes.filter(novaNegociacao =>
                !this._negociacoes.paraArray().some(negociacaoExistente =>
                    novaNegociacao.equals(negociacaoExistente)))
                .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações importadas com sucesso';
        } catch(err){
            this._mensagem.texto = getExceptionMessage(err);
        }  
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

    async apaga(){
        try{
            const dao = await getNegociacaoDao();
            await dao.apagaTodos();
            this._negociacoes.esvazia();
            this._mensagem.texto = 'Negociações apagadas com sucesso';
        }catch(err){
            this._mensagem.texto = getExceptionMessage(err);
        }       
}
        
    

    
// Codigo Removido
  //DaoFactory
        /*
            getNegociacaoDao()
            .then(dao => dao.apagaTodos())
            .then(() => {
                this._negociacoes.esvazia();
                this._mensagem.texto = 'Negociações apagadas com sucesso';
            })
            .catch(err => this._mensagem.texto = err);
*/

 //this._negociacoes.esvazia();
        //this._negociacoesView.update(this._negociacoes);
        //this._mensagem.texto = 'Negociações apagadas com sucesso';
        //this._mensagemView.update(this._mensagem);
    }

     //const promise = this._service.obterNegociacoesDaSemana();
        /*
        const negociacoes = [];

        this._service
            .obterNegociacoesDaSemana()
            .then(semana => {
                negociacoes.push(...semana);
                return this._service.obterNegociacoesDaSemanaAnterior();
            })
            .then(anterior => {
                negociacoes.push(...anterior);
                negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações importadas com sucesso';
            })
            .catch(err => this._mensagem.texto = err);
        */
  /*
            console.log(err);
            console.log(err.stack);
            this._mensagem.texto = err.message;
            if(err instanceof DataInvalidaException){
                this._mensagem.texto = err.mensagem;
            } else{
                this._mensagem.texto = 'Um ero não esperado aconteceu. Entre em contato com o suporte'
            }*/
/* 
            //DaoFactory
                getNegociacaoDao()
                .then(dao => dao.adiciona(negociacao))
                .then(() => {
                    this._negociacoes.adiciona(negociacao);
                    this._mensagem.texto = 'Negociação adicionada com sucesso';
                    this._limpaFormulario();
                })
                .catch(err => this._mensagem.texto = err);
        */

            //this._negociacoes.adiciona(this._criaNegociacao());
            //this._mensagem.texto = 'Negociação adicionada com sucesso';
            //this._limpaFormulario();// limpando o formulario
/*
        this._service.obterNegociacoesDaSemana();

        if(err) {
            this._mensagem.texto = 'Não foi possível obter as negociações da semana';
            return;
            }

            negociacoes.forEach(negociacao =>
                this._negociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações importadas com sucesso';
    */
/*


        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    JSON
                    .parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                    .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                    this._mensagem.texto = 'Negociações importadas com sucesso!';

                    //console.log('Obtendo as negociações do servidor.');
                    //console.log(JSON.parse(xhr.responseText));
                } else {
                    console.log(xhr.responseText);
                    this._mensagem.texto = 'Não foi possível obter as negociações da semana.';
                }
            }
        };
        xhr.send();
        */

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