import React from 'react';

function Card(props) {
  return (
    <div className={`card`} style={props.styles}>
      {props.children}
    </div>
  );
}

export default Card;
