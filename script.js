function computerPlay() {
    let gameMoves = ['Rock', 'Paper', 'Scissors'];
    return gameMoves[Math.floor(Math.random() * gameMoves.length)]
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let drawPrompt = "Draw! Try again!";
    if (playerSelection === computerSelection) {
        return drawPrompt;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You Lose! Rock beats Scissors";
    } else {
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

    while (playerCount < 5 && computerCount < 5) {
        let playerSelection = prompt("Which do you choose: Rock, Paper, or Scissors");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result)

        if (result.startsWith("You Win")) {  // check if there is a starts with
            playerCount += 1;
        } else if (result.startsWith("You Lose")) {
            computerCount += 1;
        }
         if (playerCount < 5 && computerCount < 5) {
             console.log(`The current score is ${playerCount}:${computerCount}. Keep your head in the game!`);
        } else {
            console.log(`The final score is ${playerCount}:${computerCount}`);
        }
    }
    if (playerCount === 5) {
        console.log("Congratulations! You beat the computer! You are the smartest human alive!")
    } else {
        console.log("Good try! The computer got you this time. Try again soon!")
    }
}
