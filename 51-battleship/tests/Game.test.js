import { test, expect } from '@jest/globals';
import Game from '../src/scripts/Game';

test('Generates valid random board', () => {
  const game = new Game();
  const board = game.generateRandomBoard();

  expect(board.ships.length).toBe(5);
});
