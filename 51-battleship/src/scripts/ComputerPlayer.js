import { getRandomCellThatHasNotBeenAttacked, getRandomAdjacentThatHasNotBeenAttacked } from './random.js';

class ComputerPlayer {
  constructor(board) {
    this.board = board;
    this.history = [];
    this.priorityTargets = [];
  }

  getChoice(playerBoard) {
    while (this.priorityTargets.length) {
      const [x, y] = this.priorityTargets[this.priorityTargets.length - 1];
      if (playerBoard.at(x, y).isSunk()) {
        this.priorityTargets.pop();
        continue;
      }

      const adj = getRandomAdjacentThatHasNotBeenAttacked(playerBoard, [x, y]);
      if (adj === null) {
        this.priorityTargets.pop();
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
