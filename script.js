/*// Select elements
const options = document.querySelectorAll('.options');
const computerChoiceText = document.getElementById('computerChoice');
const winnerText = document.getElementById('winner');
const playerScoreText = document.querySelector('.scores');
const computerScoreText = document.querySelectorAll('.scores')[1];
const resetButton = document.querySelector('.reset');
const newButton = document.querySelector('.game');
const yourChoiceText = document.getElementById('yourchoice'); // ✅ NEW

let playerScore = 0;
let computerScore = 0;

// Generate computer choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Play one round
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    // ✅ Display choices
    yourChoiceText.textContent = `You chose: ${playerSelection}`;
    computerChoiceText.textContent = `Computer chose: ${computerSelection}`;

    if (playerSelection === computerSelection) {
        winnerText.textContent = "It's a tie!";
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        winnerText.textContent = "You win!";
        playerScore++;
    } else {
        winnerText.textContent = "Computer wins!";
        computerScore++;
    }

    updateScore();
}

// Update scores
function updateScore() {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

// Player button clicks
options.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.textContent);
    });
});

// Reset game
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    yourChoiceText.textContent = '';
    computerChoiceText.textContent = '';
    winnerText.textContent = '';
});

// New game
newButton.addEventListener('click', () => {
    location.reload();
});*/



const options = document.querySelectorAll('.options');
const yourChoiceText = document.getElementById('yourchoice');
const computerChoiceText = document.getElementById('computerChoice');
const playerScoreText = document.querySelector('.scores');
const computerScoreText = document.querySelectorAll('.scores')[1];
const resetButton = document.querySelector('.reset');
const newButton = document.querySelector('.game');
const winnerText = document.getElementById('winner');



let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection){
    const computerSelection = getComputerChoice();

    yourChoiceText.textContent = `you chose: ${playerSelection}`;
    computerChoiceText.textContent = `computer chose: ${computerSelection}`;

    if (playerSelection===computerSelection){
        winnerText.textcontent = "it's a tie!";
    }
    else if ((playerSelection==="Rock" && computerSelection==="Scissors"

    )||(playerSelection==="Scissors" && computerSelection==="Paper")||(playerSelection==="Paper" && computerSelection==="Rock")){
        winnerText.textContent = "You Win!";
        playerScore++;
    }
    else{
        winnerText.textContent = "Computer Wins!";
        computerScore++;
    }

    updateScore();
}


function updateScore() {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}





// Player button clicks
options.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.textContent);
    });
});

// Reset game
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    yourChoiceText.textContent = '';
    computerChoiceText.textContent = '';
    winnerText.textContent = '';
});

// New game
newButton.addEventListener('click', () => {
    location.reload();
});




