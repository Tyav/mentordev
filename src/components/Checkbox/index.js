import React from 'react';

import './Checkbox.css';

function CheckBox(props) {
  return (
    <div id="checkboxField">
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default CheckBox;
