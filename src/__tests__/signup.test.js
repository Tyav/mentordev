import React from 'react';
import { render, cleanup, queryByAttribute } from '@testing-library/react';

import Signup from '../pages/Signup';

afterEach(cleanup);

const getById = queryByAttribute.bind(null, 'id');
const getByClass = queryByAttribute.bind(null, 'class');

describe('Sign up Page', () => {
  test('Should check if form logo renders', () => {
    const { getByAltText } = render(<Signup />);
    expect(getByAltText(/logo/i)).toBeTruthy();
    expect(getByAltText(/logo/i)).not.toBeNull();
  });
  test('Should check if signup from renders', () => {
    const { container } = render(<Signup />);
    expect(getById(container, 'loginForm')).toBeTruthy();
    expect(getById(container, 'fullname')).toBeTruthy();
    expect(getById(container, 'email')).toBeTruthy();
    expect(getById(container, 'password')).toBeTruthy();
    expect(getById(container, 'cpassword')).toBeTruthy();
    expect(getById(container, 'ismentor')).toBeTruthy();
  });
  test('Should check if form submit button renders', () => {
    const { container } = render(<Signup />);
    expect(getByClass(container, /register/i)).toBeTruthy();
  });
});
