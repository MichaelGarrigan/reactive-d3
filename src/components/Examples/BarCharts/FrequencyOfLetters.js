
import React, { useState } from 'react';

import {axisBottom, axisLeft} from 'd3-axis';
import {scaleLinear, scaleBand} from 'd3-scale';
import {select} from 'd3-selection';

import './BarCharts.css';

const letterData = [
  ["A", .08167], ["B", .01492], ["C", .02780], ["D", .04253], ["E", .12702], ["F", .02288], ["G", .02022], ["H", .06094], ["I", .06973], ["J", .00153], ["K", .00747], ["L", .04025], ["M", .02517], ["N", .06749], ["O", .07507], ["P", .01929], ["Q", .00098], ["R", .05987], ["S", .06333], ["T", .09056], ["U", .02758], ["V", .01037], ["W", .02465], ["X", .00150], ["Y", .01971], ["Z", .00074]
];


const FrequencyOfLetters = props => {

  const [data, setData] = useState(letterData);

  const { width } = props.dimensions;
  const svgWidth = Math.round(width * 0.9);
  const svgHeight = Math.round(svgWidth * 0.5);
  const marginWidth = Math.round(svgWidth * 0.06);
  const marginHeight = Math.round(svgHeight * 0.06);

  // scales
  const x = scaleBand()
    .domain(data.map( d => d[0] ))
    .rangeRound([0, svgWidth - (marginWidth * 2)]).padding(0.1);

  const y = scaleLinear()
    .domain([0, 0.14])
    .rangeRound([svgHeight - (marginHeight * 2), 0]);


  return (
    <div className="frequency-wrapper">
        
      <svg 
        className="freq-svg" 
        width={svgWidth} 
        height={svgHeight}
      >
        <g transform={`translate(${marginWidth},${marginHeight})`}>
          <rect
            className="freq-chart"
            height={svgHeight - (marginHeight * 2)}
            width={svgWidth - (marginWidth * 2)}
          />
          <g
            className="freq-axis"
            transform={`translate(0,${svgHeight - (marginHeight * 2)})`} 
            ref={node => select(node).call(axisBottom(x))}
          />
          <g 
            className="freq-axis"
            ref={node => select(node).call(axisLeft(y).ticks(8, '%'))} 
          />  
          {
            data.map( d => {
              return (
                <rect 
                  key={`${d[0]}-${d[1]}`}
                  className='freq-bar'
                  x={x(d[0])}
                  y={y(d[1])}
                  width={x.bandwidth()}
                  height={svgHeight - (marginHeight * 2) - y(d[1])}
                />
              );
            })
          }
        </g>
      </svg>
    </div>
  );
};

export default FrequencyOfLetters;