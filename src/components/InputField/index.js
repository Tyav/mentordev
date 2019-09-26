import React from 'react';

import './InputField.css';

function InputField(props) {
  return (
    <div id="inputField" className={props.style}>
      <label htmlFor={props.id}>
        <i className={`mdi mdi-${props.icon}`}></i>
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        name={props.id}
        placeholder={props.placeholder}
        value={props.value || ''}
        onChange={props.change}
        onBlur={props.onBlur}
        disabled={props.disabled}
        style={props.disabled ? {} : {}}
        onFocus={props.onFocus}
        autoComplete={props.label}
        min={props.min}
        required={props.required}
        onClick={props.click}
      />
    </div>
  );
}

export default InputField;
