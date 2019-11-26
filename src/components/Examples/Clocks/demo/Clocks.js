
import React, { useState, useLayoutEffect } from 'react';

import Clock from './Clock.js';

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

      <div className="clocks-row">
        <Clock
          dimensions={props.dimensions}
          time={time}
          city={{name: 'New York', timeDiff: 0, class: 'nyc'}}
        />
        <Clock
          dimensions={props.dimensions}
          time={time}
          city={{name: 'London', timeDiff: 5, class: 'london'}}
        />
      </div>

      <div className="clocks-row">
        <Clock
          dimensions={props.dimensions}
          time={time}
          city={{name: 'Moscow', timeDiff: 7, class: 'moscow'}}
        />
        <Clock
          dimensions={props.dimensions}
          time={time}
          city={{name: 'Tokyo', timeDiff: 13, class: 'tokyo'}}
        />
      </div>

    </div>
  );
};