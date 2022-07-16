//buttons handling
const BUTTONS = document.querySelectorAll('button');
BUTTONS.forEach(button => button.addEventListener('click', function(){playGame(button.value)}));
//
function buttonDisable() {
  BUTTONS.forEach(button => button.disabled = true);
}

//display handling
function roundDisp(dispR) { 
  let content = document.createElement('p');
  content.textContent = dispR;
  document.querySelector('div#results').appendChild(content);
}
//
function scoreDisp(dispS) {
  let container = document.querySelector('div#scores');
  let old = document.querySelector('p.scoreText');
  container.removeChild(old);
  let content = document.createElement('p');
  content.classList.add('scoreText');
  content.textContent = dispS;
  container.appendChild(content);
}
//
function checkScores() {
  let finalScore;

  switch (true) {
    case (compScore === 5 && playerScore < 5):
      finalScore = "You have lost! Better luck next time.";
      buttonDisable();
      endGame(finalScore);
      break;
    case (playerScore === 5 && compScore < 5):
      finalScore = "Congratulations! You have won!";
      endGame(finalScore);
      buttonDisable();
      break;
  }
}
//
function endGame(dispFS) {
  let content = document.createElement('p');
  content.textContent = dispFS;
  document.querySelector('div#scores').appendChild(content);
}

//game setup
let compScore = 0;
let playerScore = 0;
let roundNum = 0;

//computer ramdom play
function computerPlay() {
  let options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)]
}

//main game
function playGame(usrPlay) {
  let comPlay = computerPlay();
  let roundScore = '';
  let gameScore = '';

  switch (true) {
    //player win scenarios
    case (usrPlay === 'rock') && (comPlay === 'scissors'):
    case (usrPlay === 'paper') && (comPlay === 'rock'):
    case (usrPlay === 'scissors') && (comPlay === 'paper'):
      roundScore = "You've won! " + usrPlay + " beats " + comPlay;
      roundNum++;
      playerScore++;
      break;

    //computer win scenarios
    case (usrPlay === 'rock') && (comPlay === 'paper'):
    case (usrPlay === 'paper') && (comPlay === 'scissors'):
    case (usrPlay === 'scissors') && (comPlay === 'rock'):
      roundScore = "You've lost! " + comPlay + " beats " + usrPlay;
      roundNum++;
      compScore++;
      break;

    //tie scenario
    case (usrPlay === comPlay):
      roundScore = "That's a tie! " + usrPlay + " vs " + comPlay;
      roundNum++;
      break;
  }

  //common operations for all scenarios
  gameScore = "Round " + roundNum + ": Player [" + playerScore + "] Computer [" + compScore + "]";
  roundDisp(roundScore);
  scoreDisp(gameScore);
  checkScores();
}