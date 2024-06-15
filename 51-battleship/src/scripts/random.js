const getRandomInt = (maxExclusive) => {
  return Math.floor(Math.random() * maxExclusive);
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

const getRandomAdjacentThatHasNotBeenAttacked = (board, pos) => {
  const [x, y] = pos;
  let adj = [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
  ];

  adj = adj.filter((pos) => {
    return board.isInBounds(pos[0], pos[1]) && !board.hasBeenAttackedBefore(pos[0], pos[1]);
  });

  if (adj.length === 0) return null;

  const idx = getRandomInt(adj.length);
  return adj[idx];
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

export { getRandomCellThatHasNotBeenAttacked, getRandomValidShipPlacement, getRandomAdjacentThatHasNotBeenAttacked };
