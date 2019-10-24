
import React, { useState, useLayoutEffect } from 'react';

import TitleBanner from '../titleBanner/TitleBanner.js';
import Clocks from './Clocks.js';

import './Clocks.css';

export default props => {

  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hour: 0,
    amPm: 'am'
  });

  // Initialize and remove the timer
  useLayoutEffect( () => {
    let timer = setInterval(() => tick(), 1000);

    return () => clearInterval(timer); 
     
  }, [] );

  // Update state every 1 second
  const tick = () => {
    let currentTime = new Date();
    let hour = currentTime.getHours();

    setTime({
      seconds: currentTime.getSeconds(),
      minutes: currentTime.getMinutes(),
      hour: hour > 12 ? hour - 12 : hour,
      amPm: hour > 11 ? 'pm' : 'am'
    });
  } 
  
  return (
    <div className="clocks-wrapper">

      <TitleBanner title='Classic World Clocks' />

      <Clocks
        dimensions={props.dimensions}
        time={time}
      />
        
    </div>
  );
};