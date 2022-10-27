/*
let firstCard = Math.random(2, 8);
let secondCard = Math.random(2, 8);
let sum = firstCard + secondCard;
console.log(firstCard);
console.log(secondCard);
console.log(sum);
*/
let min = 0;
let max = 0;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
console.log(getRandomInt(2, 11));
