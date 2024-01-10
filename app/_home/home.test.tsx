import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Home from './page';

test('Page', () => {
  render(<Home />);
  expect(screen.getByTestId('home-page')).toBeDefined();
  expect(screen.getByText('This is the home page')).toBeDefined();
});
