const Logger = (() => {
    const messageContainer = document.querySelector('#game-log');

    function logMessage(message) {
        const div = document.createElement('div');
        div.classList.add('game-log__message');

        const now = new Date();
        div.innerText = `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] ${message}`;
        messageContainer.insertBefore(div, messageContainer.firstChild);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }

    return {logMessage};
});

const Banner = ((game) => {
    const header = document.querySelector('.board-container h2');
    const p1NameInput = document.querySelector('#player-1-name-input');
    const p2NameInput = document.querySelector('#player-2-name-input');

    function updateFromGameState() {
        const gameState = game.getState();
        if (gameState === 0) {
            turnText();
        } else if (gameState === 1) {
            wonText();
        } else {
            drawText();
        }
    }
    function setText(text) {
        header.innerText = text;
    }

    function turnText() {
        const name = getCurrentPlayerName();
        setText(`${name}'s turn!`);
    }

    function notStartedText() {
        setText('Game not started');
    }

    function drawText() {
        setText("It's a draw!");
    }

    function wonText() {
        const name = getCurrentPlayerName();
        setText(`${name} won!`);
    }

    function getCurrentPlayerName() {
        const currentPlayer = game.getCurrentPlayer();
        const input = (currentPlayer === 0) ? p1NameInput : p2NameInput;
        if (input.value.length === 0) return input.getAttribute('placeholder');
        return input.value;
    }

    return {notStartedText, updateFromGameState};
});

const Board = ((size) => {
    const empty = -1;

    const board = Array(size).fill(null).map(() => Array(size).fill(empty));

    function at(x, y) {
        return (board[y][x]);
    }

    function isInBounds(x, y) {
        return (0 <= x < size && 0 <= y < size);
    }

    function isEmpty(x, y) {
        return at(x, y) == empty;
    }

    function canPlace(x, y) {
        return (isInBounds(x, y) && at(x, y) == empty);
    }

    function place(x, y, char) {
        if (!canPlace(x, y)) return;

        board[y][x] = char;
    }

    function reset() {
        for (let i = 0; i < size; ++i) {
            board[i].fill(empty);
        }
    }

    function print(logger) {
        for (let i = 0; i < size; ++i) {
            logger.logMessage(board[i].toString());
        }
    }

    function allFilled() {
        return board.every((row) => row.every((cell) => cell !== empty));
    }

    return {at, canPlace, isEmpty, place, reset, print, allFilled};
});

const game = (() => {
    const logger = Logger();

    let currentPlayer = getRandomPlayer();

    let board = Board(3);
    let state = 0;  // 0 for undecided, 1 for won, -1 for draw

    function reset() {
        board.reset();
        currentPlayer = getRandomPlayer();
        state = 0;
    }

    function getBoard() {
        return board;
    }

    function getState() {
        return state;
    }

    function winCheck() {
        // Rows
        for (let y = 0; y < 3; ++y) {
            if (board.isEmpty(0, y)) break;
            if (board.at(0, y) === board.at(1, y) && board.at(1, y) === board.at(2, y)) return true;
        }

        // Columns
        for (let x = 0; x < 3; ++x) {
            if (board.isEmpty(x, 0)) break;
            if (board.at(x, 0) === board.at(x, 1) && board.at(x, 1) === board.at(x, 2)) return true;
        }

        // Diagonal
        if (!board.isEmpty(0, 0)) {
            if (board.at(0, 0) === board.at(1, 1) && board.at(1, 1) === board.at(2, 2)) return true;
        }
        if (!board.isEmpty(2, 0)) {
            if (board.at(2, 0) === board.at(1, 1) && board.at(1, 1) === board.at(0, 2)) return true;
        }

        return false;
    }

    // Returns -1 if placement failed, or the placed player's index if successfull
    // Swaps currentPlayer if there is still turns to be played
    function tryPlace(x, y) {
        if (!board.canPlace(x, y)) {
            logger.logMessage('Invalid placement!');
            return -1;
        }
        if (state != 0) return -1;

        board.place(x, y, currentPlayer);
        if (winCheck()) {
            state = 1;
            logger.logMessage('Victory!');
            return currentPlayer;
        } else if (board.allFilled()) {
            state = -1;
            logger.logMessage('Draw!');
            return currentPlayer;
        }
        
        logger.logMessage(`Placement at (${x+1}, ${y+1})`);

        const placed = currentPlayer;
        if (currentPlayer === 0) {
            currentPlayer = 1;
        }
        else {
            currentPlayer = 0;
        }
        return placed;
    }

    // 0 or 1
    function getCurrentPlayer() {
        return currentPlayer;
    }

    function getRandomPlayer() {
        if (Math.random() < 0.5) {
            return 0;
        }
        return 1;
    }

    return {getBoard, logger, tryPlace, reset, getState, getCurrentPlayer};
})();

const banner = Banner(game);
banner.notStartedText();

const boardDiv = document.querySelector('#board');
const cells = boardDiv.querySelectorAll('.cell');
let started = false;

const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', () => {
    if (started) {
        game.reset();
        cells.forEach((cell, i) => {
            const button = cell.querySelector('button');
            button.innerText = '';
        });
        game.logger.logMessage('Restarted!');
    } else {
        startButton.innerText = 'Restart';
        started = true;
        game.logger.logMessage('Game started!');
    }
    
    banner.updateFromGameState();
});


cells.forEach((cell, i) => {
    const button = cell.querySelector('button');
    button.addEventListener('click', () => {
        if (!started) return;

        const x = i % 3;
        const y = Math.floor(i / 3);
        const result = game.tryPlace(x, y);
        if (result === -1) return;
        
        if (result === 0) {
            button.innerText = 'X';
        } else {
            button.innerText = 'O'
        }

        banner.updateFromGameState();
    });
});

const p1NameInput = document.querySelector('#player-1-name-input');
const p2NameInput = document.querySelector('#player-2-name-input');
[p1NameInput, p2NameInput].forEach((inputField) => {
    inputField.addEventListener('input', () =>  {
        if (started) {
            banner.updateFromGameState();
        }
    });
});