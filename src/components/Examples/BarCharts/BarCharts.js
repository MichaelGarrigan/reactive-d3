
import React from 'react';

import TitleBanner from '../titleBanner/TitleBanner.js';
import FrequencyOfLetters from './FrequencyOfLetters.js';
import StatesPopulation from './StatesPopulation.js';

import './BarCharts.css';


export default props => {
  
  return (
    <div className="barCharts-wrapper"> 

      <TitleBanner title='Frequency of Letters' />

      <FrequencyOfLetters dimensions={props.dimensions} />

      <TitleBanner title='US State Populations' />

      <StatesPopulation dimensions={props.dimensions} />
        
    </div>
  );
};