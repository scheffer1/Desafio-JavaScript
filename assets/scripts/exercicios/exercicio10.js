function hasDuplicates() {
    var input = document.getElementById('input').value;
    toString(input);
    var arr  = input.split(',') //string para array
    var checador = [];
    for (var i = 0; i < arr.length; ++i) {
        var value = arr[i];
        if (checador.indexOf(value) !== -1) {
            return true;
        }
        checador.push(value);
    }
    return false;
}


function showresults(){
    var  hasDuplicate = hasDuplicates();
    document.getElementById('resposta').classList.remove('hidden')
    if(hasDuplicate){
        document.getElementById('resposta').innerHTML = "Tem duplicados"
    }else{
        document.getElementById('resposta').innerHTML = "Não tem duplicados"
    }
}