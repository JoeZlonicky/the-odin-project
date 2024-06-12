import { getRandomCellThatHasNotBeenAttacked } from './random';

class ComputerPlayer {
  constructor(board) {
    this.board = board;
  }

  getChoice() {
    return getRandomCellThatHasNotBeenAttacked(this.board);
  }
}

export default ComputerPlayer;
