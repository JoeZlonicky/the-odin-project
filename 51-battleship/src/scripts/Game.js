import Gameboard from './Gameboard';
import HumanPlayer from './HumanPlayer';
import ComputerPlayer from './ComputerPlayer';
import Ship from './Ship';
import { getRandomValidShipPlacement } from './random';

class Game {
  constructor() {
    this.boardSize = 10;

    this.player = null;
    this.computer = null;
    this.isPlayerTurn = false;

    this.reset();
  }

  reset() {
    this.givePlayerNewBoard();
    this.computer = new ComputerPlayer(this.generateRandomBoard());
    this.isPlayerTurn = true;
  }

  givePlayerNewBoard() {
    this.player = new HumanPlayer(this.generateRandomBoard());
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
