import { getRandomCellThatHasNotBeenAttacked } from './random.js';

class ComputerPlayer {
  constructor(board) {
    this.board = board;
  }

  getChoice() {
    return getRandomCellThatHasNotBeenAttacked(this.board);
  }
}

export default ComputerPlayer;
