import { test, expect } from '@jest/globals';
import Ship from '../src/Ship';
import Gameboard from '../src/Gameboard';

test('Is in bounds happy path', () => {
  const board = new Gameboard(10, 10);

  expect(board.isInBounds(4, 6)).toBe(true);
});

test('Is in bounds outside edge cases', () => {
  const board = new Gameboard(10, 10);

  expect(board.isInBounds(-1, 0)).toBe(false);
  expect(board.isInBounds(0, -1)).toBe(false);
  expect(board.isInBounds(10, 0)).toBe(false);
  expect(board.isInBounds(0, 10)).toBe(false);
});

test('Is in bounds inside edge cases', () => {
  const board = new Gameboard(10, 10);

  expect(board.isInBounds(0, 0)).toBe(true);
  expect(board.isInBounds(9, 9)).toBe(true);
});

test('Is valid placement happy path', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(4);

  expect(board.isValidPlacement(ship, [1, 1], [4, 1])).toBe(true);
});

test('Is valid placement out of bounds', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(5);

  expect(board.isValidPlacement(ship, [7, 1], [11, 1])).toBe(false);
});

test('Is valid placement length mismatch', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(3);

  expect(board.isValidPlacement(ship, [1, 1], [4, 1])).toBe(false);
});

test('Is valid placement diagonal', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(3);

  expect(board.isValidPlacement(ship, [2, 2], [3, 3])).toBe(false);
});

test('Is valid placement ship obstruction', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(5);

  board.placeShip(ship, [1, 1], [5, 1]);

  expect(board.isValidPlacement(ship, [3, 0], [3, 3])).toBe(false);
});

test('Place ship', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(2);

  board.placeShip(ship, [1, 1], [2, 1]);

  expect(board.at(1, 1)).toBe(ship);
  expect(board.at(2, 1)).toBe(ship);
});

test('Place ship throws error if invalid', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(3);

  expect(() => board.placeShip(ship, [1, 1], [2, 1])).toThrow();
});

test('Are all ships sunk', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(2);

  board.placeShip(ship, [1, 1], [2, 1]);

  expect(board.areAllShipsSunk()).toBe(false);

  board.receiveAttack(1, 1);
  board.receiveAttack(2, 1);

  expect(board.areAllShipsSunk()).toBe(true);
});

test('Receive attack hit', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(2);

  board.placeShip(ship, [1, 1], [2, 1]);

  expect(board.receiveAttack(1, 1)).toBe(true);
});

test('Receive attack miss', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(2);

  board.placeShip(ship, [1, 1], [2, 1]);

  expect(board.receiveAttack(3, 1)).toBe(false);
});

test('Receive attack throws if already attacked', () => {
  const board = new Gameboard(10, 10);

  board.receiveAttack(1, 1);

  expect(() => board.receiveAttack(1, 1)).toThrow();
});

test('Has been attacked before negative', () => {
  const board = new Gameboard(10, 10);

  expect(board.hasBeenAttackedBefore(1, 1)).toBe(false);
});

test('Has been attacked before miss', () => {
  const board = new Gameboard(10, 10);

  board.receiveAttack(1, 1);

  expect(board.hasBeenAttackedBefore(1, 1)).toBe(true);
});

test('Has been attacked before hit', () => {
  const board = new Gameboard(10, 10);
  const ship = new Ship(2);

  board.placeShip(ship, [1, 1], [2, 1]);

  board.receiveAttack(1, 1);

  expect(board.hasBeenAttackedBefore(1, 1)).toBe(true);
});
