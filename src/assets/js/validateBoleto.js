let form = document.getElementById("form")
let nomeInput = document.getElementById("username");
let emailInput = document.getElementById("email");
let cpfInput = document.getElementById("cpf");


// Mensagem de erro HTML para cada campo de entrada
let nomeError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let cpfError = document.getElementById("cpfError");


//Caracteres para validar se o email é válido
const emailIsValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    goTomessagePage();
});


nomeInput.addEventListener('change', (event) => {
    const value = event.target.value;
    let errorMessage = '';
    // Valida o tamanho do nome
    if (value && value.length < 4) {
        errorMessage = 'Digite seu nome completo';
    } 
    // Mostra a mensagem 
    nomeError.innerHTML = errorMessage;
});


emailInput.addEventListener('change', (event) => {
    const value = event.target.value;
    let errorMessage = '';
    // Verifica se o email é válido
    if (!value.match(emailIsValid)) {
        errorMessage = 'Email inválido';
    } 
    emailError.innerHTML = errorMessage;
});



cpfInput.addEventListener('change', (event) => {
    const value = event.target.value;
    let errorMessage = "";
    //Verficia se o cpf tem 11 caracteres
    if (value.length === 0) {
        errorMessage = "Digite seu cpf ou cnpj";
    } 
    cpfError.innerHTML = errorMessage;
})


