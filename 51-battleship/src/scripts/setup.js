import { GameState } from './Game.js';

// onCellSelected(cell, x , y)
const boardSetup = (container, board, onCellSelected, gameState) => {
  while (container.firstChild) {
    container.firstChild.remove();
  }

  for (let y = 0; y < board.width; ++y) {
    for (let x = 0; x < board.height; ++x) {
      const cell = document.createElement('div');
      cell.classList.add('board__cell');

      const hasBeenAttacked = board.hasBeenAttackedBefore(x, y);
      const isShipAtPosition = board.isShipAtPosition(x, y);
      const isMissedCell = hasBeenAttacked && !isShipAtPosition;
      const isHitCell = hasBeenAttacked && isShipAtPosition;
      const shipAtCell = board.at(x, y);

      if (isMissedCell) {
        cell.classList.add('miss');
      }

      if (isHitCell) {
        if (shipAtCell.isSunk()) {
          cell.classList.add('sunk');
        } else {
          cell.classList.add('hit');
        }
      }

      if (gameState === GameState.VIEWING_PLAYER) {
        if (isShipAtPosition) {
          cell.classList.add('ship');
          createConnections(cell, shipAtCell, board, x, y);
        }
      } else if (gameState === GameState.TARGETING_ENEMY && !hasBeenAttacked) {
        cell.classList.add('selectable');
        cell.addEventListener('click', () => {
          onCellSelected(cell, x, y);
        });
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
