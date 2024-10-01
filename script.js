// Get elements from the DOM
const choices = document.querySelectorAll('.choice');
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');
const resultMessage = document.getElementById('resultMessage');
const resetButton = document.getElementById('resetButton');

let playerScore = 0;
let computerScore = 0;

// Function to generate computer's choice randomly
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

// Function to determine the winner of a round
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a draw!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

// Function to handle player's choice
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    resultMessage.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
    updateScores();
}

// Update score display
function updateScores() {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

// Event listeners for choices (rock, paper, scissors)
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        playGame(choice.id);
    });
});

// Reset the game
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    resultMessage.textContent = 'Make your choice!';
    updateScores();
});
