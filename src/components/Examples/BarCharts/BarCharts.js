
import React, { useEffect } from 'react';

import TitleBanner from '../titleBanner/TitleBanner.js';
import FrequencyOfLetters from './FrequencyOfLetters.js';
import StatesPopulation from './StatesPopulation.js';

import useElementSize from '../../../useElementSize.js';

import './BarCharts.css';


export default props => {

  const [sizeRef, dimensions] = useElementSize();

  useEffect( () => {
    return () => props.setRoute([]);
  }, []);
  
  return (
    <div className="barCharts-wrapper" ref={sizeRef}> 

      <TitleBanner title='Frequency of Letters' />

      <FrequencyOfLetters dimensions={dimensions} />

      <TitleBanner title='US State Populations' />

      <StatesPopulation dimensions={dimensions} />
        
    </div>
  );
};