import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders enter link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/enter/i);
  expect(linkElement).toBeInTheDocument();
});
