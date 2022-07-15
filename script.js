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

function playRound(e) {
  let playerSelection = e.target.innerHTML;
  let computerSelection = computerPlay();
  let result = "";
  let container = document.querySelector("div#results");
  let content = document.createElement('p');

  switch (true) {
    //when both selections are the same
    case ((playerSelection === "Rock") && (computerSelection === "Rock")):
      result = "That's a tie! " + playerSelection + " vs " + computerSelection;
      content.textContent = result;
      container.appendChild(content);
      return console.log(result);
    case ((playerSelection === "Paper") && (computerSelection === "Paper")):
      result = "That's a tie! " + playerSelection + " vs " + computerSelection;
      content.textContent = result;
      container.appendChild(content);
      return console.log(result);
    case ((playerSelection === "Scissors") && (computerSelection === "Scissors")):
      result = "That's a tie! " + playerSelection + " vs " + computerSelection;
      content.textContent = result;
      container.appendChild(content);
      return console.log(result);
    //when player selection is rock
    case ((playerSelection === "Rock") && (computerSelection === "Paper")):
      result = "You've lost! " + computerSelection + " beats " + playerSelection;
      content.textContent = result;
      container.appendChild(content);
      return console.log(result);
    case ((playerSelection === "Rock") && (computerSelection === "Scissors")):
      result = "You've won! " + playerSelection + " beats " + computerSelection;
      content.textContent = result;
      container.appendChild(content);
      return console.log(result);
    //when player selection is paper
    case ((playerSelection === "Paper") && (computerSelection === "Scissors")):
      result = "You've lost! " + computerSelection + " beats " + playerSelection;
      content.textContent = result;
      container.appendChild(content);
      return console.log(result);
    case ((playerSelection === "Paper") && (computerSelection === "Rock")):
      result = "You've won! " + playerSelection + " beats " + computerSelection;
      content.textContent = result;
      container.appendChild(content);
      return console.log(result);
    //when player selection is scissors
    case ((playerSelection === "Scissors") && (computerSelection === "Rock")):
      result = "You've lost! " + computerSelection + " beats " + playerSelection;
      content.textContent = result;
      container.appendChild(content);
      return console.log(result);
    case ((playerSelection === "Scissors") && (computerSelection === "Paper")):
      result = "You've won! " + playerSelection + " beats " + computerSelection;
      content.textContent = result;
      container.appendChild(content);
      return console.log(result);
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

document.querySelector("button#rock").addEventListener("click", playRound);
document.querySelector("button#paper").addEventListener("click", playRound);
document.querySelector("button#scissors").addEventListener("click", playRound);