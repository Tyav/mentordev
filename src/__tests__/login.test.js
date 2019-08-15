import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import Login from '../pages/Login';

afterEach(cleanup);

describe('Login Page', () => {
  test('Should check if form logo renders', () => {
    const { getAllByAltText } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(getAllByAltText(/logo/i)).toBeTruthy();
    expect(getAllByAltText(/logo/i)).not.toBeNull();
  });

  test('Should check if login component renders', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(getByText(/email/i)).toBeTruthy();
  });

  test('Should check if form inputs renders', () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(getByLabelText(/email/i)).not.toBeNull();
    expect(getByLabelText(/password/i)).not.toBeNull();
  });
  test('Should check if form button renders', () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(getAllByText(/Login/)).toBeTruthy();
  });
});
