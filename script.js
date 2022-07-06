function computerPlay() {
  let ranNum = Math.random();

  if (ranNum <= (1/3)) {
    return "Rock";
  } else if(ranNum <= (2/3)) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function userPlay() {
  let userChoice = prompt("Select Rock, Paper, or Scissors");

  if (userChoice.toUpperCase() === "ROCK") {
    return "Rock";
  } else if (userChoice.toUpperCase() === "PAPER") {
    return "Paper";
  } else if (userChoice.toUpperCase() === "SCISSORS") {
    return "Scissors";
  } else {
    alert("Check your spelling!");
    return userPlay();
  }
}

function playRound() {
  let playerSelection = userPlay();
  let computerSelection = computerPlay();

  switch (true) {
    //when both selections are the same
    case ((playerSelection === "Rock") && (computerSelection === "Rock")):
      return "That's a tie! " + playerSelection + " vs " + computerSelection;
    case ((playerSelection === "Paper") && (computerSelection === "Paper")):
      return "That's a tie! " + playerSelection + " vs " + computerSelection;
    case ((playerSelection === "Scissors") && (computerSelection === "Scissors")):
      return "That's a tie! " + playerSelection + " vs " + computerSelection;
    //when player selection is rock
    case ((playerSelection === "Rock") && (computerSelection === "Paper")):
      return "You've lost! " + computerSelection + " beats " + playerSelection;
    case ((playerSelection === "Rock") && (computerSelection === "Scissors")):
      return "You've won! " + playerSelection + " beats " + computerSelection;
    //when player selection is paper
    case ((playerSelection === "Paper") && (computerSelection === "Scissors")):
      return "You've lost! " + computerSelection + " beats " + playerSelection;
    case ((playerSelection === "Paper") && (computerSelection === "Rock")):
      return "You've won! " + playerSelection + " beats " + computerSelection;
    //when player selection is scissors
    case ((playerSelection === "Scissors") && (computerSelection === "Rock")):
      return "You've lost! " + computerSelection + " beats " + playerSelection;
    case ((playerSelection === "Scissors") && (computerSelection === "Paper")):
      return "You've won! " + playerSelection + " beats " + computerSelection;
  }
}

function game() {
  let playerScore = 0;
  let compScore = 0;

  for (let i = 1; i < 6; i++) {
    let roundResult = playRound();
    let str = roundResult.slice(0, 10);

    if (str === "That's a t") {
      playerScore++;
      compScore++;
      console.log(roundResult);
      console.log("Round " + i + ": Player [" + playerScore + "] Computer [" + compScore + "]");

    } else if (str === "You've won") {
      playerScore++;
      console.log(roundResult);
      console.log("Round " + i + ": Player [" + playerScore + "] Computer [" + compScore + "]");

    } else {
      compScore++;
      console.log(roundResult);
      console.log("Round " + i + ": Player [" + playerScore + "] Computer [" + compScore + "]");
    }
  }

  if (playerScore > compScore) {
    return "Congratulations! You have won!";
  } else if (playerScore < compScore) {
    return "You have lost! Better luck next time.";
  } else {
    return "That's a tie!";
  }
}

console.log(game());