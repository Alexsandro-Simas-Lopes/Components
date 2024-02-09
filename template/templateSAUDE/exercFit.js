 //Botão que ativa a function

document.getElementById("btn-calc").addEventListener("click", function(e) 
{ e.preventDefault();
    const Peso = document.getElementById("text-Peso").value;
    const Altura = document.getElementById("text-Altura").value;
    if (Peso && Altura == "") {
      alert("O campo valor deve ser preenchido.");
    } else {
      const Imc = Peso/((Altura) * (Altura));
      let mensagem = "null";
      
    //   Calculo para trazer o resultado do calculo no id="total"
      if(Imc < 18.5){
        mensagem = "Magreza"
        } else if (Imc < 24.9) {
            mensagem = "Normal"
        } else if (Imc < 29.9) {
            mensagem = "Sobrepeso"
        } else if (Imc < 30) {
            mensagem = "Obesidade"
        } else {
            mensagem = "Obesidade grave"
        }

        document.getElementById("pix-total").textContent = `${(mensagem)}`;

        if (mensagem == true) {
            
        }
    }
});

document.getElementById("gerar-Exerc").addEventListener("click", function(e) 
{ e.preventDefault();
    // Function go to exercits
    if (mensagem.startsWith("1234")) {
        img.src = "/Payment/img/1.png";
    } else if (mensagem.startsWith("4321")) {
        img.src = "/Payment/img/2.png";
    }
    else if (mensagem.startsWith("4321")) {
        img.src = "/Payment/img/2.png";
    }
    else if (mensagem.startsWith("4321")) {
        img.src = "/Payment/img/2.png";
    }
    else if (mensagem.startsWith("4321")) {
        img.src = "/Payment/img/2.png";
    }
    else if (mensagem.startsWith("4321")) {
        img.src = "/Payment/img/2.png";
    } else {
        Swal.fire({
        title: "Número de cartão inválido!",
        icon: "error"
        });
        return;
    }
});

