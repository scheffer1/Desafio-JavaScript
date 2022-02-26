function showresults(){
    var n1 = parseInt(document.getElementById('n1').value) 
    var n2 = parseInt(document.getElementById('n2').value)
    var n3 = parseInt(document.getElementById('n3').value)
    if(!(isNaN(n3)|| isNaN(n2) || isNaN(n1))){                  //checa se há algo digitado
        document.getElementById('resposta').classList.remove('hidden')
        var media = (n1 + n2 + n3)/3
        document.getElementById('resposta').innerHTML = media;
    }
    
}


var qtd = 0, lastNumber = 0;

function showresults2(){
    
    var n4 = document.getElementById('n4').value;
    console.log(n4)
    if(n4 != ''){  //checa se há algo digitado
        document.getElementById('resposta2').classList.remove('hidden')
        qtd++  //contador
        var n5 = parseInt(n4);
        n5=n5+lastNumber
        document.getElementById('resposta2').innerHTML = n5/qtd;
        document.getElementById("n4").value = ''; 
        lastNumber=n5
    }
}