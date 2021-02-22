'use strict';

console.log(document.querySelector('.message').textContent);

let number = Math.floor(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const insertedValue = Number(document.querySelector('.guess').value);
  console.log(insertedValue, typeof insertedValue);
  if (!insertedValue) {
    displayMessage('⛔ no number');
  } else if (insertedValue > number) {
    if (score < 1) {
      displayMessage('💥 You lost the game!');
    }

    displayMessage('📈 Too high!');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (insertedValue < number) {
    if (score < 1) {
      displayMessage('💥 You lost the game!');
    }
    displayMessage('📉 Too low!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    displayMessage(' ✅ correct answer');
    document.querySelector('.score').textContent = score;
    if (score > highscore)
      highscore = document.querySelector('.score').textContent;
    document.querySelector('.highscore').textContent = highscore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.floor(Math.random() * 20) + 1;
  console.log(number);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
