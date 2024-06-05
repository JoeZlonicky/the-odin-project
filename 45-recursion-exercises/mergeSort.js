function mergeSort(arr) {
  if (arr.length <= 1) return [...arr];

  const middleIndex = Math.ceil(arr.length / 2);
  let left = arr.slice(0, middleIndex);
  let right = arr.slice(middleIndex, arr.length);

  left = mergeSort(left);
  right = mergeSort(right);

  const sorted = [];
  while (left.length > 0 || right.length > 0) {
    if (left.length === 0 || left[0] > right[0]) {
      sorted.push(right.shift());
      continue;
    }

    sorted.push(left.shift());
  }

  return sorted;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 2]));
console.log(mergeSort([105, 79, 100, 110]));
