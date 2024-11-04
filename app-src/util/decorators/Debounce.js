/*export function debounce(fn, milissegundos){
    let timer = 0;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(), milissegundos);
    }
}*/

export function debounce(milissegundos = 500){
    return function(target, key, descriptor){
        return descriptor;
    }
}