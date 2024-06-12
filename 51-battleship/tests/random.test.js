import { jest, test, expect, afterEach } from '@jest/globals';
import Ship from '../src/scripts/Ship';
import Gameboard from '../src/scripts/Gameboard';
import { getRandomCellThatHasNotBeenAttacked, getRandomValidShipPlacement } from '../src/scripts/random';

afterEach(() => {
  jest.clearAllMocks();
});

test('Get random cell that has not been attacked', () => {
  const board = new Gameboard(10, 10);

  jest.spyOn(Math, 'random').mockReturnValue(0.99);
  const pos = getRandomCellThatHasNotBeenAttacked(board);

  expect(pos).toEqual([9, 9]);
});

test('Get random cell that has not been attacked when first choice is already attacked', () => {
  const board = new Gameboard(10, 10);
  board.receiveAttack(9, 9);

  jest
    .spyOn(Math, 'random')
    .mockReturnValueOnce(0.99)
    .mockReturnValueOnce(0.99)
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(0);
  const pos = getRandomCellThatHasNotBeenAttacked(board);

  expect(pos).toEqual([0, 0]);
});

test('Get random valid ship placement', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(5);

  jest.spyOn(Math, 'random').mockReturnValue(0);

  const [start, end] = getRandomValidShipPlacement(board, ship);

  expect(start).toEqual([0, 0]);
  expect(end).toEqual([4, 0]);
});

test('Get random valid ship placement with vertical placement', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(5);

  jest.spyOn(Math, 'random').mockReturnValue(0);

  const [start, end] = getRandomValidShipPlacement(board, ship, false);

  expect(start).toEqual([0, 0]);
  expect(end).toEqual([0, 4]);
});

test('Get random valid ship placement when first choice is blocked', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(5);

  board.placeShip(ship, [0, 0], [4, 0]);

  jest
    .spyOn(Math, 'random')
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(0.1)
    .mockReturnValueOnce(0.1);

  const [start, end] = getRandomValidShipPlacement(board, ship);

  expect(start).toEqual([1, 1]);
  expect(end).toEqual([5, 1]);
});
