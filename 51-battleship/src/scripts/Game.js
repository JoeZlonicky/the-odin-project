import Gameboard from './Gameboard.js';
import HumanPlayer from './HumanPlayer.js';
import ComputerPlayer from './ComputerPlayer.js';
import Ship from './Ship.js';
import { getRandomValidShipPlacement } from './random.js';
import wait from './wait.js';

const GameState = {
  VIEWING_PLAYER: 1,
  TARGETING_ENEMY: 2,
  VIEWING_ENEMY: 3,
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

  start() {
    this.playersTurn();
    this.logMessageReceiver.send('Game started!');
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

    const [x, y] = this.computer.getChoice(this.player.board);
    this.playTurn(x, y);
    this.computer.recordChoice([x, y], this.player.board.at(x, y));
  }

  playerWon() {
    this.bannerMessageReceiver.send('Victory!');
    this.logMessageReceiver.send('Victory!');
  }

  playerLost() {
    this.bannerMessageReceiver.send('Gameover!');
    this.logMessageReceiver.send('Gameover!');
  }

  async playTurn(x, y) {
    const board = this.getCurrentBoard();
    const hit = board.receiveAttack(x, y);
    const playerName = board === this.player.board ? 'Computer' : 'Player';
    if (hit) {
      const ship = board.at(x, y);
      if (ship.isSunk()) {
        this.bannerMessageReceiver.send('Battleship sunk!');
        this.logMessageReceiver.send('Battleship sunk!');
      } else {
        this.bannerMessageReceiver.send('Hit!');
        this.logMessageReceiver.send(`${playerName} hits: ${x + 1}, ${y + 1}`);
      }
    } else {
      this.bannerMessageReceiver.send('Miss!');
      this.logMessageReceiver.send(`${playerName} misses: ${x + 1}, ${y + 1}`);
    }

    if (this.state === GameState.TARGETING_ENEMY) {
      this.state = GameState.VIEWING_ENEMY;
    }
    this.onNewBoardDisplayed?.(board, this.state);

    await wait(ACTION_DELAY_TIME_MS);

    if (board.areAllShipsSunk()) {
      board === this.player.board ? this.playerLost() : this.playerWon();
      return;
    }

    if (this.state === GameState.VIEWING_ENEMY) {
      this.enemysTurn();
    } else {
      this.playersTurn();
    }
  }

  reset() {
    this.state = GameState.VIEWING_PLAYER;
    this.computer = new ComputerPlayer(this.generateRandomBoard());
    this.player = new HumanPlayer(this.generateRandomBoard());
    this.onNewBoardDisplayed?.(this.player.board, this.state);
    this.bannerMessageReceiver.send('Welcome to Battleship!');
    this.logMessageReceiver.sendClear();
  }

  givePlayerNewBoard() {
    this.player = new HumanPlayer(this.generateRandomBoard());
    this.logMessageReceiver.send('Randomized board!');
    this.onNewBoardDisplayed?.(this.player.board, this.state);
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
