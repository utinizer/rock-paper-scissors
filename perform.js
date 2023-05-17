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
const playerChoice = prompt("Rock, paper, or scissors?");

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
        return `${playerSelection} against ${computerSelection} means a draw!`;
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return "You must input a valid option";
    }
}

console.log(playRound(playerSelection,computerSelection));