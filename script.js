var email_input = document.getElementById("email");
var senha_input = document.getElementById("senha");
var email1 = "marcondes@gmail.com";
var senha1 = "marcondes123";


var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var valorInput_email = email_input.value;
  var valorInput_senha = senha_input.value;
  
  var email = valorInput_email;
  var senha = valorInput_senha;
  
  console.log(email);
  console.log(senha);
});

function entra(){
    if(email_input.value == email1 && senha_input.value == senha1){
        alert("logado");
    }else{
        alert("email ou senhas incorretos");
    }
}