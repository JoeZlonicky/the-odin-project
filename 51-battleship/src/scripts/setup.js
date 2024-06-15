const boardSetup = (container, board, isPlayer = true) => {
  while (container.firstChild) {
    container.firstChild.remove();
  }

  for (let y = 0; y < board.width; ++y) {
    for (let x = 0; x < board.height; ++x) {
      const cell = document.createElement('div');
      cell.classList.add('board__cell');

      const ship = board.at(x, y);
      if (isPlayer && ship !== null) {
        cell.classList.add('ship');

        createConnections(cell, ship, board, x, y);
      } else {
        cell.classList.add('selectable');
      }

      container.appendChild(cell);
    }
  }
};

const createConnections = (cell, ship, board, x, y) => {
  createConnectionIfNeeded(cell, ship, board, x - 1, y, 'board__left-connection');
  createConnectionIfNeeded(cell, ship, board, x, y - 1, 'board__up-connection');
};

const createConnectionIfNeeded = (cell, ship, board, toX, toY, directionClass) => {
  if (!board.isInBounds(toX, toY)) return;
  if (board.at(toX, toY) !== ship) return;

  const connection = document.createElement('div');
  connection.classList.add(directionClass);
  cell.appendChild(connection);
};

export { boardSetup };
