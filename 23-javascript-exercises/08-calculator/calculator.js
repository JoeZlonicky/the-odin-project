const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(values) {
	return values.reduce((total, value) => total + value, 0);
};

const multiply = function(values) {
  return values.reduce((product, value) => product * value, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	let result = 1;
  for (let i = n; i > 1; --i) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
