
import React, { useState, useLayoutEffect } from 'react';

import TitleBanner from '../titleBanner/TitleBanner.js';
import Clocks from './Clocks.js';

import useElementSize from '../../../useElementSize.js';

import './Clocks.css';

export default props => {

  const [sizeRef, dimensions] = useElementSize();

  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hour: 0,
    amPm: 'am'
  });

  let timer;

  // Initialize and remove the timer
  useLayoutEffect( () => {
    timer = setInterval(() => tick(), 1000);

    return () => { 
      clearInterval(timer); 
      props.setRoute([]); }
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
    <div className="clocks-wrapper" ref={sizeRef}>

      <TitleBanner title='Classic World Clocks' />

      <Clocks
        dimensions={dimensions}
        time={time}
      />
        
    </div>
  );
};