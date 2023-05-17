// Function to get the computers choice between Rock, Paper, and Scissors
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1;
    if (randomNumber === 1){
        return 'Rock';
    } else if (randomNumber === 2){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// Prompting the user to choose rock, paper, or scissors
const playerChoice = "rock";

// Capitalize the users choice properly to make it more uniform (optional)
function upperCase(playerSelection){
    let firstLetter = playerSelection.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    let restWord = playerSelection.slice(1);
    restWord = restWord.toLowerCase();
    return firstLetter + restWord;
}

// Get the const for both the player and computer selection
const playerSelection = upperCase(playerChoice);
const computerSelection = getComputerChoice();

// Creating a function that plays a round of the game
function playRound(playerSelection,computerSelection){
    if ((playerSelection === "Rock" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Scissors")){
        return `It's a draw! ${playerSelection} against ${computerSelection} is a tie`;
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return "You must input a valid option";
    }
}

        // Record initial scores of player and computer
        let playerScore = 0;
        let compScore = 0;

// Creating a function to play a 5 round game
function game(){
    for (let i = 0; i < 5; i++){
        // Getting player choice and changing its casing properly
        const playerChoice = prompt("Choose rock, paper, or scissors");
        const playerSelection = upperCase(playerChoice);
        // Getting computer choice
        const computerSelection = getComputerChoice();
        // Play a round
        let result = playRound(playerSelection,computerSelection);
        // Add score to appropriate player
        if (result === `It's a draw! ${playerSelection} against ${computerSelection} is a tie`){
            playerScore = playerScore;
        } else if (result === `You Lose! ${computerSelection} beats ${playerSelection}`){
            compScore++;
        } else if (result === `You Win! ${playerSelection} beats ${computerSelection}`){
            playerScore++;
        } else {
            i--;
        }
        // Announce result of round
        console.log(`${result}\nThe score is ${playerScore} - ${compScore}\n`);
    }
    // Return the final score and the winner
    if (playerScore > compScore){
        return `The final score is ${playerScore} - ${compScore}\nYou win!`;
    } else if (playerScore < compScore){
        return `The final score is ${playerScore} - ${compScore}\nYou lose!`;
    } else {
        return `The final score is ${playerScore} - ${compScore}\nIt's a draw!`;
    }
}

// Log the match
console.log(game());