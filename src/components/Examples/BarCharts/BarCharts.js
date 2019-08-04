
import React, { useState, useCallback, useLayoutEffect, useEffect } from 'react';

import TitleBanner from '../titleBanner/TitleBanner.js';
import FrequencyOfLetters from './FrequencyOfLetters.js';
import StatesPopulation from './StatesPopulation.js';

import './BarCharts.css';


function getDimensionObject(node) {
    const rect = node.getBoundingClientRect();

    return {
        width: rect.width,
        height: rect.height,
    };
}

const BarCharts = props => {
  
  const [dimensions, setDimensions] = useState({
    width: 960, height: 500
  });
  const [node, setNode] = useState(null);

  const wrapRef = useCallback(node => {
      setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () => {
        window.requestAnimationFrame(() => {
          let {width, height} = getDimensionObject(node);
          setDimensions({ 
            width: Math.round(width), 
            height: Math.round(height) 
          });
        });
      };
      
      measure();
      window.addEventListener("resize", measure);

      return () => { 
        window.removeEventListener("resize", measure);
      };
    }
  }, [node]);

  useLayoutEffect( () => {

    return () => { 
      props.setRoute([]); }
  }, [] );

  
  return (
    <div className="barCharts-wrapper" ref={wrapRef}> 

      <TitleBanner title='Frequency of Letters' />

      <FrequencyOfLetters dimensions={dimensions} />

      <TitleBanner title='US State Populations' />

      <StatesPopulation dimensions={dimensions} />
        
    </div>
  );
};

export default BarCharts;