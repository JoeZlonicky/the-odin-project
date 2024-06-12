import caesarCipher from '../src/caesarCipher';

test('Happy path', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('No shift', () => {
  expect(caesarCipher('noshift', 0)).toBe('noshift');
});

test('Capitalization', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Spaces', () => {
  expect(caesarCipher('  hello  ', 3)).toBe('  khoor  ');
});

test('Punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
