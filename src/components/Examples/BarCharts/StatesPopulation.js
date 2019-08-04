
import React, { useState } from 'react';

import {axisBottom, axisLeft} from 'd3-axis';
import {scaleLinear, scaleBand} from 'd3-scale';
import {select} from 'd3-selection';

import './BarCharts.css';

const statesData = [
  {name: 'California', value: 39500000},
  {name: 'Texas', value: 28300000},
  {name: 'Flordia', value: 21000000},
  {name: 'New York', value: 19800000},
  {name: 'Pennsylvania', value: 12800000}
];


const StatesPopulation = props => {

  const [data, setData] = useState(statesData);

  const { width } = props.dimensions;
  const svgWidth = Math.round(width * 0.9);
  const svgHeight = Math.round(svgWidth * 0.5);
  const marginWidth = Math.round(svgWidth * 0.06);
  const marginHeight = Math.round(svgHeight * 0.06);

  // scales
  const x = scaleBand()
    .domain(data.map( item => item.name))
    .range([0, svgWidth - (marginWidth * 2)]).padding(0.2);

  const y = scaleLinear()
    .domain([0, 42000000])
    .range([svgHeight - (marginHeight * 2), 0]);


  return (
    <div className="states-wrapper">
        
      <svg 
        className="states-svg" 
        width={svgWidth} 
        height={svgHeight}
      >
        <g transform={`translate(${marginWidth},${marginHeight})`}>
          <rect
            className="states-chart"
            height={svgHeight - (marginHeight * 2)}
            width={svgWidth - (marginWidth * 2)}
          />
          <g
            className="states-axis"
            transform={`translate(0,${svgHeight - (marginHeight * 2)})`} 
            ref={node => select(node).call(axisBottom(x))}
          />
          <g 
            className="states-axis"
            ref={node => select(node).call(axisLeft(y).ticks(8, 's'))} 
          />  
          {
            data.map( d => {
              return (
                <rect 
                  key={d.name}
                  className='states-bar'
                  x={x(d.name)}
                  y={y(d.value)}
                  width={x.bandwidth()}
                  height={svgHeight - (marginHeight * 2) - y(d.value)}
                />
              );
            })
          }
        </g>
      </svg>
    </div>
  );
};

export default StatesPopulation;