'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const name0El = document.getElementById('name--0');
const name1El = document.getElementById('name--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
alert(' For playing this amazing game Enter your names');
let player1 = prompt('Enter the name of player 1');
let player2 = prompt('Enter the name of player 2');
name0El.textContent = player1;
name1El.textContent = player2;
const reset = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  let currentPlayer = 0;
  let currentScore = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player1 = prompt('Enter the name of player 1');
  player2 = prompt('Enter the name of player 2');
  name0El.textContent = player1;
  name1El.textContent = player2;
};

// console.log(typeof score0El.textContent);

const diceEl = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentPlayer = 0;
let currentScore = 0;
const checkWin = function () {
  if (Number(score0El.textContent) >= 20) {
    console.log('Player 0 wins');
    player0El.classList.add('player--winner');
    name0El.textContent += ' Wins';
    return true;
  } else if (Number(score1El.textContent) >= 20) {
    console.log('Player 1 wins');
    player1El.classList.add('player--winner');
    name1El.textContent += ' Wins';
    return true;
  } else {
    return false;
  }
};
const showScore = function (currentPlayer, currentScore) {
  if (currentPlayer === 0) {
    current0El.textContent = currentScore;
  } else {
    current1El.textContent = currentScore;
  }
};
btnroll.addEventListener('click', function () {
  if (!checkWin()) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = 'dice-' + dice + '.png';
    if (dice !== 1) {
      currentScore += dice;
      showScore(currentPlayer, currentScore);
    } else {
      currentScore = 0;
      showScore(currentPlayer, currentScore);
      currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});
btnhold.addEventListener('click', function () {
  if (currentPlayer === 0) {
    score0El.textContent = Number(score0El.textContent) + currentScore;
  } else {
    score1El.textContent = Number(score1El.textContent) + currentScore;
  }
  currentScore = 0;
  showScore(currentPlayer, currentScore);
  if (!checkWin()) {
    currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
btnnew.addEventListener('click', reset);
