import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProfStats from '../SingleStats';
import { exportAllDeclaration } from '@babel/types';

afterEach(cleanup);

describe('Profile Stats', () => {
    it('should render the Profile Status', () => {
        const {container, getAllByText}  = render( <ProfStats />);
    })
})