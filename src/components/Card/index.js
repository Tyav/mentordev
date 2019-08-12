import React from 'react';

function Card(props) {
  return <div style={props.style} className="card">{props.children}</div>;
}

export default Card;
