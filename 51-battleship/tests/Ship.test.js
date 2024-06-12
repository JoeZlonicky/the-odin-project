import { test, expect } from '@jest/globals';
import Ship from '../src/Ship';

test('Get hits', () => {
  const ship = new Ship(5);

  expect(ship.getHits()).toBe(0);
});

test('Hit', () => {
  const ship = new Ship(5);

  ship.hit();
  expect(ship.getHits()).toBe(1);
});

test('Hit maximum', () => {
  const ship = new Ship(4);

  for (let i = 0; i < 4; ++i) {
    ship.hit();
    expect(ship.getHits()).toBe(i + 1);
  }

  ship.hit();
  expect(ship.getHits()).toBe(4);
});

test('Sunk', () => {
  const ship = new Ship(1);

  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
