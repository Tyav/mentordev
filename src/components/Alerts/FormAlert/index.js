import React from 'react';

import './FormAlert.css';

function FormAlert(props) {
  return <span className={props.type}>{props.children}</span>;
}

export default FormAlert;
