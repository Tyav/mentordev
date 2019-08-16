import React from 'react';
import { render, cleanup, queryByAttribute } from '@testing-library/react';
import { toHaveClass, toBeInTheDOM } from '@testing-library/jest-dom';
import ProfStats from '../components/ProfStats';
import SingleStats from '../components/SingleStats';

afterEach(cleanup);

const getByClass = queryByAttribute.bind(null, 'class');

describe('Profile Stats', () => {
  it('should render the Profile Status', () => {
    const { container } = render(<ProfStats />);
    expect(getByClass(container, /profStats/i)).toBeTruthy();
  });
});
