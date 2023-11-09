const WON_ROUND_TEXT = 'You win the round!'
const LOST_ROUND_TEXT = 'You lost the round :(';
const TIED_ROUND_TEXT = 'Tie!';

const WON_GAME_TEXT = 'Winning you the game!';
const LOST_GAME_TEXT = 'Losing you the game :(';

const ROUNDS_NEEDED_TO_WIN = 5;


function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    if (i === 0) {
        return 'rock';
    } else if (i === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function isTie(playerSelection, computerSelection) {
    return playerSelection === computerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (isTie(playerSelection, computerSelection)) {
        return TIED_ROUND_TEXT;
    }

    switch (playerSelection) {
        case 'rock':
            return (computerSelection === 'paper') ? LOST_ROUND_TEXT : WON_ROUND_TEXT;
        case 'paper':
            return (computerSelection === 'scissors') ? LOST_ROUND_TEXT : WON_ROUND_TEXT;
        case 'scissors':
            return (computerSelection === 'rock') ? LOST_ROUND_TEXT : WON_ROUND_TEXT;
        default:
            return null;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let gameDecided = false;

    let playerScoreDisplay = document.querySelector('.player-score');
    let computerScoreDisplay = document.querySelector('.computer-score');
    let computerChoiceDisplay = document.querySelector('.computer-choice-display');
    let statusDisplay = document.querySelector('.status-display');

    function onPlayerChoice(choice) {
        if (gameDecided) {
            reset();
        }
        let computerChoice = getComputerChoice();
        let result = playRound(choice, computerChoice);

        computerChoiceDisplay.textContent = `The computer chose: ${computerChoice}`;

        if (result === WON_ROUND_TEXT) {
            ++playerScore;
            playerScoreDisplay.textContent = playerScore;
        } else if (result === LOST_ROUND_TEXT) {
            ++computerScore;
            computerScoreDisplay.textContent = computerScore;
        }
        if (playerScore >= ROUNDS_NEEDED_TO_WIN) {
            statusDisplay.textContent = WON_GAME_TEXT;
            gameDecided = true;
        } else if (computerScore >= ROUNDS_NEEDED_TO_WIN) {
            statusDisplay.textContent = LOST_GAME_TEXT;
            gameDecided = true;
        } else {
            statusDisplay.textContent = result;
        }
    }

    function reset() {
        gameDecided = false;
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }

    let buttons = document.querySelectorAll('.choice');
    for (let button of buttons) {
        button.addEventListener('click', _ => onPlayerChoice(button.textContent));
    }
}

playGame();