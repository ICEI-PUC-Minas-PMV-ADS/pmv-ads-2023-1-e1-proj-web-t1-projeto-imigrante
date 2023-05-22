// variáveis dos comentários
const userName = document.getElementById("username");
const email = document.getElementById("email");
const form = document.getElementById("form");
const commentPost = document.getElementById("commentpost");
const textarea = document.getElementById("textarea");


// Mensagem de erro HTML para cada campo de entrada
let nomeError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");

//Caracteres para validar se o email é válido
const emailIsValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


//Funçao para validar campo nome
userName.addEventListener('change', (event) => {
  const value = event.target.value;
  let errorMessage = '';
  // Valida o tamanho do nome
  if (value && value.length < 4) {
      errorMessage = 'Type your full name.';
  } 
  // Mostra a mensagem 
  nomeError.innerHTML = errorMessage;
});


//Funçao para validar campo email
email.addEventListener('change', (event) => {
  const value = event.target.value;
  let errorMessage = '';
  // Verifica se o email é válido
  if (!value.match(emailIsValid)) {
      errorMessage = 'Invalid Email.';
  } 
  emailError.innerHTML = errorMessage;
});



// arrow function do comentários
form.addEventListener("submit", (event) => {
  // quando clicar em submit, as informações continuarão na tela
  event.preventDefault();
  //variável p, referente ao comentário da submitado
  let p = document.createElement("p");
  p.classList = "p-2 d-flex text-wrap flex-wrap";
  //para escrever no HTML (`` interpolação)
  p.innerHTML = `<strong>${userName.value}: </strong> &nbsp ${textarea.value}`;
  commentPost.appendChild(p);
  //ao comentar, deixar os inputs vazios
  userName.value = "";
  email.value = "";
  textarea.value = "";
  //ao comentar irá focar no input de nome
  userName.focus();
});

