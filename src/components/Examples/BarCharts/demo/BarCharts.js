
import React from 'react';

import FrequencyOfLetters from './FrequencyOfLetters.js';
import StatesPopulation from './StatesPopulation.js';

import './BarCharts.css';


export default props => {
  
  return (
    <div className="barCharts-wrapper">
      <FrequencyOfLetters dimensions={props.dimensions} />

      <StatesPopulation dimensions={props.dimensions} />
    </div>
  );
};