import '../style/global.css';
import '../style/layout.css';
import '../style/board.css';

import { boardSetup } from './setup.js';
import Game from './Game.js';
import MessageReceiver from './MessageReceiver.js';

const banner = document.querySelector('.board__banner');
const bannerMessageReceiver = new MessageReceiver((message) => {
  banner.textContent = message;
});

const logContainer = document.querySelector('.game-log');
const logMessageReceiver = new MessageReceiver((message) => {
  const div = document.createElement('div');
  div.textContent = message;
  logContainer.appendChild(div);
  logContainer.scrollTop = logContainer.scrollHeight;
}, true);

const onCellSelected = (cell, x, y) => {};

const boardElement = document.querySelector('.board');
const onNewBoardDisplayed = (board, isPlayer = true) => {
  boardSetup(boardElement, board, isPlayer);
};

const game = new Game(bannerMessageReceiver, logMessageReceiver, onNewBoardDisplayed);

const randomizeButton = document.querySelector('.randomize-button');
randomizeButton.addEventListener('click', () => {
  game.givePlayerNewBoard();
  boardSetup(boardElement, game.player.board);
});

const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => {
  game.start();
});
