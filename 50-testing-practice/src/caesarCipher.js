const shouldBeShifted = (c) => {
  return c.match(/[a-z]/i);
};

const shiftChar = (c, shift) => {
  let code = c.charCodeAt(0);
  const offset = c >= 'a' && c <= 'z' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);

  code -= offset;
  code += shift;
  code %= 26;
  code += offset;

  return String.fromCharCode(code);
};

const caesarCipher = (str, shift) => {
  let result = '';
  for (const c of str) {
    if (!shouldBeShifted(c)) {
      result += c;
      continue;
    }

    result += shiftChar(c, shift);
  }

  return result;
};

export default caesarCipher;
