function fibs(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let a = 0;
  let b = 1;
  const result = [0, 1];
  for (let i = 0; i < n - 2; ++i) {
    let c = a + b;
    a = b;
    b = c;

    result.push(c);
  }

  return result;
}

console.log(`fibs(0): ${fibs(0)}`);
console.log(`fibs(1): ${fibs(1)}`);
console.log(`fibs(2): ${fibs(2)}`);
console.log(`fibs(8): ${fibs(8)}`);

function fibsRec(n, a = -1, b = -1) {
  if (n === 0) return [];
  if (a === -1) return [0].concat(fibsRec(n - 1, 0));
  if (b === -1) return [1].concat(fibsRec(n - 1, 0, 1));

  const c = a + b;
  return [c].concat(fibsRec(n - 1, b, c));
}

console.log(`fibsRec(0): ${fibsRec(0)}`);
console.log(`fibsRec(1): ${fibsRec(1)}`);
console.log(`fibsRec(2): ${fibsRec(2)}`);
console.log(`fibsRec(8): ${fibsRec(8)}`);
