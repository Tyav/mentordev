import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Login from '../pages/Login';

afterEach(cleanup);

describe('Login Page', () => {
  test('Should check if form logo renders', () => {
    const { getByAltText } = render(<Login />);
    expect(getByAltText(/logo/i)).toBeTruthy();
    expect(getByAltText(/logo/i)).not.toBeNull();
  });

  test('Should check if login component renders', () => {
    const { getByText } = render(<Login />);
    expect(getByText(/email/i)).toBeTruthy();
  });

  test('Should check if form inputs renders', () => {
    const { getByLabelText } = render(<Login />);
    expect(getByLabelText(/email/i)).not.toBeNull();
    expect(getByLabelText(/password/i)).not.toBeNull();
  });
  test('Should check if form button renders', () => {
    const { getAllByText } = render(<Login />);

    expect(getAllByText(/Login/)).toBeTruthy();
  });
});
