let firstCard = getRandomInt(2, 23);
let secondCard = getRandomInt(2, 23);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
console.log(sum);
if (sum < 21) {
  message = "would you like to take oone more card ?";
} else if (sum === 21) {
  message = "you are a winner";
  hasBlackJack = true;
} else {
  message = "sorry you have lost";
  isAlive = false;
}
