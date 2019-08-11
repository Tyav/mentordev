import React from 'react';
import SingleStat from '../SingleStats';

import './ProfStats.css';

function ProfStats() {
  return (
    <div className="profStats">
      <SingleStat statFigure="1000" statName="Request" />
      <SingleStat statFigure="47.5K" statName="Mentees" />
      <SingleStat statFigure="5" statName="Messages" />
    </div>
  );
}

export default ProfStats;
