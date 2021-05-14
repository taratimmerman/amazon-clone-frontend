import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
 
test('renders simple header component', () => {
  const { getByText } = render(<App />);
  const headerMessage = getByText(/Header/i);
  expect(headerMessage).toBeTruthy();
});