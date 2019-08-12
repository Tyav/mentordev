import React from 'react';
import './ProfBio.css';

function ProfBio(props) {
  return <p className="profBio">{props.children}</p>;
}

export default ProfBio;
