var n100, r100, n50, r50, n20, r20, n10, r10;
function showresults(){
    document.getElementById('resposta').innerHTML = ""
    document.getElementById("resposta").classList.remove("hidden");
    var saque = document.getElementById('input').value;
    n100 = saque/100;
    r100 = saque%100;

    n50 = r100/50;
    r50 = r100%50;   //separa as notas

    r20 = r50%20;
    n20 = r50/20;

    n10 = r20/10;
    r10 = r20%10;
    
    if(n100 != 0){
        document.getElementById('resposta').innerHTML += Math.floor(n100)+" notas de 100 <br>" //arredonda o valor das notas e mostra a quantidade
    }
    if(n50 != 0){
        document.getElementById('resposta').innerHTML += Math.floor(n50)+" notas de 50 <br>"
    }
    if(n20 != 0){
        document.getElementById('resposta').innerHTML += Math.floor(n20)+" notas de 20 <br>"
    }
    if(n10 != 0){
        document.getElementById('resposta').innerHTML += Math.floor(n10)+" notas de 10 <br>"
    }
}