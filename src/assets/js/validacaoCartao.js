
//Card radio
function isRadioCardSelected() {
  let radioCardOptions = document.getElementsByName("inlineRadioOptions");
  const radioCardError = document.getElementById("cardRadioError");

  let errorMessage = "";
  let isSelected = false;

  for (let i = 0; i < radioCardOptions.length; i++) {
    if (radioCardOptions[i].checked) {
      isSelected = true;
      break;
    }
  }

  if (!isSelected) {
    errorMessage = "Por favor, selecione uma opção";
  }

  radioCardError.innerHTML = errorMessage;

  return isSelected;
}

//Input name
function validateNomeInput() {
  let nameInput = document.getElementById("formGroupName");
  const nameError = document.getElementById("usernameError");

  const value = nameInput.value.trim();
  let errorMessage = "";
  let isValid = true;

  if (value.length < 4) {
    errorMessage = "Digite seu nome completo";
    isValid = false;
  } else {
    errorMessage = ""; // Clear the error message
  }

  nameError.innerHTML = errorMessage;

  return isValid;
}

//Input card
function validateCardInput() {
  let cardNumberInput = document.getElementById("formGroupCard");
  const cardNumberError = document.getElementById("cardNumberError");

  const value = cardNumberInput.value.trim();
  let errorMessage = "";
  let isValid = true;

  if (value.length !== 5) {
    errorMessage = "Digite um número";
    isValid = false;
  } else {
    errorMessage = ""; // Clear the error message
  }

  cardNumberError.innerHTML = errorMessage;

  return isValid;
}

//Input cvv
function validateCvvInput() {
  const cvvNumberInput = document.getElementById("formGroupCvv");
  const cvvNumberError = document.getElementById("cvvNumberError");

  const value = cvvNumberInput.value.trim();
  let errorMessage = "";
  let isValid = true;

  if (value.length !== 3) {
    errorMessage = "Número inválido";
    isValid = false;
  } else {
    errorMessage = ""; // Clear the error message
  }

  cvvNumberError.innerHTML = errorMessage;

  return isValid;
}

//Validate month input
function validateMonthInput() {
  const monthInput = document.getElementById("input-month");
  let monthInputError = document.getElementById("monthError");

  const inputValue = monthInput.value.trim();
  let errorMessage = "";
  let isValid = true;

  if (inputValue.length !== 2) {
    errorMessage = "Digite dois dígitos";
    isValid = false;
  } else {
    isValid = true;
  }

  monthInputError.innerHTML = errorMessage;

  return isValid;
}

//Validate year input
function validateYearInput() {
  const yearInput = document.getElementById("input-year");
  let yearInputError = document.getElementById("yearError");

  const inputValue = yearInput.value.trim();
  let errorMessage = "";
  let isValid = true;

  if (inputValue.length !== 2) {
    errorMessage = "Digite dois dígitos";
    isValid = false;
  } else {
    isValid = true;
  }

  yearInputError.innerHTML = errorMessage;

  return isValid;
}

// Redirect to another page
function goToMessagePagePt() {
  if (
    isRadioCardSelected() &&
    validateNomeInput() &&
    validateCardInput() &&
    validateMonthInput() &&
    validateYearInput() &&
    validateCvvInput()
  ) {
    window.location.href = 'confirmacaopagamento.html';
  }
}
