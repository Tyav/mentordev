import React from 'react';
import { render, cleanup, queryByAttribute } from '@testing-library/react';
import Card from '../components/Card/index';

afterEach(cleanup);

describe('<Card />', () => {
  it('handles test for the the Card component', () => {
    //set up props
    const props = {
      children: `test string for props`
    };

    //destructure with getByText
    const { getByText } = render(<Card {...props} />);

    //Assert
    const propsChildrenNode = getByText(props.children);

    expect(propsChildrenNode).toBeDefined();
  }); 
});
