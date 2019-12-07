import React from 'react';

import './SelectField.css';

function SelectField(props) {
  return (
    <div id="selectField" className={props.style}>
      <label htmlFor={props.id}>
        <i className={`mdi mdi-${props.icon}`}></i>
        {props.label}
      </label>
      <select
        className="day-select"
        onChange={props.change}
        value={props.value}
        name="day"
        disabled={props.disabled}
      >
        {props.day.map(day => {
          return (
            <option value={day.day || day} key={day.day || day}>
              {day.day || day}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectField;
