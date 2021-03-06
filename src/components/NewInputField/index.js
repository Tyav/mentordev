import React from 'react';

/* Styling */
import './NewInputField.css';

function NewInputField({
  inputType,
  changeHandler,
  inputId,
  inputValue,
  inputPlaceholder,
  inputLable,
  isEnabled,
  style,
  inputClick,
}) {
  return (
    <>
      <div className="user-new-input">
        <label htmlFor={inputId}>{inputLable}</label>
        <input
          type={inputType}
          onChange={changeHandler}
          id={inputId}
          name={inputId}
          value={inputValue}
          placeholder={inputPlaceholder}
          disabled={isEnabled}
          style={style}
          onClick={inputClick}
        />
      </div>
    </>
  );
}

export default NewInputField;
