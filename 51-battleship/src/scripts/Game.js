import Gameboard from './Gameboard.js';
import HumanPlayer from './HumanPlayer.js';
import ComputerPlayer from './ComputerPlayer.js';
import Ship from './Ship.js';
import { getRandomValidShipPlacement } from './random.js';

class Game {
  // onNewBoardDisplayed(board, isPlayer)
  constructor(bannerMessageReceiver, logMessageReceiver, onNewBoardDisplayed) {
    this.boardSize = 10;
    this.bannerMessageReceiver = bannerMessageReceiver;
    this.logMessageReceiver = logMessageReceiver;

    this.player = new HumanPlayer(this.generateRandomBoard());
    this.computer = new ComputerPlayer(this.generateRandomBoard());
    this.isPlayerTurn = false;
    this.onNewBoardDisplayed = onNewBoardDisplayed;
    this.onNewBoardDisplayed?.(this.player.board, true);
  }

  start() {
    this.isPlayerTurn = true;
    this.bannerMessageReceiver.send('Your turn!');
    this.onNewBoardDisplayed?.(this.computer.board, false);
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
}

export default Game;
