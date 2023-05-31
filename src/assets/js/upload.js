const form = document.getElementById("form")
const nomeInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const arquivoInput = document.getElementById("fileUpload");

// Mensagem de erro HTML para cada campo de entrada
let nomeError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let arquivoError = document.getElementById("arquivoError");


//Caracteres para validar se o email é válido
const emailIsValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


nomeInput.addEventListener('change', (event) => {
    const value = event.target.value;
    let errorMessage = '';
    // Valida o tamanho do nome
    if (value && value.length < 4) {
        errorMessage = 'Digite seu nome completo.';
    } 
    // Mostra a mensagem 
    nomeError.innerHTML = errorMessage;
});


emailInput.addEventListener('change', (event) => {
    const value = event.target.value;
    let errorMessage = '';
    // Verifica se o email é válido
    if (!value.match(emailIsValid)) {
        errorMessage = 'Email inválido.';
    } 
    emailError.innerHTML = errorMessage;
});



  //Função pra validar arquivo
  var fileUpload = document.getElementById("fileUpload");
var enviar = document.getElementById("enviar");
enviar.addEventListener("click", function (event) {
  if (fileUpload.files.length == 0) {
    alert("Nenhum Arquivo Selecionado");
    return;
  }
})

//ao enviar, deixar os inputs vazios
form.addEventListener("submit", (event) => {
    console.log ("chegou arqui")

    // quando clicar em submit, as informações continuarão na tela
    event.preventDefault();
    
    
    //ao comentar, deixar os inputs vazios
    nomeInput.value = "";
    emailInput.value = "";
    arquivoInput.value = "";
    alert("Obrigado! Recebemos suas informações. Em breve entraremos em contato");
  });