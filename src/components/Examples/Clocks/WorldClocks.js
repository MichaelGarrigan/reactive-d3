import React from 'react';

import {scaleLinear} from 'd3-scale';
import {arc} from 'd3-shape';

import './Clocks.css';

const cities = [
  {name: 'New York', timeDiff: 0},
  {name: 'London', timeDiff: 5},
  {name: 'Moscow', timeDiff: 7},
  {name: 'Tokyo', timeDiff: 13}
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
    <div className="worldClock-wrapper">
      <div className="citiesClock-wrapper" style={{width: width90}}>
      {
        cities.map( (city, idx) => {
          return (
            <div className="city-wrapper" key={idx}>
              <svg 
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
              <p className="cityName-p">{city.name}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default WorldClocks;