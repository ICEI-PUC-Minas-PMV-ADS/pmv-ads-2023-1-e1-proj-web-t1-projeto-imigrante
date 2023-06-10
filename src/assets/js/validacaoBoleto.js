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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  goToMessagePage();
});

// Function to validate the nome input
function validateNomeInput() {
  const value = nomeInput.value.trim();
  let errorMessage = "";
  let isValid = true;

  // Valida o tamanho do nome
  if (value.length < 4) {
    errorMessage = "Digite o seu nome completo";
    isValid = false;
  }
  // Mostra a mensagem
  nomeError.innerHTML = errorMessage;

  return isValid;
}

// Function to validate the email input
function validateEmailInput() {
  const value = emailInput.value.trim();
  let errorMessage = "";
  let isValid = true;

  // Verifica se o email é válido
  if (!value.match(emailIsValid)) {
    errorMessage = "Email inválido";
    isValid = false;
  }
  emailError.innerHTML = errorMessage;

  return isValid;
}

// Function to validate the cpf input
function validateCpfInput() {
  const value = cpfInput.value.trim();
  let errorMessage = "";
  let isValid = true;

  // Verifica se o cpf está vazio
  if (value.length === 0) {
    errorMessage = "Cpf inválido";
    isValid = false;
  }
  cpfError.innerHTML = errorMessage;

  return isValid;
}

// Function to redirect to another page
function goToMessagePage() {
  if (validateNomeInput() && validateEmailInput() && validateCpfInput()) {
    window.location.href = "confirmacaopagamento.html";
  }
}
