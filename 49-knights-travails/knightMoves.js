class InvalidStartPositionError extends Error {
  constructor() {
    super('Invalid start position!');
    this.name = 'InvalidStartPositionError';
  }
}

class InvalidEndPositionError extends Error {
  constructor() {
    super('Invalid end position!');
    this.name = 'InvalidStartPositionError';
  }
}

class NoPathError extends Error {
  constructor() {
    super('No path found!');
    this.name = 'NoPathError';
  }
}

const BOARD_SIZE = 8;

const isValidPosition = (x, y) => {
  return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
};

const getValidMovesFromPosition = (x, y) => {
  const moves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
    [x - 2, y + 1],
    [x - 2, y - 1],
  ];

  const valid = moves.filter((move) => isValidPosition(move[0], move[1]));
  return valid;
};

const arePositionsEqual = (a, b) => {
  return a[0] === b[0] && a[1] === b[1];
};

const findShortestPath = (start, end) => {
  if (!isValidPosition(start[0], start[1])) {
    throw new InvalidStartPositionError();
  }
  if (!isValidPosition(end[0], end[1])) {
    throw new InvalidEndPositionError();
  }
  if (arePositionsEqual(start, end)) {
    return [start, end];
  }

  const discovered = [];
  for (let y = 0; y < BOARD_SIZE; ++y) {
    const row = [];
    for (let x = 0; x < BOARD_SIZE; ++x) {
      row.push(false);
    }
    discovered.push(row);
  }

  const pathsToExplore = [[start]];

  while (pathsToExplore.length > 0) {
    const path = pathsToExplore.shift();
    const endofPath = path[path.length - 1];
    const nextMoves = getValidMovesFromPosition(endofPath[0], endofPath[1]);
    for (const next of nextMoves) {
      const x = next[0];
      const y = next[1];
      if (discovered[y][x]) {
        continue;
      }

      const newPath = [...path];
      newPath.push(next);

      if (arePositionsEqual(next, end)) {
        return newPath;
      }

      discovered[y][x] = true;
      pathsToExplore.push(newPath);
    }
  }
  throw new NoPathError();
};

const knightMoves = (start, end) => {
  try {
    const path = findShortestPath(start, end);
    console.log(`You made it in ${path.length} moves! Here's your path:`);
    path.forEach((pos) => {
      console.log(`  ${pos[0]}, ${pos[1]}`);
    });
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};

export default knightMoves;
