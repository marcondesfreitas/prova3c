var email = "marcondes@gmail.com";
var senha = "1234";

var email_input = document.getElementById("email");
var senha_input = document.getElementById("senha");

console.log("tncc");

function entra(){
    if(email_input.value == email){
        alert("logado");
    }else{
        alert("email ou senhas incorretos");
    }
}