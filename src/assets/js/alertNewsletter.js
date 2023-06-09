//Acessa o campo do email
const emailInput = document.getElementById("email");

// Acessa campo de erro no html
let nomeError = document.getElementById("emailError");

// Caracteres para validar se o email é válido
const emailIsValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

emailInput.addEventListener('submit', (event) => {
    event.preventDefault();

    showAlertMessage();

});


// Funcao p validar campo email


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

//Funcao p mostrar a tela de alerta se o email for preenchido
function showAlertMessage() {
    if ( validateEmailInput()) {
        alert("Email cadastrado com sucesso!");
    }

    emailInput.value = '';
}

