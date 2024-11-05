export class HttpService{
    _handleErrors(res){
        if(!res.ok) throw new Error(res.statusText);
        return res;
    }
    get(url){
        return fetch(url)
            .then(res => this._handleErrors(res))
            .then(res => res.json());
    }
}



/*export class HttpService{
    get(url){
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
    
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        //const negociacoes = JSON
                        //.parse(xhr.responseText)
                        //.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
    
                        //cb(null, negociacoes);
                        resolve(JSON.parse(xhr.responseText));
            } else {
                //console.log(xhr.responseText);
                //cb('Não foi possível obter as negociações da seman', null)
                //reject('Não foi possível obter as negociações da semana')
                reject(xhr.responseText)
            }
        }
    };
        xhr.send();
    });
}}
*/
    
