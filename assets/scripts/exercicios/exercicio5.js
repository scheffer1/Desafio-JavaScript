var a = {
    nome: 'Pedro'
}

var b = {
    nome:a.nome
}

console.info(a === b); //Imprime a comparação dos objetos (False)
console.info(a.nome === b.nome); //Imprime a comparação da propiedade dos objetos(True)

a.nome = 'Maria'; //Atribui outro valor a propiedade do objeto.

console.dir(a); /*imprime o objeto a.
                {Object a
                nome: "Maria" }
                */



console.dir(b); /*imprime o objeto b.
                    {Object
                    nome: "Pedro" }
                        */


console.info(a.nome === b.nome); //Compara novamente a propiedade dos 2 objetos.

            
                //-----------------------------------------------------------------//
                //    Daqui para baixo apenas os scripts da página.

                function showresults(){
                    document.getElementById("textarea").classList.remove("hidden");
                }