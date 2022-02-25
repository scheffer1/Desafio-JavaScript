var x = 10;
var y = 20; //A linguagem define como Int automaticamente o tipo de dado.

x += x == 20 ? x/y : y/x;

y -= x == 10 ? y/x : x/y;

function showresults() {
    document.getElementById("a").innerText +=" " +x;
    document.getElementById("b").innerText +=" " +y;
}