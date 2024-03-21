console.log('Hi');
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const options = choices[Math.floor(Math.random()* choices.length)];
return options;
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return 'It\s a tie!'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return `You win ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `You win ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You win ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose ${computerSelection} beats ${playerSelection}`;
    }
  }
  function getPlayerChoice() { 
    const options = prompt('Rock, Paper or Scissors?');
    if(options.includes(choices)) {
    choiceInLower = choices.toLocaleLowerCase();
    return choiceInLower;
    } else {
        prompt ('Please type Rock, Paper or Scissors');
    }
}
  
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(computerSelection)
  console.log(playRound(playerSelection, computerSelection));

  function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
  }
  playGame();

