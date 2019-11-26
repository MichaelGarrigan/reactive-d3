
const code1 = `
import React, { useState, useEffect } from 'react';

import { range } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { randomUniform } from 'd3-random';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import  * as shape from 'd3-shape';

import curveTypes from './curveTypes.js';
 
import './LineChart.css';
 
const randomizeData = () => range(20).map(d => ({ "y": randomUniform(1)() }));

export default props => {

  const [curve, setCurve] = useState('curveLinear')
  const [dataRandom, setDataRandom] = useState(randomizeData());
  const [darkMode, setDarkMode] = useState(false);
  const [lineFill, setLineFill] = useState(false);
  
  const svgWidth = Math.round(props.dimensions.width * 0.9);
  const svgHeight = Math.round(svgWidth * 0.5);
  const margin = Math.round(svgWidth * 0.06);
  
  const xScale = scaleLinear()
    .domain([0, 20])
    .range([0, svgWidth - (margin * 2)]); 

  const yScale = scaleLinear()
    .domain([0, 1]) 
    .range([svgHeight - (margin * 2), 0]);

  const line = shape.line()
    .x( (d, i) => xScale(i+1) ) 
    .y( d => yScale(d.y) ) 
    .curve(shape[curve]);


  return (
    <div 
      className={darkMode ? "linechart-wrapper-dark" : "linechart-wrapper"}
    >

      <div 
        className="linechart"
        width={svgWidth}
      >
        
        <div className="linechart-btn-wrapper">
          <button 
            className="linechart-btn"
            onClick={ () => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button 
            className="linechart-btn"
            onClick={ () => setDataRandom(randomizeData())}
          >
              New Random Data
            </button>
            <button 
              className="linechart-btn"
              onClick={ () => setLineFill(!lineFill)}
            >
              {lineFill ? 'Fill - ON' : 'Fill - OFF'}
            </button>
            <select 
              name="curve" 
              className="linechart-select"
              value={curve}
              onChange={ e => setCurve(e.target.value) }
            >
              { 
                curveTypes.map( curve => (
                    <option
                      key={curve}
                      className="linechart-option"
                    >
                      {curve}
                    </option>
                ))
              }
            </select>
          </div>
        </div>

      <svg 
        className="linechart-svg"
        height={svgHeight} 
        width={svgWidth} 
      >
        <g transform={'translate(' + margin + ', ' + margin + ')'}>
          <g
            className={darkMode ? "linechart-axis-dark" : "linechart-axis"} 
            transform={'translate(0, ' + svgHeight - (margin * 2) + ')'}
            ref={node => select(node).call(axisBottom(xScale))} 
          />
          <g 
            className={darkMode ? "linechart-axis-dark" : "linechart-axis"}
            ref={node => select(node).call(axisLeft(yScale))}
          />
          <path
            className={'
              darkMode ? "linechart-path-curve-dark" : "linechart-path-curve" +  
              lineFill ? "linechart-path-fill" : ""'
            }
            ref={node => select(node).datum(dataRandom).attr("d", line)}
          />
          {
            dataRandom.map( (data, idx) => (
              <circle 
                key={data.y}
                className={darkMode ? "linechart-data-points-dark" : "linechart-data-points"}
                cx={xScale(idx+1)}
                cy={yScale(data.y)}
                r="8"
              />
            ))
          }
        </g>
      </svg>
     
    </div>
  )
};
`;

const tab1 = {
  name: 'LineChart.js',
  code: code1
};

const code2 = `
export default [
  'curveBasis', 
  'curveBasisClosed', 
  'curveBasisOpen', 
  'curveBundle',
  'curveCardinal', 
  'curveCardinalClosed', 
  'curveCardinalOpen',
  'curveCatmullRom', 
  'curveCatmullRomClosed',
  'curveCatmullRomOpen', 
  'curveLinear', 
  'curveLinearClosed',
  'curveMonotoneX',
  'curveMonotoneY',
  'curveNatural',
  'curveStep',
  'curveStepAfter', 
  'curveStepBefore'
];
`;

const tab2 = {
  name: 'curveTypes.js',
  code: code2
};

const code3 = `

.linechart-wrapper {
  background: var(--offWhite);
  border-radius: 0.5vw;
  margin: 4vw auto;
  width: 95%;
}
.linechart-wrapper-dark {
  background: var(--offBlack);
  border-radius: 0.5vw;
  margin: 4vw auto;
  width: 95%;
}

.linechart {
  width: 100%;
}

.linechart-btn-wrapper {
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  padding: 2vw 0;
}

.linechart-btn {
  border-radius: 1vw;
  color: var(--offBlack);
  font-size: 2vw;
  padding: 1vw;
}

.linechart-select {
  border-radius: 1vw;
  color: var(--offBlack);
  font-size: 2vw;
  padding: 1vw;
}

.linechart-option {
  font-size: 1.6vw;
  color: var(--offBlack);
  padding: 1vw;
}

/* Line Chart SVG */
.linechart-svg {
  background: transparent;
  display: block;
}

.linechart-path-curve {
  fill: none;
  stroke: #ffab00;
  stroke-width: 0.3vw;
}
.linechart-path-curve-dark {
  fill: none;
  stroke: greenyellow;
  stroke-width: 0.3vw;
}

.linechart-path-fill {
  fill: var(--gray4);
}

.linechart-axis text {
  fill: var(--offBlack);
  font-size: 1.5vw;
}
.linechart-axis-dark text {
  fill: var(--offWhite);
  font-size: 1.5vw;
}

.linechart-axis path,
.linechart-axis line {
  stroke: var(--offBlack);
  stroke-width: 0.1vw;
}
.linechart-axis-dark path,
.linechart-axis-dark line {
  stroke: var(--offWhite);
  stroke-width: 0.1vw;
}

.linechart-data-points {
  fill: maroon;
}
.linechart-data-points-dark {
  fill: orangered;
  stroke: var(--offBlack);
}
`;

const tab3 = {
  name: 'LineChart.css',
  code: code3
};

const tabs = [tab1, tab2, tab3];

export default tabs;