import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, cleanup, queryByAttribute } from '@testing-library/react';

import ForgotPassword from '../pages/ForgotPassword';

const getById = queryByAttribute.bind(null, 'id');

describe('Forgot Password', () => {
  test('Should check if form renders', () => {
    const { container } = render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    );
    expect(getById(container, 'loginForm')).not.toBeNull();
    expect(getById(container, 'loginForm')).toBeTruthy();
  });
  test('Should check if form input renders', () => {
    const { getByLabelText, container } = render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    );
    expect(getByLabelText(/email/i)).toBeTruthy();
    expect(getById(container, 'email')).not.toBeNull();
  });
  test('Should check if submit button renders', () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    );
    expect(getAllByText(/send password reset email/i)).toBeTruthy();
  });
});
