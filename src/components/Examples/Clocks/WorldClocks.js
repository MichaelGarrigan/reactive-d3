import React from 'react';

import {scaleLinear} from 'd3-scale';
import {arc} from 'd3-shape';

import './Clocks.css';

const cities = [
  {name: 'New York', timeDiff: 0},
  {name: 'London', timeDiff: 3},
  {name: 'Moscow', timeDiff: 6},
  {name: 'Tokyo', timeDiff: 9}
];

const WorldClocks = props => {
  const time = props.time;
  const { width } = props.dimensions;
  const width90 = width * 0.9;
  const svgWidth = width90 * 0.23;

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
    .startAngle( d => scaleSec(d.seconds))
    .endAngle( d => scaleSec(d.seconds));
  
  let arcMin = arc()
    .innerRadius(0)
    .outerRadius(svgWidth * 0.38)
    .startAngle( d => scaleMin(d.minutes))
    .endAngle( d => scaleMin(d.minutes));

  let arcHour = arc()
    .innerRadius(0)
    .outerRadius(svgWidth * 0.3)
    .startAngle( d => scaleHour(d.hour % 12))
    .endAngle( d => scaleHour(d.hour % 12));

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
    <div className="worldClock-wrapper">
      <div className="citiesClock-wrapper" style={{width: width90}}>
      {
        cities.map( (city, idx) => {
          return (
            <svg 
              key={idx}
              className="svg-worldClock"
              height={svgWidth}
              width={svgWidth}
            >
              
              <g transform={`translate(${svgWidth/2}, ${svgWidth/2})`}>
                <path d={arcFace()} fill="white" />
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
                  y={4} 
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
                  y={4} 
                  style={{
                    textAnchor: "middle",
                    fontSize: "2vw"
                    }}
                >9</text>
                    
                
                <path
                  d={arcSec(time)}
                  style={{stroke: "red", strokeWidth: 2}}
                />
                <path
                  d={arcMin(time)}
                  style={{stroke: "#272727", strokeWidth: 4}}
                />
                <path
                  d={arcHour(time)}
                  style={{stroke: "#272727", strokeWidth: 7}}
                />
              </g>
            </svg>
          )
        })
      }
      </div>
    </div>
  )
}

export default WorldClocks;