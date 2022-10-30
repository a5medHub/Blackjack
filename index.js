let firstCard = getRandomInt(2, 23);
let secondCard = getRandomInt(2, 23);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function startGame() {
  if (sum < 21) {
    messageEl = "would you like to take oone more card ?";
  } else if (sum === 21) {
    messageEl = "you are a winner";
    hasBlackJack = true;
  } else {
    messageEl = "sorry you have lost";
    isAlive = false;
  }

  console.log(messageEl);
}
