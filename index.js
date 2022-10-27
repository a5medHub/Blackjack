let firstCard = getRandomInt(2, 11);
let secondCard = getRandomInt(2, 11);
let sum = firstCard + secondCard;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

console.log(sum);
