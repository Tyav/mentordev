import React from 'react';

import './InputField.css';

function InputField(props) {
  return (
    <div id="inputField" className={props.style}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}

export default InputField;
