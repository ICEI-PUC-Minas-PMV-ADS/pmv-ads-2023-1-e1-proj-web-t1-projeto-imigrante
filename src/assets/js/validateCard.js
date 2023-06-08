
//Card radio
function isRadioCardSelected() {
    let radioCardOptions = document.getElementsByName("inlineRadioOptions");
    const radioCardError = document.getElementById("cardRadioError");

    let errorMessage = '';
    let isSelected = false;

    for (let i = 0; i < radioCardOptions.length; i++) {
        if (radioCardOptions[i].checked) {
            isSelected = true;
            break;
        }
    }

    if (!isSelected) {
        errorMessage = "Please, select an option.";
    }

    radioCardError.innerHTML = errorMessage;

    return isSelected;
}



//Input name
function validateNomeInput() {
    let nameInput = document.getElementById("formGroupName");
    const nameError = document.getElementById("usernameError");

    const value = nameInput.value.trim();
    let errorMessage = '';
    let isValid = true;

    if (value.length < 4) {
        errorMessage = 'Type your full name';
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

    if (value.length !== 3) {
        errorMessage = "Invalid card number";
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
        errorMessage = "Invalid CVV number";
        isValid = false;
    } else {
        errorMessage = ""; // Clear the error message
    }

    cvvNumberError.innerHTML = errorMessage;

    return isValid;
}


//Validate select option Month
function validateSelectOptionMonth() {
    const selectMonth = document.getElementById("inputState1");
    const selectMonthError = document.getElementById("selectMonthError");

    const selectValue = selectMonth.value;
    let errorMessage = "";
    let isValid = true;

    if (!selectValue) {
        errorMessage = "Please, select a month";
        isValid = false;
    } else {
        errorMessage = ""; // Clear the error message
    }

    selectMonthError.innerHTML = errorMessage;

    return isValid;
}


//Validate form checkbox 1
function checkBox1() {
    const check1 = document.getElementById("flexCheckDefault1");
    let checkError = document.getElementById("check1Error");

    let errorMessage = '';
    let isValid = false;

    if (!check1.checked) {
        errorMessage = "Please, check this option";
        isValid = false;
    } else {
        isValid = true;
    }

    checkError.innerHTML = errorMessage;

    return isValid;

}


// Redirect to another page
function goToMessagePage() {
    if (
        isRadioCardSelected() &&
        validateNomeInput() &&
        validateCardInput() &&
        validateCvvInput() &&
        checkBox1()
    ) {
        window.location.href = "englishmsgpago.html";
    }
}