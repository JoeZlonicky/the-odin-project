import { test, expect } from '@jest/globals';
import Ship from '../src/scripts/Ship.js';
import ComputerPlayer from '../src/scripts/ComputerPlayer.js';
import Gameboard from '../src/scripts/Gameboard.js';

test('Prioritises adjacent', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(5);
  board.placeShip(ship, [0, 0], [4, 0]);

  const computer = new ComputerPlayer(new Gameboard(10, 10));
  computer.recordChoice([0, 0], ship);

  const choice = computer.getChoice(board);
  expect([
    [0, 1],
    [1, 0],
  ]).toContainEqual(choice);

  board.receiveAttack(0, 1);
  computer.recordChoice([0, 1], null);
  expect(computer.getChoice(board)).toEqual([1, 0]);
});
