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

function playRound(rps) {
  let playerSelection = rps;
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
      return result;
    case ((playerSelection === "Paper") && (computerSelection === "Paper")):
      result = "That's a tie! " + playerSelection + " vs " + computerSelection;
      content.textContent = result;
      container.appendChild(content);
      return result;
    case ((playerSelection === "Scissors") && (computerSelection === "Scissors")):
      result = "That's a tie! " + playerSelection + " vs " + computerSelection;
      content.textContent = result;
      container.appendChild(content);
      return result;
    //when player selection is rock
    case ((playerSelection === "Rock") && (computerSelection === "Paper")):
      result = "You've lost! " + computerSelection + " beats " + playerSelection;
      content.textContent = result;
      container.appendChild(content);
      return result;
    case ((playerSelection === "Rock") && (computerSelection === "Scissors")):
      result = "You've won! " + playerSelection + " beats " + computerSelection;
      content.textContent = result;
      container.appendChild(content);
      return result;
    //when player selection is paper
    case ((playerSelection === "Paper") && (computerSelection === "Scissors")):
      result = "You've lost! " + computerSelection + " beats " + playerSelection;
      content.textContent = result;
      container.appendChild(content);
      return result;
    case ((playerSelection === "Paper") && (computerSelection === "Rock")):
      result = "You've won! " + playerSelection + " beats " + computerSelection;
      content.textContent = result;
      container.appendChild(content);
      return result;
    //when player selection is scissors
    case ((playerSelection === "Scissors") && (computerSelection === "Rock")):
      result = "You've lost! " + computerSelection + " beats " + playerSelection;
      content.textContent = result;
      container.appendChild(content);
      return result;
    case ((playerSelection === "Scissors") && (computerSelection === "Paper")):
      result = "You've won! " + playerSelection + " beats " + computerSelection;
      content.textContent = result;
      container.appendChild(content);
      return result;
  }
}

function game(e) {
  roundResult = playRound(e.target.innerHTML);
  let str = roundResult.slice(0, 10);
  let d = document.querySelector("div#scores");
  let dNested = document.querySelector("p.sText");
  d.removeChild(dNested);
  let content = document.createElement('p');
  content.classList.add('sText');
  let result = "";

  if (str === "That's a t") {
    playerScore++;
    compScore++;
    result = ("Round " + roundNum + ": Player [" + playerScore + "] Computer [" + compScore + "]");
    roundNum++;
  } else if (str === "You've won") {
    playerScore++;
    result = ("Round " + roundNum + ": Player [" + playerScore + "] Computer [" + compScore + "]");
    roundNum++;
  } else {
    compScore++;
    result = ("Round " + roundNum + ": Player [" + playerScore + "] Computer [" + compScore + "]");
    roundNum++;
  }

  content.textContent = result;
  d.appendChild(content);
  checkScores();
}

function checkScores() {
  if (playerScore === 5 && compScore === 5) {
    alert("That's a tie!");
  } else if (compScore === 5 && playerScore < 5) {
    alert("You have lost! Better luck next time.");
  } else if (playerScore === 5 && compScore < 5) {
    alert("Congratulations! You have won!");
  }
}

let playerScore = 0;
let compScore = 0;
let roundResult = "";
let roundNum = 1;

document.querySelector("button#rock").addEventListener("click", game);
document.querySelector("button#paper").addEventListener("click", game);
document.querySelector("button#scissors").addEventListener("click", game);