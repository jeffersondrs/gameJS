'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Start guessing...';
// emoji botão windows + botão .(ponto)

document.querySelector('.number').textContent = 16;
document.querySelector('.score').textContent = 5;

document.querySelector('.guess').value = 19;

console.log(document.querySelector('.guess').value);
*/

// document.querySelector('.again').addEventListener('click', function() {
//   document.location.reload(true);
// })
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // quando nao se coloca nenhum numero, assim como o jogador digita 0;
  if (!guess) {
    document.querySelector('.message').textContent = '😒 No number!';

    // quando o jogador ganha
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Parabéns! ✌️🤩';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore){
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    } 
  // quando o jogador digita um numero acima do permitido.
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      'Saiu do planeta 🤦‍♂️ entre 1 e 20';
  } 
  // quando o numero é maior do que o numero secreto
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Passou demais 😉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Você perdeu! 😭';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red'
    }
  } 
  // quando o numero é menor que o numero secreto
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Muito baixo 🤣';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Você perdeu! 😭';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Tente novamente...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})