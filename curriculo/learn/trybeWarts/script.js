const email = document.getElementById("email");
const senha = document.getElementById("senha");
const button = document.getElementById("botao");
const userEmail = "tryber@teste.com";
const userSenha = "12345";

button.addEventListener('click', (e) => {
    e.preventDefault()
   if(email.value === userEmail && senha.value === userSenha){
      alert('Ola, tryber')
   } 
})