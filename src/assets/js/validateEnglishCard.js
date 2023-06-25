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
      errorMessage = "Please, select an option";
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
      errorMessage = "Type your full name";
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
      errorMessage = "Type a number";
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
      errorMessage = "Ivalid number";
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
      errorMessage = "Type 2 digits";
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
      errorMessage = "Type 2 digits";
      isValid = false;
    } else {
      isValid = true;
    }
  
    yearInputError.innerHTML = errorMessage;
  
    return isValid;
  }
  
  // Redirect to another page
  function goToMessagePage(event) {
    event.preventDefault();
    if (
      isRadioCardSelected() &&
      validateNomeInput() &&
      validateCardInput() &&
      validateMonthInput() &&
      validateYearInput() &&
      validateCvvInput()
    ) {
      window.location.href = 'englishmsgpago.html';
    }
  }
  