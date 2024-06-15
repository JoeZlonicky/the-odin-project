import { getRandomCellThatHasNotBeenAttacked, getRandomAdjacentThatHasNotBeenAttacked } from './random.js';

class ComputerPlayer {
  constructor(board) {
    this.board = board;
    this.history = [];
    this.priorityTargets = [];
  }

  getChoice(playerBoard) {
    while (this.priorityTargets.length) {
      const [x, y] = this.priorityTargets[0];
      if (playerBoard.at(x, y).isSunk()) {
        this.priorityTargets.shift();
        continue;
      }

      const adj = getRandomAdjacentThatHasNotBeenAttacked(playerBoard, [x, y]);
      if (adj === null) {
        this.priorityTargets.shift();
        continue;
      }

      return adj;
    }
    return getRandomCellThatHasNotBeenAttacked(playerBoard);
  }

  recordChoice(pos, shipAtCell) {
    this.history.push(pos);
    if (shipAtCell && !shipAtCell.isSunk()) {
      this.priorityTargets.push(pos);
    }
  }
}

export default ComputerPlayer;
