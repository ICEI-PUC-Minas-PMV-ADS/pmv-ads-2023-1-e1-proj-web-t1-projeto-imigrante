let radioCard = document.getElementById("inlineRadio1");
let radioPix = document.getElementById("inlineRadio2");
let radioBoleto = document.getElementById("inlineRadio3");


//Error message html
const btnError = document.getElementById('btnError');
const inputError = document.getElementById('inputError');


//Function to validate first radio group
function isRadio1Selected() {
    let errorMessage = '';
    
    const radios1 = document.querySelectorAll('input[name="inlineRadioOptions"]');
    const selected1 = [...radios1].some(radio => radio.checked);

    if (!selected1) {
        errorMessage = "Please, select an option.";
    }

    inputError.innerHTML = errorMessage;

    return selected1; // Return boolean value indicating if all radio options are selected
}


//Function to validate second radio group
function isRadio2Selected() {
    let errorMessage = '';

    const radios2 = document.querySelectorAll('input[name="options"]');
    const selected2 = [...radios2].some(radio => radio.checked);

    if (!selected2) {
        errorMessage = "Please, select a value.";
    }

    btnError.innerHTML = errorMessage;

    return selected2;
}


//Function to redirect to another page
function goToAnotherPage() {
    if (isRadio1Selected() && isRadio2Selected()) {
        if (radioPix.checked) {
            window.location.href = "/pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante/src/englishpages/englishpix.html";
        } else if (radioBoleto.checked) {
            window.location.href = "/pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante/src/englishpages/englishboleto.html";
        } else {
            window.location.href = "/pmv-ads-2023-1-e1-proj-web-t1-projeto-imigrante/src/englishpages/englishcartao.html";
        }
    }
}

