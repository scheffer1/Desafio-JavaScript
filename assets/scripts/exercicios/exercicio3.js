//Código do exemplo

var num = -1;



if (num > 10){
    console.log(num)
}

//O código se encontra em um loop inifinito, o valor de 'num' nunca aumenta.
//O código abaixo tornaria o código utilizável.

while(num <= 10) {
    console.log(num)
    num += 1;
}

//