// Q1: Sum all numbers
function sumRange(n) {
  if (n <= 1) {
    return n;
  }
  return n + sumRange(n - 1);
}

console.log(`sumRange(3) = ${sumRange(3)}`);

// Q2: Power function
function power(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;

  return x * power(x, n - 1);
}

console.log(`power(2, 4) = ${power(2, 4)}`);
console.log(`power(2, 1) = ${power(2, 1)}`);
console.log(`power(2, 0) = ${power(2, 0)}`);

// Q3: Calculate factorial
function factorial(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

console.log(`factorial(5) = ${factorial(5)}`);

// Q4: Check all values in an array
function all(values, predicate) {
  if (values.length === 0) return true;

  return predicate(values[0]) && all(values.slice(1), predicate);
}

const allAreLessThanSeven = all([4, 2, 6], function (num) {
  return num < 7;
});

console.log(`[4,2,6] are all less than seven: ${allAreLessThanSeven}`);

// Q5: Product of an array
function productOfArray(arr) {
  if (arr.length === 0) return undefined;
  if (arr.length === 1) return arr[0];

  return arr[0] * productOfArray(arr.slice(1));
}

console.log(`Product of [1, 2, 3, 10] = ${productOfArray([1, 2, 3, 10])}`);

// Q6: Search JS object
function contains(obj, value) {
  for (const property in obj) {
    const propertyValue = obj[property];

    if (propertyValue === value) return true;

    if (typeof propertyValue === 'object' && propertyValue !== null) {
      if (contains(propertyValue, value)) {
        return true;
      }
    }
  }
  return false;
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

console.log(`Has 44: ${contains(nestedObject, 44)}`);
console.log(`Has foo: ${contains(nestedObject, 'foo')}`);

// Q7: Parse a multi-dimensional array
function totalIntegers(arr) {
  let total = 0;
  for (const value of arr) {
    if (Array.isArray(value)) {
      total += totalIntegers(value);
      continue;
    }
    if (Number.isInteger(value)) {
      total += 1;
    }
  }
  return total;
}

const multiArray = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];
console.log(`Total number of integers in multi-dimensional array: ${totalIntegers(multiArray)}`);

// Q8: Sum squares of numbers in multi-dimensionstal array
function sumSquares(arr) {
  let sum = 0;
  for (const value of arr) {
    if (Array.isArray(value)) {
      sum += sumSquares(value);
      continue;
    }
    if (typeof value === 'number') {
      sum += value * value;
    }
  }
  return sum;
}

const secondMultiArray = [10, [[10], 10], [10]];
console.log(`Sum of squares of multi-dimensional array = ${sumSquares(secondMultiArray)}`);

// Q9: Replicate
function replicate(x, n) {
  if (n <= 0) return [];
  if (n === 1) return [x];

  return [x].concat(replicate(x, n - 1));
}

console.log(`replicate(3, 5) = ${replicate(3, 5)}`);
console.log(`replicate(1, 42) = ${replicate(1, 42)}`);
