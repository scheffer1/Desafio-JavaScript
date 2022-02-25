var a = 3; // 3

var minhaFuncao = function(numero){
    numero = 9;
    return numero;
};  // a função retorna 9


var novoNumero = minhaFuncao(a);

console.log('novoNumero =' +novoNumero); //Vai retornar 9.

console.log('a ='+ a); //Vai retornar 3.

    //-----------------------------------------------------------------//
    //    Daqui para baixo apenas os scripts da página.
    
    
        function showresults(){
        document.getElementById("resposta").classList.remove("hidden");
        document.getElementById("resposta").innerHTML = 'novoNumero = ' +novoNumero;
        document.getElementById("resposta").innerHTML += '<br> a = '+ a;
    }

