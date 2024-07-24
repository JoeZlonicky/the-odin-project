import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import CartCount from './CartCount';

const itemOne = {
  name: 'One',
  id: 1,
  img: '1.png',
  cost: 1,
};

const itemTwo = {
  name: 'Two',
  id: 2,
  img: '2.png',
  cost: 2,
};

const testCart = new Map([
  [itemOne, 3],
  [itemTwo, 5],
]);

it('Matches screenshot', () => {
  const { container } = render(<CartCount cart={testCart} />);
  expect(container).toMatchSnapshot();
});

it('Sums cart correctly', () => {
  const { container } = render(<CartCount cart={testCart} />);
  expect(container.textContent).toMatch(8);
});
