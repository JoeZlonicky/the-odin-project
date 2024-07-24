import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { expect, it } from 'vitest';
import ContinueShopping from './ContinueShopping';

it('Matches screenshot', () => {
  const { container } = render(
    <MemoryRouter>
      <ContinueShopping />
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});

it('Correctly navigates to all products', async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<ContinueShopping />} />
        <Route path="/all-products" element={<h1>All Products</h1>} />
      </Routes>
    </MemoryRouter>,
  );
  await user.click(screen.getByText('Continue Shopping'));

  const header = screen.getByRole('heading', { level: 1 });
  expect(header.textContent).toMatch('All Products');
});
