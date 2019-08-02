import React from 'react';

import Digit from './Digit.js';

import './DigitalClock.css';

const DigitalClock = props => {
  const time = props.time;
  const { width } = props.dimensions;
  const width50 = width * 0.5;

  return (
    <div 
      className="digital-clock-wrapper"
      style={{width: `'${width / 2}'`, height: `'${width / 4}'`}}
    >
     
        <Digit 
          number={time.hour} 
          width={width}
        />

        <Digit 
          number={time.minutes} 
          width={width}
        />

        <Digit 
          number={time.seconds} 
          width={width}
        />
  
    </div>
  )
}

export default DigitalClock;