function showresults(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    document.getElementById('resposta').classList.remove('hidden')
    
    
    if(altura < 0 || peso < 0){
        document.getElementById('resposta').innerHTML = "Informe dados válidos"  //Verifica a entrada de dados.
    }else{
            if(altura > 3){
                altura = altura/100 //conversão de centimetros para metros
            }
            
            var cal = peso/(altura*altura) 
            var imc = Math.round(cal) //arredondador.
            if(imc < 25 && imc >= 18){
                document.getElementById('resposta').innerHTML = "Peso Normal, IMC = " +imc;
            }else if(imc<18){
                document.getElementById('resposta').innerHTML = "Abaixo do peso, IMC = " +imc;
            }else if(imc>25){
                document.getElementById('resposta').innerHTML = "Acima do peso, IMC = " +imc;
            }
        }
}