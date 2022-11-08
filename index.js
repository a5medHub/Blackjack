let firstCard = 15; //getRandomInt(2, 23);
let secondCard = 10; //getRandomInt(2, 23);
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el"); // try query selector in cards ID

/*function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}*/
function startGame() {
  renderGame();
}
function renderGame() {
  cardsEl.textContent = "Cards: " + cards;
  sumEl.textContent = "Sum: " + sum;
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
function newCard() {
  console.log("Drawing a new card from the deck!");
  let newCardNumber = 7;
  sum += newCardNumber;
  renderGame();
}
