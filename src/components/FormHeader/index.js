import React from 'react';

import './FormHeader.css';

function FormHeader(props) {
  return (
    <div className="formHeader">
      <h2>{props.title}</h2>
    </div>
  );
}

export default FormHeader;
