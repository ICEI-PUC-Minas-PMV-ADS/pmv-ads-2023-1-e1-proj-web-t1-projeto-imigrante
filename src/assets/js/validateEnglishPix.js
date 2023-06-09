let form = document.getElementById("form");
let nomeInput = document.getElementById("username");
let emailInput = document.getElementById("email");
let cpfInput = document.getElementById("cpf");

// Mensagem de erro HTML para cada campo de entrada
let nomeError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let cpfError = document.getElementById("cpfError");

// Caracteres para validar se o email é válido
const emailIsValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    goToMessagePage();

});



function validateNomeInput() {
    const value = nomeInput.value.trim();
    let errorMessage = '';
    let isValid = true;

    // Valida o tamanho do nome
    if (value.length < 4) {
        errorMessage = 'Type your full name';
        isValid = false;
    }
    // Mostra a mensagem
    nomeError.innerHTML = errorMessage;
   
    return isValid;
}



// Function to validate the email input
function validateEmailInput() {
    const value = emailInput.value.trim();
    let errorMessage = '';
    let isValid = true;

    // Verifica se o email é válido
    if (!value.match(emailIsValid)) {
        errorMessage = 'Invalid email';
        isValid = false;
    }
    emailError.innerHTML = errorMessage;
   
     return isValid;
}


function validateCpfInput() {
    const value = cpfInput.value.trim();
    let errorMessage = "";
    let isValid = true; // Assume the CPF is valid by default

    // Verifica se o cpf tem 11 caracteres
    if (value.length !== 11) {
        errorMessage = "Invalid cpf";
        isValid = false; // Set isValid to false if the CPF length is not 11
    }
    cpfError.innerHTML = errorMessage;

    return isValid;
}

// Function to redirect to another page
function goToMessagePage() {
    if (validateNomeInput() && validateEmailInput() && validateCpfInput()) {
        window.location.href = 'englishmsgpago.html';
    }
}

