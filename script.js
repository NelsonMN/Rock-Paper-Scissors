function computerPlay() {
    let gameMoves = ['Rock', 'Paper', 'Scissors'];
    return gameMoves[Math.floor(Math.random() * gameMoves.length)]
}


function playRound(playerSelection, computerSelection) {
    let drawPrompt = "Draw! Try again!";
    if (playerSelection === computerSelection) {
        result.textContent = drawPrompt;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result.textContent = "You Win! Rock beats Scissors";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result.textContent = "You Lose! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result.textContent = "You Win! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result.textContent = "You Lose! Scissors beats Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result.textContent = "You Win! Scissors beats Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result.textContent = "You Lose! Rock beats Scissors";
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

// to grab result container
const result = document.querySelector('.resultsContainer')

// clicking rock
const rock = document.querySelector('.pictureRock');
rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = computerPlay().toLowerCase();
    playRound(playerSelection, computerSelection)
})

// clicking paper
const paper = document.querySelector('.picturePaper');
paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = computerPlay().toLowerCase();
    playRound(playerSelection, computerSelection)
})

// clicking scissors
const scissors = document.querySelector('.pictureScissors');
scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    computerSelection = computerPlay().toLowerCase();
    playRound(playerSelection, computerSelection)
})