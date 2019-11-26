
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
        <g transform={`translate(${margin},${margin})`}>
          <g
            className={darkMode ? "linechart-axis-dark" : "linechart-axis"} 
            transform={`translate(0,${svgHeight - (margin * 2)})`}
            ref={node => select(node).call(axisBottom(xScale))} 
          />
          <g 
            className={darkMode ? "linechart-axis-dark" : "linechart-axis"}
            ref={node => select(node).call(axisLeft(yScale))}
          />
          <path
            className={`
              ${darkMode ? "linechart-path-curve-dark" : "linechart-path-curve"} 
              ${lineFill ? "linechart-path-fill" : ""}`
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