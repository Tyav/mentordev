import React from 'react';

function Fieldset(props) {
  const { text, children, style } = props;
  return (
    <fieldset className={style}>
      <legend>{text}:</legend>
      {children}
    </fieldset>
  );
}

export default Fieldset;
