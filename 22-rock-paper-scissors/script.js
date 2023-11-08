const WON_ROUND_TEXT = 'You win the round!'
const LOST_ROUND_TEXT = 'You lost the round :(';
const TIED_ROUND_TEXT = 'Tie!';

const WON_GAME_TEXT = 'You won the game!';
const LOST_GAME_TEXT = 'You lost the game :(';

const ROUNDS_TO_PLAY = 5;
const ROUNDS_NEEDED_TO_WIN = 3;


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
    let playerWinCount = 0;
    let roundCount = 0;

    while (roundCount < 5 && playerWinCount < ROUNDS_NEEDED_TO_WIN) {
        let playerChoice = prompt("Choose rock, paper, or scissors:");
        if (playerChoice === null) {
            return;
        }

        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);

        if (result) {
            console.log(`The computer chose: ${computerChoice}`);
            console.log(result);
            if (result === WON_ROUND_TEXT) {
                ++playerWinCount;
                ++roundCount;
            } else if (result === LOST_ROUND_TEXT) {
                ++roundCount;
            }
        } else {
            console.log('Invalid choice');
        }
    }

    if (playerWinCount >= ROUNDS_NEEDED_TO_WIN) {
        alert(WON_GAME_TEXT);
    } else {
        alert(LOST_GAME_TEXT);
    }
}

playGame();