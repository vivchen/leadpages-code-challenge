import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

test('renders header text', () => {
  render(<App />);

  const heading  = screen.getByRole('heading', { name: /toast exercise/i});
  expect(heading).toBeInTheDocument();
});

test('clicking button shows toast notification', async () => {
  render(<App />);

  const button  = screen.getByText('New Submission');

  expect(button).toBeInTheDocument();
  userEvent.click(button);

  await waitFor( () => {
    expect(screen.getByTestId('toast-notif')).toBeInTheDocument();
  });
  
});