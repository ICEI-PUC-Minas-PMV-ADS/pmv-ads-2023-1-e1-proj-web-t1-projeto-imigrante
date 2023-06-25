const ramdomNumber = document.getElementById("number");

function generateRandomNumber() {
    const max= 200;
    const number = Math.floor(Math.random() * max) + 1;
    ramdomNumber.innerHTML = number;
    
    return number;
}


generateRandomNumber();