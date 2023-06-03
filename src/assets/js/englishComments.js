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
const emailIsValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


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



form.addEventListener("submit", (event) => {
  event.preventDefault(); // quando clicar em submit, as informações continuarão na tela

  //Horário e data
  const today = new Date();
  const year = today.getFullYear();
  const month = `${today.getMonth() + 1}`.padStart(2, "0");
  const day = `${today.getDate()}`.padStart(2, "0");
  const stringDate = [day, month, year].join("/");
  let time = today.getHours() + ":" + today.getMinutes();
  time = time.padStart(2, "0");

  const dateTime = stringDate + " " + 'às' + " " + time;


  // Criando elemento img no comentário e informando a URL da img.
  const avatar = new Image(350);
  avatar.src = 'https://i.postimg.cc/VNzG7Lt5/Sem-nome-Tamanho-original-8.png';
  avatar.classList = 'avatar';


  // Criando um contêiner div para envolver o avatar, o nome e o comentário
  let container = document.createElement("div");
  container.classList = " line-js";



  //Create line to separate comments
  const separator = document.createElement('span');
  separator.classList = "separator";


  // Criando um elemento p para o nome, comentário e data
  let p = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");

  

  //Add classes no css
  p.classList = "custom-margin";
  p2.classList = "d-flex p2-comment"
  p3.classList = "d-flex p3-comment";
  

  p2.innerHTML = `${textarea.value}`;
  p.innerHTML = `<strong>${userName.value}</strong>`;
  p3.innerHTML = dateTime;



  // Adicionando o avatar e o p ao contêiner
  container.appendChild(avatar);
  container.appendChild(p);
  container.appendChild(p3);
  container.appendChild(p2);
  container.append(separator);
 


  // Adicionando o contêiner ao commentPost
  commentPost.appendChild(container);

  // Ao comentar, deixar os inputs vazios
  userName.value = "";
  email.value = "";
  textarea.value = "";

  // Ao comentar, irá focar no input de nome
  userName.focus();
});

