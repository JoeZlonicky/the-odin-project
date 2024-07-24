import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import QuantityPill from './QuantityPill';

async function getFunctionCallFromButtonClick(buttonLabelText, initial) {
  const user = userEvent.setup();
  const setQuantity = vi.fn();

  render(<QuantityPill quantity={initial} setQuantity={setQuantity} />);
  const button = screen.getByLabelText(buttonLabelText);
  await user.click(button);

  return setQuantity;
}

async function getFunctionCallFromInput(inputValue, initial) {
  const user = userEvent.setup();
  const setQuantity = vi.fn();

  render(<QuantityPill quantity={initial} setQuantity={setQuantity} />);
  const button = screen.getByRole('textbox');
  await user.type(button, inputValue);

  return setQuantity;
}

it('Matches screenshot', () => {
  const component = render(<QuantityPill />);

  expect(component).toMatchSnapshot();
});

it('Uses quantity', () => {
  const quantity = 3;

  render(<QuantityPill quantity={quantity} />);

  expect(screen.getByRole('textbox').value).toMatch(`${quantity}`);
});

it('Decrements when pressed', async () => {
  const fn = await getFunctionCallFromButtonClick('Decrement', 3);
  expect(fn).toHaveBeenCalledWith(2);
});

it('Increments when pressed', async () => {
  const fn = await getFunctionCallFromButtonClick('Increment', 3);
  expect(fn).toHaveBeenCalledWith(4);
});

it('Doesn\t decrement below 0', async () => {
  const fn = await getFunctionCallFromButtonClick('Decrement', 0);
  expect(fn).not.toHaveBeenCalledWith(-1);
});

it('Doesn\t go above 3 numbers', async () => {
  const fn = await getFunctionCallFromButtonClick('Increment', 999);
  expect(fn).not.toHaveBeenCalled(1000);
});

it('Doesn\t allow alpha input', async () => {
  const fn = await getFunctionCallFromInput('Hello9', 0);
  expect(fn).toHaveBeenCalledWith(9);
});
