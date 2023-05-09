let form = document.getElementById("form")
let nomeInput = document.getElementById("username");
let emailInput = document.getElementById("email");

// Mensagem de erro HTML para cada campo de entrada
let nomeError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");

//Caracteres para validar se o email é válido
const emailIsValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
});


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

