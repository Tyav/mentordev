import React from 'react';

import './InputField.css';

function InputField(props) {
  return (
    <div id="inputField" className={props.style}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        name={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.change}
        onBlur={props.onBlur}
        disabled={props.disabled}
        style={props.disabled ? {} : { borderBottom: '2px solid rgb(85, 85, 85)' }}
      />
    </div>
  );
}

export default InputField;
