import React from 'react';

import './FormHeader.css';

function FormHeader(props) {
  return (
    <div className="formHeader">
      <img src="/assets/img/logo.png" alt="logo" />
      <h1>{props.title}</h1>
    </div>
  );
}

export default FormHeader;
