let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return choices[0];
    case 1:
      return choices[1];
    case 2:
      return choices[2];
    default:
      return "Something went wrong!";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (computerSelection === playerSelection) {
    alert(`Tie!`);
    return 0;
  } else if (computerSelection === "rock") {
    switch (playerSelection) {
      case "paper":
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
        return playerScore++;
      case "scissors":
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
        return computerScore++;
    }
  } else if (computerSelection === "paper") {
    switch (playerSelection) {
      case "scissors":
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
        return playerScore++;
      case "rock":
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
        return computerScore++;
    }
  } else if (computerSelection === "scissors") {
    switch (playerSelection) {
      case "rock":
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
        return playerScore++;
      case "paper":
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
        return computerScore++;
    }
  }
}

function game() {
  for (let index = 0; index < 5; index++) {
    playRound(getPlayerChoice(), getComputerChoice());
  }

  if (playerScore > computerScore) {
    alert(`playerScore: ${playerScore}`);
    alert("you win!");
  } else {
    alert(`computerScore: ${computerScore}`);
    alert("you lose!");
  }
}

function getPlayerChoice() {
  let playerSelection = prompt("Rock, Paper or Scissors?: ");
  return playerSelection;
}

game();
