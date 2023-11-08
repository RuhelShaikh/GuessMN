'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = '30';
document.querySelector('.score').textContent = '15';

document.querySelector('.guess').value = '40';
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//just to give an idea of how we can refactor code by using functions
//I just used this function only once but we could this in many places in this project
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//function of check
const checkButton = function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('No Number!!'); //refactored code
  }

  //when guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';

    //css styling
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!!' : 'Too low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game:(';
    }
  }
};
document.querySelector('.check').addEventListener('click', checkButton);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    checkButton();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
