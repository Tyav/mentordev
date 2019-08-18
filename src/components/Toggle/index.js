import React from 'react';
import './style.css';

const Toggle = ({ handleClick }) => {
  return (
    <>
      <input type="checkbox" id="toggle" class="offscreen" onClick={handleClick} />
      <label for="toggle" class="switch" />
    </>
  );
};

export default Toggle;
