function showresults(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    if(altura < 0 || peso < 0){
        console.log("no")
    }else{
            if(altura > 3){
                altura = altura/100
            }
            
            var cal = peso/(altura*altura)
            var imc = Math.round(cal)
            if(imc < 25 && imc >= 18){
                document.getElementById('resposta').innerHTML = "Peso Normal, IMC = " +imc;
            }else if(imc<18){
                document.getElementById('resposta').innerHTML = "Abaixo do peso, IMC = " +imc;
            }else if(imc>25){
                document.getElementById('resposta').innerHTML = "Acima do peso, IMC = " +imc;
            }
            document.getElementById('resposta').classList.remove('hidden')
        }


    
}