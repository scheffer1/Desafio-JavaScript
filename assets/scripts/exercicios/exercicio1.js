const a = 10,
      b = 4,
      c = 8,
      d = 24;
    
    //    Podia ter feito a expressão direto, usei variáveis para manter o código mais legível. 
    

function expressao(){
  return a*b-c+d/c
};

    //    expressao(); retorna 35.

    //--------------------------------------------------------//
    //    Daqui para baixo apenas os scripts da página.
      
    
      var result = expressao();

      function showresults(){
        document.getElementById("resposta").innerHTML = result;
        document.getElementById("resposta").classList.remove("hidden");
      }