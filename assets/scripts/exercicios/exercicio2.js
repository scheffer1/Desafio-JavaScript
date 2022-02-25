var x = 2;
//O operador "==" compara o VALOR das variáveis.
function showresults1(){
    document.getElementById("a").textContent += x == 1; //false
    document.getElementById("b").textContent += x == 2; //true
    document.getElementById("c").textContent += x == "2"; //true
}

//O operador "===" compara o VALOR E O TIPO das variáveis.
function showresults2(){
    document.getElementById("d").textContent += x === 1; //false
    document.getElementById("e").textContent += x === 2; //true
    document.getElementById("f").textContent += x === "2"; //false
}
