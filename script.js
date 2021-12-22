function computerPlay() {
    let gameMoves = ['Rock', 'Paper', 'Scissors'];
    return gameMoves[Math.floor(Math.random() * gameMoves.length)]
}

// playerSelection = prompt("Which do you choose: Rock, Paper, or Scissors");
// computerSelection = computerPlay().toLowerCase();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let drawPrompt = "Draw! Try again!";
    if (playerSelection === computerSelection) {
        console.log(drawPrompt);
    }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return "You Win! Rock beats Scissors";
    }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return "You Lose! Paper beats Rock";
    }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return "You Win! Paper beats Rock";
    }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return "You Lose! Scissors beats Paper";
    }
        else if (playerSelection === 'scissors' && ComputerSelection === 'paper') {
            return "You Win! Scissors beats Paper";
    }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return "You Lose! Rock beats Scissors";
    }
        else {
            return "Something has gone terribly wrong.";
    }
}


// game function: -> while loop
// establish counter for who is winning (terms of winning: first person to 5)
    // Player Score: 0, Computer Score :0
// ask player for selection:
// get computer selection
// playRound function
// display winner and increase counter by 1

// When while loop is over winner need to display winner:
// if playerCount = 5 => player wins
// else if computerCount = 5 => computer wins

function game() {
    let playerCount = 0;
    let computerCount = 0;

    while (playerCount < 5 || computerCount < 5) {
        let playerSelection = prompt("Which do you choose: Rock, Paper, or Scissors");
        let computerSelection = computerPlay();
        


    }

}



