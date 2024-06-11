import * as calculator from '../src/calculator';

test('Add happy path', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('Subtract happy path', () => {
  expect(calculator.subtract(5, 1)).toBe(4);
});

test('Subtract negatives', () => {
  expect(calculator.subtract(-5, -1)).toBe(-4);
});

test('Divide happy path', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('Divide floats', () => {
  expect(calculator.divide(2.5, 0.5)).toBe(5);
});

test('Multiply happy path', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('Multiply negatives', () => {
  expect(calculator.multiply(-5, -1)).toBe(5);
});
