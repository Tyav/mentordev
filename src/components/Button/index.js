import React from 'react';

import './Button.css';

function Button(props) {
  return (
    <button style = {props.style} className={props.className} onClick={props.onButtonClick}>
      {props.text}
    </button>
  );
}

export default Button;
