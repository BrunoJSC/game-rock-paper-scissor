// const user = prompt("Ecolha entre pedra papel e tesoura");
let player = 0;
let computer = 0;

function computerPlayer() {
  const array = ["Paper", "Sissor", "Rock"];

  const newArray = Math.floor(Math.random() * array.length);
  return array[newArray];
}

function playRound(playerSelection, computerSelection) {
 // const user = prompt('Digite');

  if (
    (playerSelection === "Scissor" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Scissor")
  ) {
    console.log(playerSelection + " Player Win!");
  } else if (
    (playerSelection === "Scissor" && computerSelection === "Scissor") ||
    (playerSelection === "Paper" && computerSelection === "Paper") ||
    (playerSelection === "Rock" && computerSelection === "Rock")
  ) {
    console.log(playerSelection+ " " + " " + computerSelection + " Empaty");
  } else {
    console.log(computerSelection + " Computer Win!");
 }

  if(playerSelection !== "Rock" || "rock" || "Paper" || "paper" || "Scissor" || "scissor") {
    console.log('Error');
  }
}

function game() {
  for(let i = 0; i <= 5; i++) {
    if(i !== 0) {
      const user = prompt('Digite');
      user.toUpperCase();
      user.toLowerCase();

      const computer = computerPlayer();
      playRound(user, computer);

      if(i === 5) {
        console.log(playRound(user + " Player ganhou a partida WIN") || (computerPlayer + " Computer ganhou a rodada WIN"));
      }
    }
  }
}

game();
