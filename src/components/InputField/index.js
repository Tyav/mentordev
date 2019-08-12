import React from 'react';

import './InputField.css';

function InputField(props) {
  return (
    <div id="inputField">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        name={props.id}
        placeholder={props.placeholder}
        onChange={props.change}
        value={props.value}
      />
    </div>
  );
}

export default InputField;
