import { getRandomCellThatHasNotBeenAttacked } from './random.js';

class ComputerPlayer {
  constructor(board) {
    this.board = board;
    this.history = [];
  }

  getChoice(playerBoard) {
    return getRandomCellThatHasNotBeenAttacked(playerBoard);
  }

  recordChoice(pos) {
    this.history.push(pos);
  }
}

export default ComputerPlayer;
