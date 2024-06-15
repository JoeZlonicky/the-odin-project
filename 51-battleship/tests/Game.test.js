import { test, jest, expect } from '@jest/globals';
import Game from '../src/scripts/Game.js';
import MessageReceiver from '../src/scripts/MessageReceiver.js';

const nullMessageReceiver = new MessageReceiver(
  () => {},
  () => {},
);
test('Generates valid random board', () => {
  const game = new Game();
  const board = game.generateRandomBoard();

  expect(board.ships.length).toBe(5);
});

test("Viewing enemy board on player's turn", () => {
  const game = new Game(nullMessageReceiver, nullMessageReceiver);
  game.playersTurn();
  expect(game.getCurrentBoard()).toBe(game.computer.board);
});
