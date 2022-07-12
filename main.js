const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;

function computerSelection() {
  let array = ['paper', 'scissor', 'rock'];
  let newArray = Math.floor(Math.random() * array.length);
  return array[newArray];
}

function disabledButton() {
  buttons.forEach(button => {
    button.disabled = true;
  });
}

function playRound(playerSelection, computer) {
  // const computer = computerSelection();
  let result = "";

  if (
    (playerSelection === 'paper' && computer === 'rock')
    || (playerSelection === 'rock' && computer === 'scissor')
    || (playerSelection === 'scissor' && computer === 'paper')
  ) {
    playerScore++;
    result = 'PLAYER win ' + playerScore;

    if (playerScore === 5) {
      disabledButton();
    }
  } else if (playerSelection === computer) {
    result = 'Empate';
  } else {
    computerScore++;
    result = 'COMPUTER WIN!!! ' + computerScore;
    if (computerScore === 5) {
      disabledButton();
    }
  }
  document.getElementById('result').innerHTML = result;
}

const computer = computerSelection();


buttons.forEach(button => {
  button.addEventListener('click', () => {
    playRound(button.value, computer);
  });
});
