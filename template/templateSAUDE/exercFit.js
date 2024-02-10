 //Botão que ativa a function

document.getElementById("btn-calc").addEventListener("click", function(e) 
{ e.preventDefault();
    const Peso = document.getElementById("text-Peso").value;
    const Altura = document.getElementById("text-Altura").value;
    if (Altura == "" || Peso == "") {
      alert("Todos os campos devem ser preenchidos!");
    } else {
      const Imc = Peso/((Altura) * (Altura));
      
      
    //   Calculo para trazer o resultado do calculo no id="total"
      if(Imc < 18.5){
        mensagem = "Magreza"
      } else if (Imc < 24.9) {
        mensagem = "Normal"
      } else if (Imc < 29.9) {
        mensagem = "Sobrepeso"
      } else if (Imc <= 30) {
        mensagem = "Obesidade"
      } else if (Imc > 30) { 
        mensagem = "Obesidade grave"
      }

        document.getElementById("pix-total").textContent = `${(mensagem)}`;
        
        // Botão que aparece após o calc de imc
        // Possibilitando o início de uma nova function
        let btn_GerirExercicio = document.getElementById("gerar-Exerc")
        if (mensagem != false ) {
            btn_GerirExercicio.style.display = "block";
        }
        
        
    }
});
document.getElementById("gerar-Exerc").addEventListener("click", function(e) 
        { e.preventDefault();
            const TreinoGerado = mensagem;
            switch (TreinoGerado) {
                case "Magreza":
                    console.log("Lista de Exercícios para Magreza");
                    delete window.TreinoGerado;
                    break;
                case "Normal":
                    console.log("Lista de Exercícios para peso Normal");
                    delete window.TreinoGerado;
                    break;
                case "Sobrepeso":
                    console.log("Lista de Exercícios para Sobrepeso");
                    delete window.TreinoGerado;
                    break;
                case "Obesidade":
                    console.log("Lista de Exercícios para Obesidade");
                    delete window.TreinoGerado;
                    break;
                case "Obesidade grave":
                    console.log("Lista de Exercícios para Obesidade grave");
                    delete window.TreinoGerado;
                    break;
              }
            //   OBS:
            //   O switch case em JavaScript é uma estrutura de controle 
            //   muito útil quando estamos trabalhando com uma variável 
            //   que pode assumir diferentes valores possíveis e, a partir 
            //   desses valores, executar diferentes blocos de código 
            //   correspondentes.
        });


