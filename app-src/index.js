var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade'),
]

//console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo){
        // cria uma td dem info
        var td = document.createElement('td');
        // atribui o valor do campo a td
        td.textContent = campo.value;
        // add a td na tr
        tr.appendChild(td);
    });

    // nova td que armazenará o volume da negociação
    var tdVolume = document.createElement('td');
    // posição 1 -> quantidade
    // posição 2 -> valor
    tdVolume.textContent = campos[1].value * campos[2].value;
    // add td que faltava a tr
    tbody.appendChild(tr)

    // Limpa os campos data | quantidade | valor
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    // Foca no campo data
    campos[0].focus();
})
