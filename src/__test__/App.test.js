import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Cool Shopping title', () => {
  render(<App />);
  const webTitle = screen.getByText(/Cool Shopping/i);
  expect(webTitle).toBeInTheDocument();
});
