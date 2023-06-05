let radioCard = document.getElementById("inlineRadio1");
let radioPix = document.getElementById("inlineRadio2");
let radioBoleto = document.getElementById("inlineRadio3");


//Mensagem de erro html para cada campo de entrada
const btnError = document.getElementById('btnError');
const inputError = document.getElementById('inputError');


//Função que valida o primeiro campo de seleção
function isRadio1Selected() {
    let errorMessage = '';
    
    const radios1 = document.querySelectorAll('input[name="inlineRadioOptions"]');
    const selected1 = [...radios1].some(radio => radio.checked);

    if (!selected1) {
        errorMessage = "Por favor, selecione uma opção.";
    }

    inputError.innerHTML = errorMessage;

    return selected1; // Retorna um valor booleano indicando se todas as opções foram selecionadas
}


//Função que valida o segundo grupo de seleção
function isRadio2Selected() {
    let errorMessage = '';

    const radios2 = document.querySelectorAll('input[name="options"]');
    const selected2 = [...radios2].some(radio => radio.checked);

    if (!selected2) {
        errorMessage = "Por favor, selecione um valor.";
    }

    btnError.innerHTML = errorMessage;

    return selected2;
}


//Função que redireciona para outra pagina
function goToAnotherPage() {
    if (isRadio1Selected() && isRadio2Selected()) {
        if (radioPix.checked) {
            window.location.href = "pix.html";
        } else if (radioBoleto.checked) {
            window.location.href = "boleto.html";
        } else {
            window.location.href = "cartao.html";
        }
    }
}

