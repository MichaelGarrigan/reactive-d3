
import React, { useState, useRef } from 'react';

import {axisTop, axisLeft} from 'd3-axis';
import { geoAlbers, geoPath } from 'd3-geo';
import {scaleLinear, scaleBand} from 'd3-scale';
import {select} from 'd3-selection';

import ca from './california.json';
import tx from './texas.json';
import fl from './flordia.json';
import ny from './newyork.json';
import pa from './pennsylvania.json';

import './BarCharts.css';

const geoStates = [
  {data: ca, angle: 12},
  {data: tx, angle: 4},
  {data: fl, angle: -5},
  {data: ny, angle: -10},
  {data: pa, angle: -10}
];

const statesData = [
  {name: 'California', value: 39500000, displayValue: '39.5 M'},
  {name: 'Texas', value: 28300000, displayValue: '28.3 M'},
  {name: 'Flordia', value: 21000000, displayValue: '21.0 M'},
  {name: 'New York', value: 19800000, displayValue: '19.8 M'},
  {name: 'Pennsylvania', value: 12800000, displayValue: '12.8 M'}
];


export default props => {

  const [data, setData] = useState(statesData);
  const [stateHovered, setStateHovered] = useState('');

  const tooltipRef = useRef(null);

  const { width } = props.dimensions;
  const svgWidth = Math.round(width * 0.8);
  const svgHeight = svgWidth;
  const margin = Math.round(svgWidth * 0.1);


  // scales
  const x = scaleLinear()
    .domain([0, 42000000])
    .range([0, svgWidth - (margin * 2.5)]);

  const y = scaleBand()
    .domain(data.map( item => item.name))
    .range([0, svgHeight - (margin * 2)]).padding(0.2);

  // svg states outlines
  const generateStateOutline = item => {
    
    let proj = geoAlbers()
      .angle(item.angle)
      .fitSize([y.bandwidth(), y.bandwidth()], item.data);
      
    let path = geoPath(proj);

    let stateData = item.data.features;

    return path(stateData[0]);
  }
  

  return (
    <div className="states-wrapper">

      <h2 className="states-title">
        Top 5 US States by Population
      </h2>
        
      <svg 
        className="states-svg" 
        width={svgWidth} 
        height={svgHeight}
      >

        <g transform={`translate(${margin * 0.4},${margin})`}>
          { 
            geoStates.map( (item, idx) => (
              <g 
                key={idx}
                transform={
                  `translate(0,${((svgWidth * 0.03) * (idx + 1)) + ((y.bandwidth()) * idx)})`
                }
              >
                <path
                  d={generateStateOutline(item)}
                  fill="#F37553aa"
                  stroke="white"
                  strokeWidth={svgWidth * 0.002}
                />
              </g>
            ))
          }
        </g>

        <g transform={`translate(${margin},${margin})`}>
          
          <g
            className="states-axis"
            transform={`translate(${margin}, -10)`} 
            ref={node => select(node).call(axisTop(x).ticks(8, 's'))}
          />
          
          {
            data.map( d => {
              return (
                <g key={d.name}>
                  <rect 
                    className="states-bar"
                    x={margin}
                    y={y(d.name)}
                    width={x(d.value)}
                    height={y.bandwidth()}
                  />
                  <text
                    className="states-displayValue"
                    x={margin + x(d.value) - (svgWidth * 0.01)}
                    y={margin + y(d.name) + (svgWidth * 0.01)}
                  >{d.displayValue}</text>
                
                  <text
                    className="states-text-name"
                    x={margin + (svgWidth * 0.01)}
                    y={margin + y(d.name) - (y.bandwidth() * 0.5)}
                  >{d.name}</text>
                 
                </g>
              );
            })
          }
        </g>
      </svg>
    </div>
  );
};