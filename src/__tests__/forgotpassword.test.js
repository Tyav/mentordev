import React from 'react';

import { render, cleanup, queryByAttribute } from '@testing-library/react';

import ForgotPassword from '../pages/ForgotPassword';

const getById = queryByAttribute.bind(null, 'id');

describe('Forgot Password', () => {
  test('Should check if form renders', () => {
    const { container } = render(<ForgotPassword />);
    expect(getById(container, 'loginForm')).not.toBeNull();
    expect(getById(container, 'loginForm')).toBeTruthy();
  });
  test('Should check if form input renders', () => {
    const { getByLabelText, container } = render(<ForgotPassword />);
    expect(getByLabelText(/email/i)).toBeTruthy();
    expect(getById(container, 'email')).not.toBeNull();
  });
  test('Should check if submit button renders', () => {
    const { getAllByText } = render(<ForgotPassword />);
    expect(getAllByText(/send password reset email/i)).toBeTruthy();
  });
});
