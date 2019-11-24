
const code1 = `
import React from 'react';

import FrequencyOfLetters from './FrequencyOfLetters.js';
import StatesPopulation from './StatesPopulation.js';

import './BarCharts.css';


export default props => {
  
  return (
    <div className="barCharts-wrapper">
      <FrequencyOfLetters dimensions={props.dimensions} />

      <StatesPopulation dimensions={props.dimensions} />
    </div>
  );
};
`;

const tab1 = {
  name: 'BarCharts.js',
  code: code1
};

const code2 = `
import React, { useState, useRef } from 'react';

import {axisBottom, axisLeft} from 'd3-axis';
import {scaleLinear, scaleBand} from 'd3-scale';
import {select} from 'd3-selection';

import './BarCharts.css';

const letterData = [
  ["A", .08167], ["B", .01492], ["C", .02780], ["D", .04253], ["E", .12702], ["F", .02288], ["G", .02022], ["H", .06094], ["I", .06973], ["J", .00153], ["K", .00747], ["L", .04025], ["M", .02517], ["N", .06749], ["O", .07507], ["P", .01929], ["Q", .00098], ["R", .05987], ["S", .06333], ["T", .09056], ["U", .02758], ["V", .01037], ["W", .02465], ["X", .00150], ["Y", .01971], ["Z", .00074]
];


export default props => {

  const [data, setData] = useState(letterData);
  const [letterHovered, setLetterHovered] = useState(["A", .08167]);

  const tooltipRef = useRef(null);

  const { width } = props.dimensions;
  const svgWidth = Math.round(width * 0.8);
  const svgHeight = Math.round(svgWidth * 0.6);
  const margin = Math.round(svgWidth * 0.06);

  // scales
  const x = scaleBand()
    .domain(data.map( d => d[0] ))
    .rangeRound([0, svgWidth - (margin)]).padding(0.1);

  const y = scaleLinear()
    .domain([0, 0.14])
    .rangeRound([svgHeight - (margin * 2), 0]);


  return (
    <div className="frequency-wrapper">

      <h2 className="freq-title">
        frequency of letters
      </h2>
      <p className="freq-summary-p">
        A comparison of each letter in the English language from a sampling of English texts.
      </p>

      <svg 
        className="freq-svg" 
        width={svgWidth} 
        height={svgHeight}
      >
        <g transform={'translate(' + margin + ', ' + margin + ')'}>
          
          <g
            className="freq-axis"
            transform={'translate('0, ' + svgHeight - (margin * 2) + 10 + ')'} 
            ref={node => select(node).call(axisBottom(x))}
          />
          <g 
            className="freq-axis"
            ref={node => select(node).call(axisLeft(y).ticks(8, '%'))} 
          />  
          <text
            className="freq-svg-text"
            x={svgWidth * 0.4}
            y={svgHeight * 0.05}
            ref={tooltipRef}
          >
            {letterHovered[0] + ' - ' + parseFloat(letterHovered[1] * 100).toFixed(1) + '%'}
          </text>
          {
            data.map( d => (
              <rect 
                key={d[0] + '-' + d[1]}
                className='freq-bar'
                x={x(d[0])}
                y={y(d[1])}
                width={x.bandwidth()}
                height={svgHeight - (margin * 2) - y(d[1])}
                onMouseEnter={(e) => {
                  e.persist();
                  setLetterHovered(d);
                  tooltipRef.current.focus();
                  
                  select(tooltipRef.current)
                    .style('opacity', '0.9')
                }}
                onMouseOut={(e) => {
                  e.persist();
                  tooltipRef.current.focus();
          
                  select(tooltipRef.current)
                    .style('opacity', '0')
                }}
              />
            ))
          }
        </g>
      </svg>
    </div>
  );
};
`;

const tab2 = {
  name: 'FrequencyOfLetters.js',
  code: code2
};

const code3 = `
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

        <g transform={'translate(' + margin * 0.4 + ', ' + margin + ')'}>
          { 
            geoStates.map( (item, idx) => (
              <g 
                key={idx}
                transform={
                  'translate(0, ' + ((svgWidth * 0.03) * (idx + 1)) + ((y.bandwidth()) * idx) + ')'
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

        <g transform={'translate(' + margin + ', ' + margin + ')'}>
          
          <g
            className="states-axis"
            transform={'translate(' + margin + ', -10)'} 
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
`;

const tab3 = {
  name: 'StatesPopulation.css',
  code: code3
};

const code4 = `
.barCharts-wrapper {
  height: 100%;
  width: 100%;
}

/* =================
Frequency of Letters
================= */
.frequency-wrapper {
  align-items: center;
  background: var(--grayDark);
  display: flex; 
  flex-direction: column; 
  margin: 2.5vw;
  width: 95%;
}
.freq-title {
  color: var(--orange);
  font-size: 4vw;
  font-weight: inherit;
  margin: 2vw auto;
}
.freq-summary-p {
  color: var(--grayLight);
  font-size: 2vw;
  margin: 0 auto 2vw;
  width: 80%;
}
.freq-svg-text {	
  fill: var(--orange);
  font-size: 6vw;				
  opacity: 0;		
  transition: opacity 500ms ease-in-out;	
}
.freq-svg {
  background: var(--gray6);
  display: block;
  margin: 1vw auto 3vw;
}
.freq-bar {
  fill: var(--blue);
}
.freq-bar:hover {
  fill: var(--orange);
}

.freq-axis text {
  fill: var(--grayLight);
  font-size: 1.5vw;
}

.freq-axis path,
.freq-axis line {
  stroke: var(--grayLight);
  stroke-width: 0.05vw;
}


/* =================
  States Population
================= */
.states-wrapper {
  align-items: center;
  background: var(--grayDark);
  display: flex; 
  flex-direction: column; 
  margin: 2.5vw;
  width: 95%;
}
.states-title {
  color: var(--orange);
  font-size: 4vw;
  font-weight: inherit;
  margin: 2vw auto;
}

.states-svg {
  background: var(--gray6);
  display: block;
  margin: 1vw auto 3vw;
}

.states-bar {
  fill: var(--blue);
}

.states-axis text {
  fill: var(--grayLight);
  font-size: 1.5vw;
}

.states-axis path,
.states-axis line {
  stroke: var(--grayLight);
  stroke-width: 0.05vw;
}
.states-displayValue {
  fill: var(--grayDark);
  font-size: 3.5vw;
  font-weight: 600;
  text-anchor: end;
}
.states-text-name {
  fill: var(--grayDark);
  font-size: 2vw;
  text-anchor: start;
}
`;

const tab4 = {
  name: 'BarCharts.css',
  code: code4
};

const tabs = [tab1, tab2, tab3, tab4];

export default tabs;