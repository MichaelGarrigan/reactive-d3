
const code1 = `
import React, { useState, useLayoutEffect } from 'react';

import TitleBanner from '../../titleBanner/TitleBanner.js';
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
          city={{name: 'New York', timeDiff: 0}}
        />
        <Clock
          dimensions={props.dimensions}
          time={time}
          city={{name: 'London', timeDiff: 5}}
        />
      </div>

      <div className="clocks-row">
        <Clock
          dimensions={props.dimensions}
          time={time}
          city={{name: 'Moscow', timeDiff: 7}}
        />
        <Clock
          dimensions={props.dimensions}
          time={time}
          city={{name: 'Tokyo', timeDiff: 13}}
        />
      </div>

    </div>
  );
};
`;

const tab1 = {
  name: 'Clocks.js',
  code: code1
};

const code2 = `
import React from 'react';

import { scaleLinear } from 'd3-scale';
import { arc } from 'd3-shape';

import './Clocks.css';


export default ({time, dimensions, city}) => {
  
  const width = Math.round(dimensions.width * 0.95);
  const svgWidth = Math.round(width * 0.33);

  const twoPI = Math.PI * 2;

  let scaleSec = scaleLinear()
    .domain([0, 59 + 999/1000])
    .range([0, twoPI]);

  let scaleMin = scaleLinear()
    .domain([0, 59 + 59/60])
    .range([0, twoPI]);

  let scaleHour = scaleLinear()
    .domain([0, 11 + 59/60])
    .range([0, twoPI]);

  let arcSec = arc()
    .innerRadius(0).outerRadius(svgWidth * 0.41)
    .startAngle( seconds => scaleSec(seconds))
    .endAngle( seconds => scaleSec(seconds));
  
  let arcMin = arc()
    .innerRadius(0)
    .outerRadius(svgWidth * 0.35)
    .startAngle( minutes => scaleMin(minutes))
    .endAngle( minutes => scaleMin(minutes));

  let arcHour = arc()
    .innerRadius(0)
    .outerRadius(svgWidth * 0.26)
    .startAngle( hour => scaleHour(hour % 12))
    .endAngle( hour => scaleHour(hour % 12));

  let arcFace = arc()
    .innerRadius(0).outerRadius(svgWidth * 0.48)
    .startAngle(0).endAngle(twoPI);

  let arcRing = arc()
    .innerRadius(svgWidth * 0.48).outerRadius(svgWidth * 0.5)
    .startAngle(0).endAngle(twoPI);

  let arcRingSm = arc()
    .innerRadius(svgWidth * 0.42).outerRadius(svgWidth * 0.43)
    .startAngle(0).endAngle(twoPI);
    
  return (
    <div className="city-wrapper">
      <p className="cityName-p">{city.name}</p>
      <svg 
        className="svg-city-clock"
        height={svgWidth}
        width={svgWidth}
      >
                
        <g transform={"translate(" + svgWidth/2 + ", " + svgWidth/2 + ")"}>
          <path d={arcFace()} fill="#f0ecec" />
          <path d={arcRing()} fill="#272727" />
          <path d={arcRingSm()} fill="#333" />

          <text 
            x={0} 
            y={-(svgWidth * 0.34)} 
            style={{
              textAnchor: "middle",
              fontSize: "2vw"
              }}
          >12</text>

          <text 
            x={svgWidth * 0.38} 
            y={6} 
            style={{
              textAnchor: "middle",
              fontSize: "2vw"
              }}
          >3</text>

          <text 
            x={0} 
            y={svgWidth * 0.41} 
            style={{
              textAnchor: "middle",
              fontSize: "2vw"
              }}
          >6</text>

          <text 
            x={-(svgWidth * 0.38)} 
            y={6} 
            style={{
              textAnchor: "middle",
              fontSize: "2vw"
              }}
          >9</text>
                      
                  
          <path
            d={arcSec(time.seconds)}
            style={{stroke: "red", strokeWidth: 2}}
          />
          <path
            d={arcMin(time.minutes)}
            style={{stroke: "#272727", strokeWidth: 4}}
          />
          <path
            d={arcHour(time.hour + city.timeDiff)}
            style={{stroke: "#272727", strokeWidth: 7}}
          />
        </g>
      </svg>
    </div>
  );
};
`;

const tab2 = {
  name: 'Clock.js',
  code: code2
};

const code3 = `
.clocks-wrapper {
  width: 95vw;
}

.clocks-row {
  display: flex;
  justify-content: space-evenly;
  margin: 4vw 0;
}

.cityName-p {
  color: var(--grayDark);
  font-size: 4vw;
  padding: 2vw 0;
  text-align: center;
}
`;

const tab3 = {
  name: 'Clocks.css',
  code: code3
};

const tabs = [tab1, tab2, tab3];

export default tabs;