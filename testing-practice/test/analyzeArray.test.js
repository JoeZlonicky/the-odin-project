import analyzeArray from '../src/analyzeArray';

test('Average', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('Average empty', () => {
  expect(analyzeArray([]).average).toBeUndefined();
});

test('Min', () => {
  expect(analyzeArray([5, 8, 3, 4, 2, 6]).min).toBe(2);
});

test('Min empty', () => {
  expect(analyzeArray([]).min).toBe(undefined);
});

test('Max', () => {
  expect(analyzeArray([5, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('Max empty', () => {
  expect(analyzeArray([]).max).toBe(undefined);
});

test('Length', () => {
  expect(analyzeArray([5, 8, 3, 4, 2, 6]).length).toBe(6);
});

test('Length empty', () => {
  expect(analyzeArray([]).length).toBe(0);
});
