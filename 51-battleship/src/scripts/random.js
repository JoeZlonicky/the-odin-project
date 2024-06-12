const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// Return: [x, y]
const getRandomCellThatHasNotBeenAttacked = (board) => {
  while (true) {
    const x = getRandomInt(board.width);
    const y = getRandomInt(board.height);
    if (board.hasBeenAttackedBefore(x, y)) continue;

    return [x, y];
  }
};

// Return: [start, end]
const getRandomValidShipPlacement = (board, ship, isHorizontal = true) => {
  while (true) {
    const x = getRandomInt(board.width);
    const y = getRandomInt(board.height);

    const start = [x, y];
    const end = isHorizontal ? [x + ship.length - 1, y] : [x, y + ship.length - 1];

    if (!board.isValidPlacement(ship, start, end)) continue;

    return [start, end];
  }
};

export { getRandomCellThatHasNotBeenAttacked, getRandomValidShipPlacement };
