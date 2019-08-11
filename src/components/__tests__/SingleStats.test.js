import React from 'react';
import { render } from '@testing-library/react';
import SingleStats from '../SingleStats';

describe('SingleStats', () => {
  it('should return the stat of the mentee', () => {
    //set up props
    const props = {
      statFigure: '2000',
      statName: 'Approved'
    };
    
    //destructure with getByText
   const {getByText}= render(<SingleStats {...props} />)
    
   //Assert
   const statFigureNode = getByText(props.statFigure);
   const statNameNode = getByText(props.statName);

   expect(statFigureNode).toBeDefined();
   expect(statNameNode).toBeDefined();
   
  });
});
