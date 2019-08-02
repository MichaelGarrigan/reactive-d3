
import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react';

import TitleBanner from '../titleBanner/TitleBanner.js';
import WorldClocks from './WorldClocks.js';
import DigitalClock from './DigitalClock/DigitalClock.js';

import './Clocks.css';


function getDimensionObject(node) {
    const rect = node.getBoundingClientRect();

    return {
        width: rect.width,
        height: rect.height,
    };
}

const Clocks = props => {

  const [dimensions, setDimensions] = useState({
    width: 960, height: 500
  });
  const [node, setNode] = useState(null);
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hour: 0,
    amPm: 'am',
    longForm: (new Date()).toLocaleTimeString()
  });

  let timer;

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
    timer = setInterval(() => tick(), 1000);

    return () => { 
      clearInterval(timer); 
      props.setRoute([]); }
  }, [] );

  const tick = () => {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    
    setTime({
      seconds: currentTime.getSeconds(),
      minutes: currentTime.getMinutes(),
      hour: hour > 12 ? hour - 12 : hour,
      amPm: hour > 11 ? 'pm' : 'am',
      longForm: (new Date()).toLocaleTimeString()
    });
  } 
  
  return (
    <div className="clocks-wrapper" ref={wrapRef}>

      <TitleBanner title='Classic World Clocks' />
      <WorldClocks
        dimensions={dimensions}
        time={time}
      />

      <DigitalClock 
        dimensions={dimensions}
        time={time}
      />
        
    </div>
  );
};

export default Clocks;