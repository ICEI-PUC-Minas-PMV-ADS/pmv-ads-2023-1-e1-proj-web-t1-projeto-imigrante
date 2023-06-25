
//Card radio
function isRadioCardSelected() {
  let radioCardOptions = document.getElementsByName("inlineRadioOptions");
  const radioCardError = document.getElementById("cardRadioError");

  let errorMessageCartao = "";
  let isSelected = false;

  for (let i = 0; i < radioCardOptions.length; i++) {
    if (radioCardOptions[i].checked) {
      isSelected = true;
      break;
    }
  }

  if (!isSelected) {
    errorMessageCartao = "Por favor, selecione uma opção";
  }

  radioCardError.innerHTML = errorMessageCartao;

  return isSelected;
}

//Input name
function validateNomeInput() {
  let nameInput = document.getElementById("formGroupName");
  const nameError = document.getElementById("usernameError");

  const value = nameInput.value.trim();
  let errorMessageCartao = "";
  let isValid = true;

  if (value.length < 4) {
    errorMessageCartao = "Digite seu nome completo";
    isValid = false;
  } else {
    errorMessageCartao = ""; // Clear the error message
  }

  nameError.innerHTML = errorMessageCartao;

  return isValid;
}

//Input card
function validateCardInput() {
  let cardNumberInput = document.getElementById("formGroupCard");
  const cardNumberError = document.getElementById("cardNumberError");

  const value = cardNumberInput.value.trim();
  let errorMessageCartao = "";
  let isValid = true;

  if (value.length !== 5) {
    errorMessageCartao = "Digite 5 números";
    isValid = false;
  } else {
    errorMessageCartao = ""; // Clear the error message
  }

  cardNumberError.innerHTML = errorMessageCartao;

  return isValid;
}

//Input cvv
function validateCvvInput() {
  const cvvNumberInput = document.getElementById("formGroupCvv");
  const cvvNumberError = document.getElementById("cvvNumberError");

  const value = cvvNumberInput.value.trim();
  let errorMessageCartao = "";
  let isValid = true;

  if (value.length !== 3) {
    errorMessageCartao = "Digite 3 dígitos";
    isValid = false;
  } else {
    errorMessageCartao = ""; // Clear the error message
  }

  cvvNumberError.innerHTML = errorMessageCartao;

  return isValid;
}

//Validate month input
function validateMonthInput() {
  const monthInput = document.getElementById("input-month");
  let monthInputError = document.getElementById("monthError");

  const inputValue = monthInput.value.trim();
  let errorMessageCartao = "";
  let isValid = true;

  if (inputValue.length !== 2) {
    errorMessageCartao = "Digite dois dígitos";
    isValid = false;
  } else {
    isValid = true;
  }

  monthInputError.innerHTML = errorMessageCartao;

  return isValid;
}

//Validate year input
function validateYearInput() {
  const yearInput = document.getElementById("input-year");
  let yearInputError = document.getElementById("yearError");

  const inputValue = yearInput.value.trim();
  let errorMessageCartao = "";
  let isValid = true;

  if (inputValue.length !== 2) {
    errorMessageCartao = "Digite dois dígitos";
    isValid = false;
  } else {
    isValid = true;
  }

  yearInputError.innerHTML = errorMessageCartao;

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
