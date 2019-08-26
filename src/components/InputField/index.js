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
        value={props.value || ''}
        onChange={props.change}
        onBlur={props.onBlur}
        disabled={props.disabled}
        style={props.disabled ? {} : { borderBottom: '1px solid #a7a7a7' }}
        onFocus={props.onFocus}
        autoComplete={props.label}
      />
    </div>
  );
}

export default InputField;
