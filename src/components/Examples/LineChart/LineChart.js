
import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react';
import TitleBanner from '../titleBanner/TitleBanner.js';

import { range } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { randomUniform } from 'd3-random';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import  * as shape from 'd3-shape';

import useElementSize from '../../../useElementSize.js';
import curveTypes from './curveTypes.js';
 
import './LineChart.css';
 
const randomizeData = () => range(20).map(d => ({ "y": randomUniform(1)() }));

const LineChart = props => {

  const [curve, setCurve] = useState('curveLinear')
  const [dataRandom, setDataRandom] = useState(randomizeData());
  const [darkMode, setDarkMode] = useState(false);
  const [lineFill, setLineFill] = useState(false);

  let { sizeRef, dimensions } = useElementSize();

  useEffect( () => {
    return () => props.setRoute([]);
  }, []);
  
  const svgWidth = Math.round(dimensions.width * 0.9);
  const svgHeight = Math.round(svgWidth * 0.5);
  const marginWidth = Math.round(svgWidth * 0.06);
  const marginHeight = Math.round(svgHeight * 0.06);
  
  const xScale = scaleLinear()
    .domain([0, 20])
    .range([0, svgWidth - (marginWidth * 2)]); 

  const yScale = scaleLinear()
    .domain([0, 1]) 
    .range([svgHeight - (marginHeight * 2), 0]);

  const line = shape.line()
    .x( (d, i) => xScale(i+1) ) 
    .y( d => yScale(d.y) ) 
    .curve(shape[curve]);


  return (
    <div className="line-wrapper" ref={sizeRef}>

      <TitleBanner title='Line Chart with Curves' />

      <div className="line-chart-wrapper">

        <div 
          className={darkMode ? "line-controller-dark" : "line-controller"}
          width={svgWidth}
        >
          <span>Controls</span>
        
          <div className="line-button-wrapper">
            <button 
              className="line-darkMode"
              onClick={ () => setDarkMode(!darkMode)}
            >
              {darkMode ? 'Dark Mode - ON' : 'Dark Mode - OFF'}
            </button>
            <button 
              className="line-random-button"
              onClick={ () => setDataRandom(randomizeData())}
            >
              New Random Data
            </button>
            <button 
              className="line-fill"
              onClick={ () => setLineFill(!lineFill)}
            >
              {lineFill ? 'Fill - ON' : 'Fill - OFF'}
            </button>
            <select 
              name="curve" 
              className="line-select"
              value={curve}
              onChange={ e => setCurve(e.target.value) }
            >
              { 
                curveTypes.map( curve => (
                    <option
                      key={curve}
                      className="line-curve-option"
                    >
                      {curve}
                    </option>
                ))
              }
            </select>
          </div>
        </div>

      <svg 
        className={darkMode ? "svg-line-chart-dark" : "svg-line-chart"}
        height={svgHeight} 
        width={svgWidth} 
      >
        <g transform={`translate(${marginWidth},${marginHeight})`}>
          <g
            className={darkMode ? "line-axis-dark" : "line-axis"} 
            transform={`translate(0,${svgHeight - (marginHeight * 2)})`}
            ref={node => select(node).call(axisBottom(xScale))} 
          />
          <g 
            className={darkMode ? "line-axis-dark" : "line-axis"}
            ref={node => select(node).call(axisLeft(yScale))}
          />
          <path
            className={`
              ${darkMode ? "line-path-curve-dark" : "line-path-curve"} 
              ${lineFill ? "line-path-fill" : ""}`
            }
            ref={node => select(node).datum(dataRandom).attr("d", line)}
          />
          {
            dataRandom.map( (data, idx) => (
              <circle 
                key={data.y}
                className={darkMode ? "line-data-points-dark" : "line-data-points"}
                cx={xScale(idx+1)}
                cy={yScale(data.y)}
                r="8"
              />
            ))
          }
        </g>
      </svg>
      </div>
    </div>
  )
}

  export default LineChart;