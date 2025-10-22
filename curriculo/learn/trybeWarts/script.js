const email = document.getElementsByName("email");
const senha = document.getElementsByName("senha");
const button = document.getElementById("botao");
const userEmail = "tryber@teste.com";
const userSenha = "12345";

button.addEventListener('click', (e) => {
    e.preventDefault()
    const user = {
        email: '', 
        senha: ''
    }
    for(let index = 0; index < email.length; index += 1) {
       user.email = email[index].value
    }
     for(let index = 0; index < senha.length; index += 1) {
       user.senha = senha[index].value
    }
    if(userEmail === user.email && userSenha === user.senha){
        alert("Ola tryber")
    }
})