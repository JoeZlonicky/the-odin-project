class Gameboard {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.grid = [...Array(height)].map(() => Array(width).fill(null));
    this.hitGrid = [...Array(height)].map(() => Array(width).fill(null));
    this.missedGrid = [...Array(height)].map(() => Array(width).fill(null));
    this.ships = [];
  }

  at(x, y) {
    return this.grid[y][x];
  }

  isInBounds(x, y) {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  isShipAtPosition(x, y) {
    return this.at(x, y) !== null;
  }

  isValidPlacement(ship, start, end) {
    if (start[1] - start[0] !== 0 && end[1] - end[0] !== 0) {
      return false;
    }

    if (Math.abs(start[1] - start[0]) + Math.abs(end[1] - end[0]) !== ship.length - 1) {
      return false;
    }

    for (let x = start[0]; x <= end[0]; ++x) {
      for (let y = start[1]; y <= end[1]; ++y) {
        if (!this.isInBounds(x, y)) return false;
        if (this.at(x, y) !== null) return false;
      }
    }

    return true;
  }

  placeShip(ship, start, end) {
    if (!this.isValidPlacement(ship, start, end)) {
      throw new Error('Invalid ship placement');
    }

    this.ships.push(ship);

    for (let x = start[0]; x <= end[0]; ++x) {
      for (let y = start[1]; y <= end[1]; ++y) {
        this.grid[y][x] = ship;
      }
    }
  }

  areAllShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  hasBeenAttackedBefore(x, y) {
    if (this.hitGrid[y][x]) {
      return true;
    }

    if (this.missedGrid[y][x]) {
      return true;
    }

    return false;
  }

  receiveAttack(x, y) {
    if (this.hasBeenAttackedBefore(x, y)) {
      throw new Error('Position has already been attacked');
    }

    const shipAtPosition = this.at(x, y);
    if (shipAtPosition === null) {
      this.missedGrid[y][x] = true;
      return false;
    }

    shipAtPosition.hit();
    this.hitGrid[y][x] = true;
    return true;
  }
}

export default Gameboard;
