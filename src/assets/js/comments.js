// variáveis dos comentários

const userName = document.getElementById("username");
const email = document.getElementById("email");
const form = document.getElementById("form");
const commentPost = document.getElementById("commentpost");
const textarea = document.getElementById("textarea");

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

