import React from 'react';

function SingleStats(props) {
  return (
    <p>
      {props.statFigure} <span>{props.statName}</span>
    </p>
  );
}

export default SingleStats;
