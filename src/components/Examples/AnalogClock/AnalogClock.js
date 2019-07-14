import React, { useState, useLayoutEffect } from 'react';
import {scaleLinear} from 'd3-scale';
import {select} from 'd3-selection';
import {arc} from 'd3-shape';
import TitleBanner from '../titleBanner/TitleBanner.js';
import './AnalogClock.css';

const AnalogClock = props => {

  const [dimensions, setDimensions] = useState({
    height: 400,
    width: 400,
    margin: 100
  });

  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hour: 0,
    longForm: (new Date()).toLocaleTimeString()
  });

  let timer;

  useLayoutEffect( () => { timer = setInterval(() => tick(), 1000) }, [] );

  useLayoutEffect( () => {
    return () => { clearInterval(timer); props.setRoute([]); }
  }, [] );

  const tick = () => {
    let currentTime = new Date();
    setTime({
      seconds: currentTime.getSeconds(),
      minutes: currentTime.getMinutes(),
      hour: currentTime.getHours() + currentTime.getMinutes() / 60,
      longForm: (new Date()).toLocaleTimeString()
    });
  } 

  let pi = Math.PI;
  let scaleSec = scaleLinear().domain([0, 59 + 999/1000]).range([0, 2 * pi]);
  let scaleMin = scaleLinear().domain([0, 59 + 59/60]).range([0, 2 * pi]);
  let scaleHour = scaleLinear().domain([0, 11 + 59/60]).range([0, 2 * pi]);

  let arcSec = arc()
    .innerRadius(0)
    .outerRadius(((dimensions.width - dimensions.margin) / 2) - 10)
    .startAngle( d => scaleSec(d.seconds))
    .endAngle( d => scaleSec(d.seconds));
  
  let arcMin = arc()
    .innerRadius(0)
    .outerRadius(((dimensions.width - dimensions.margin) / 2) - 20)
    .startAngle( d => scaleMin(d.minutes))
    .endAngle( d => scaleMin(d.minutes));

  let arcHour = arc()
    .innerRadius(0)
    .outerRadius(((dimensions.width - dimensions.margin) / 2) - 30)
    .startAngle( d => scaleHour(d.hour % 12))
    .endAngle( d => scaleHour(d.hour % 12));

  return (
    <div className="analog-clock-wrapper">
      <TitleBanner title='Analog Clock' />
      <svg 
        className="svg-analog-clock"
        height={dimensions.height}
        width={dimensions.width}
      >
        <g 
          transform={`translate(${dimensions.width/2}, ${dimensions.height/2})`}>
          <circle
            className="analog-clock-large-circle"
            r={(dimensions.width - dimensions.margin) / 2}
          />
          <circle
            className="analog-clock-small-circle"
            r={5}
          />
          <path
            className="analog-clock-second-hand"
            d={arcSec(time)}
          />
          <path
            className="analog-clock-minute-hand"
            d={arcMin(time)}
          />
          <path
            className="analog-clock-hour-hand"
            d={arcHour(time)}
          />
        </g>
      </svg>
      <div>{time.longForm}</div>
    </div>
  )
}

export default AnalogClock;