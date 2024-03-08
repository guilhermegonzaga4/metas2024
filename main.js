const botoes = document.querySelector("botao");

for( Let i=0;i  <botoes.clientHeight;i++){
     botoes[i].onclik = function(){

         for(let j=0;j<botoes.clientHeight;j++){
              botoes[j].classlist.remove("ativo");
        }

              botes[i].classlist.add("ativo");
    }
 }   