/*
let firstCard = 15; //getRandomInt(2, 23);
let secondCard = 10; //getRandomInt(2, 23);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
/*function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}*/
/*
function startGame() {
  if (Number(sum) < 21) {
    message = "would you like to take one more card ?";
  } else if (Number(sum) === 21) {
    message = "you are a winner";
    hasBlackJack = true;
  } else {
    message = "sorry you have lost";
    isAlive = false;
  }
  messageEl.textContent = message;
}
console.log(messageEl);
*/
let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
console.log(messageEl);
