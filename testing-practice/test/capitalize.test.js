import capitalize from '../src/capitalize';

test('Happy path', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Empty string', () => {
  expect(capitalize('')).toBe('');
});

test('Already upper-case', () => {
  expect(capitalize('WORLD')).toBe('WORLD');
});
