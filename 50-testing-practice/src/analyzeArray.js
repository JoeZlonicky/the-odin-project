const calculateAverage = (numArray) => {
  if (numArray.length === 0) {
    return undefined;
  }

  let sum = 0;
  for (const n of numArray) {
    sum += n;
  }

  return sum / numArray.length;
};

const calculateMin = (numArray) => {
  if (numArray.length === 0) {
    return undefined;
  }

  let min = Infinity;
  for (const n of numArray) {
    if (n < min) {
      min = n;
    }
  }

  return min;
};

const calculateMax = (numArray) => {
  if (numArray.length === 0) {
    return undefined;
  }

  let max = -Infinity;
  for (const n of numArray) {
    if (n > max) {
      max = n;
    }
  }

  return max;
};

const analyzeArray = (numArray) => {
  return {
    average: calculateAverage(numArray),
    min: calculateMin(numArray),
    max: calculateMax(numArray),
    length: numArray.length,
  };
};

export default analyzeArray;
