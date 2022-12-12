function valida( ) {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    if (usuario == ""){
        document.getElementById("eusuario").innerHTML = "Vazio.";
        document.getElementById("esenha").innerHTML = "";
    }
    else if (senha == "") {
        document.getElementById("eusuario").innerHTML = "";
        document.getElementById("esenha").innerHTML = "Vazio.";
    }
    else if (senha.length < 6) {
        document.getElementById("eusuario").innerHTML = "";
        document.getElementById("esenha").innerHTML = "Senha muito curta!";
    }
    else {
        document.getElementById("eusuario").innerHTML = "";
        document.getElementById("esenha").innerHTML = "";
        document.getElementById("msg").innerHTML = "Formulário validado!";            
    }		
}