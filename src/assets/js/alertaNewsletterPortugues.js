//Acessa o campo do email


let emailNewsletter = document.getElementById("email-news");
let emailNewsletterError = document.getElementById("emailNewsError");

if (emailNewsletter && emailNewsletterError) {
    

    // Caracteres para validar se o email é válido
    const emailIsValidNews = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;



    emailNewsletter.addEventListener('submit', (event) => {
        event.preventDefault();

        showAlertMessage();

    });


    // Funcao p validar campo email
    function validateNewsletterInput() {
        const valueNews = emailNewsletter.value.trim();
        let errorMessageNews = '';
        let isValidNews = false;

        // Verifica se o email é válido
        if (!valueNews.match(emailIsValidNews)) {
            errorMessageNews = 'Email inválido';
            isValidNews = false;
        } else {
            isValidNews = true;
        }
        emailNewsletterError.innerHTML = errorMessageNews;

        return isValidNews;
    }
}

// Acessa campo de erro no html




//Funcao p mostrar a tela de alerta se o email for preenchido
function showAlertMessage() {
    if (validateNewsletterInput()) {
        alert("Email cadastrado com sucesso!");
        emailNewsletter.value = "";
    }
}

