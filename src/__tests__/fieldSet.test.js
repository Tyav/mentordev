import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';

import FieldSet from '../components/FieldSet';

// Testing with regular react API and DOM api
describe('Test FieldSet component in isolation', () => {
  test('Fieldset should render text and legend tags', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<FieldSet text="Hello Legend" />, div);
    const fieldSet = document.querySelector('fieldset');
    const legend = document.querySelector('legend');

    expect(fieldSet.innerHTML).toMatch(/<legend>/);
    expect(legend.textContent).toMatch(/Hello Legend/);
  });
  test('Fieldset should render children passed down into it', () => {
    const div = document.createElement('div');
    document.body.appendChild(div); 
    ReactDOM.render(<FieldSet children={<button>Hello</button>} />, div);
    const button = document.querySelector('button');
    expect(button.innerHTML).toMatch(/Hello/);
  });
});
