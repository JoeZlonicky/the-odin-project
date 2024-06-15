import Gameboard from './Gameboard.js';
import HumanPlayer from './HumanPlayer.js';
import ComputerPlayer from './ComputerPlayer.js';
import Ship from './Ship.js';
import { getRandomCellThatHasNotBeenAttacked, getRandomValidShipPlacement } from './random.js';

const GameState = {
  VIEWING_PLAYER: 1,
  TARGETING_ENEMY: 2,
  VIEWING_ENEMY: 3,
};

const wait = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const COMPUTER_THINK_TIME_MS = 1000;
const ACTION_DELAY_TIME_MS = 1000;

class Game {
  // onNewBoardDisplayed(board, gameState)
  constructor(bannerMessageReceiver, logMessageReceiver, onNewBoardDisplayed) {
    this.boardSize = 10;
    this.bannerMessageReceiver = bannerMessageReceiver;
    this.logMessageReceiver = logMessageReceiver;

    this.player = new HumanPlayer(this.generateRandomBoard());
    this.computer = new ComputerPlayer(this.generateRandomBoard());
    this.state = GameState.VIEWING_PLAYER;
    this.onNewBoardDisplayed = onNewBoardDisplayed;
    this.onNewBoardDisplayed?.(this.player.board, GameState.VIEWING_PLAYER);
  }

  playersTurn() {
    this.state = GameState.TARGETING_ENEMY;
    this.bannerMessageReceiver.send('Your turn!');
    this.onNewBoardDisplayed?.(this.computer.board, GameState.TARGETING_ENEMY);
  }

  async enemysTurn() {
    this.state = GameState.VIEWING_PLAYER;
    this.bannerMessageReceiver.send('Computer is thinking...');
    this.onNewBoardDisplayed?.(this.player.board, this.state);

    await wait(COMPUTER_THINK_TIME_MS);

    const choice = getRandomCellThatHasNotBeenAttacked(this.player.board);
    this.playTurn(choice[0], choice[1]);
  }

  async playTurn(x, y) {
    const board = this.getCurrentBoard();
    const hit = board.receiveAttack(x, y);
    if (hit) {
      const ship = board.at(x, y);
      if (ship.isSunk()) {
        this.bannerMessageReceiver.send('Battleship sunk!');
      } else {
        this.bannerMessageReceiver.send('Hit!');
      }
    } else {
      this.bannerMessageReceiver.send('Miss!');
    }

    if (this.state === GameState.TARGETING_ENEMY) {
      this.state = GameState.VIEWING_ENEMY;
    }
    this.onNewBoardDisplayed?.(board, this.state);

    await wait(ACTION_DELAY_TIME_MS);

    if (this.state === GameState.VIEWING_ENEMY) {
      this.enemysTurn();
    } else {
      this.playersTurn();
    }
  }

  reset() {
    this.givePlayerNewBoard();
    this.computer = new ComputerPlayer(this.generateRandomBoard());
    this.isPlayerTurn = true;
  }

  givePlayerNewBoard() {
    this.player = new HumanPlayer(this.generateRandomBoard());
    this.logMessageReceiver.send('Randomized board!');
  }

  generateRandomBoard() {
    const board = new Gameboard(this.boardSize, this.boardSize);
    [2, 3, 3, 4, 5].forEach((length) => {
      const ship = new Ship(length);
      const placement = getRandomValidShipPlacement(board, ship, Math.random() > 0.5);

      board.placeShip(ship, placement[0], placement[1]);
    });

    return board;
  }

  getCurrentBoard() {
    return this.state === GameState.VIEWING_PLAYER ? this.player.board : this.computer.board;
  }
}

export { GameState };
export default Game;
