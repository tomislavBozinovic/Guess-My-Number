'use strict';

let randNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);

  if (!inputNumber) {
    displayMessage('No Number!!!');
    document.querySelector('.score').textContent = --score;
  } else if (inputNumber === randNumber) {
    displayMessage('Correct Number!!');
    document.querySelector('.number').textContent = randNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (randNumber !== inputNumber) {
    if (score > 1) {
      displayMessage(inputNumber > randNumber ? 'Too high...' : 'Too low...');
      document.querySelector('.score').textContent = --score;
    } else {
      displayMessage('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//   } else if (inputNumber > randNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high!';
//       document.querySelector('.score').textContent = --score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (inputNumber < randNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low!';
//       document.querySelector('.score').textContent = --score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
});
