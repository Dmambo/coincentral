import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar/Navbar';

test('renders Navbar component', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(screen.getByText('COIN-CENTRAL')).toBeInTheDocument();
});
