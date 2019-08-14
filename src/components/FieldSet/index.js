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

export function FieldsetSpan(props) {
  const { text, style } = props;
  return <span className={style}>{text}</span>;
}

export default Fieldset;
