import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { expect, it } from 'vitest';
import Header from './Header';

it('Matches screenshot', () => {
  const { container } = render(
    <MemoryRouter>
      <Header cart={new Map()} />
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});

it('Correctly navigates to home', async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={['/cart']}>
      <Header cart={new Map()} />
    </MemoryRouter>,
  );
  await user.click(screen.getByText('Home'));

  const activeLinks = screen.getAllByRole('link', { current: 'page' });
  expect(activeLinks[0].textContent).toMatch('Poké Mart');
  expect(activeLinks[1].textContent).toMatch('Home');
});

it('Correctly navigates to all products', async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={['/']}>
      <Header cart={new Map()} />
    </MemoryRouter>,
  );
  await user.click(screen.getByText('All Products'));

  const activeLink = screen.getByRole('link', { current: 'page' });
  expect(activeLink.textContent).toMatch('All Products');
});

it('Correctly navigates cart', async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={['/']}>
      <Header cart={new Map()} />
    </MemoryRouter>,
  );
  await user.click(screen.getByText(/Cart/));

  const activeLink = screen.getByRole('link', { current: 'page' });
  expect(activeLink.textContent).toMatch(/Cart/);
});
