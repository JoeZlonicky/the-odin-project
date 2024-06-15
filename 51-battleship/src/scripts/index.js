import '../style/global.css';
import '../style/layout.css';
import '../style/board.css';

import { boardSetup } from './setup.js';
import Game, { GameState, gameState } from './Game.js';
import MessageReceiver from './MessageReceiver.js';

const banner = document.querySelector('.board__banner');
const bannerMessageReceiver = new MessageReceiver(
  (message) => {
    banner.textContent = message;
  },
  () => {
    banner.textContent = '';
  },
);

const logContainer = document.querySelector('.game-log');
const logMessageReceiver = new MessageReceiver(
  (message) => {
    const div = document.createElement('div');
    div.textContent = message;
    logContainer.appendChild(div);
    logContainer.scrollTop = logContainer.scrollHeight;
  },
  () => {
    while (logContainer.firstChild) {
      logContainer.firstChild.remove();
    }
  },
  true,
);

const onCellSelected = (cell, x, y) => {
  game.playTurn(x, y);
};

const body = document.querySelector('body');
const boardElement = document.querySelector('.board');
const onNewBoardDisplayed = (board, gameState) => {
  boardSetup(boardElement, board, onCellSelected, gameState);
  if (gameState === GameState.VIEWING_PLAYER) {
    body.classList.remove('alt-color');
  } else {
    body.classList.add('alt-color');
  }
};

const game = new Game(bannerMessageReceiver, logMessageReceiver, onNewBoardDisplayed);

const randomizeButton = document.querySelector('.randomize-button');
randomizeButton.addEventListener('click', () => {
  game.givePlayerNewBoard();
});

const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => {
  game.start();
  restartButton.classList.remove('hidden');
  randomizeButton.classList.add('hidden');
  startButton.classList.add('hidden');
});

const restartButton = document.querySelector('.restart-button');
restartButton.addEventListener('click', () => {
  game.reset();
  restartButton.classList.add('hidden');
  randomizeButton.classList.remove('hidden');
  startButton.classList.remove('hidden');
});
