import reverseString from '../src/reverseString';

test('Happy path', () => {
  expect(reverseString('abc')).toBe('cba');
});

test('Empty string', () => {
  expect(reverseString('')).toBe('');
});
