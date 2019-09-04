

import React, { useState, useEffect } from 'react';
import TitleBanner from '../titleBanner/TitleBanner.js';
import Raindrop from './Raindrop.js';

import { range } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { scaleLinear, scalePoint } from 'd3-scale';
import { schemeDark2 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';
import  * as shape from 'd3-shape';

import  * as d3 from 'd3';

import useElementSize from '../../../useElementSize.js';
import curveTypes from '../LineChart/curveTypes.js';
import rainData from './AreaData.js';
 
import './Area.css';
 


export default props => {
  const [darkMode, setDarkMode] = useState(false);
  const [curve, setCurve] = useState('curveLinear');
  const [citiesSelected, setCitiesSelected] = useState([rainData['NYC']]);
  
  let [ sizeRef, dimensions ] = useElementSize();

  useEffect( () => {
    return () => props.setRoute([]);
  }, []);
  
  const svgWidth = Math.round((dimensions.width * 0.95) * 0.8);
  const svgHeight = Math.round(svgWidth * 0.6);
  const marginWidth = Math.round(svgWidth * 0.05);
  const marginHeight = Math.round(svgHeight * 0.05);
  
  const xScale = scalePoint()
    .domain([2015, 2016, 2017, 2018, 2019])
    .range([ 20, svgWidth - (marginWidth * 2) - 20]); 

  const yScale = scaleLinear()
    .domain([30, 70]) 
    .range([svgHeight - (marginHeight * 2) - 20, 20]);

  const areaChart = d3.area()
    .x(d => xScale(d.year))
    .y0(d => yScale(30))
    .y1(d => yScale(d.rain))
    .curve(shape[curve]);

  return (
    <div className="area-wrapper" ref={sizeRef}>

      <TitleBanner title="Area Chart for Rainfall" />

      <div className="area-chart-wrapper">

        <div className="area-chart">

          <div 
            className={darkMode ? "area-controller-dark" : "area-controller"}
          >
            <div className="area-button-wrapper">
              <div className="area-button-group">
                <span>View in: </span>
                <button 
                  className="area-darkMode"
                  onClick={ () => setDarkMode(!darkMode)}
                >
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>

              <div className="area-button-group">
                <span>Set Curve: </span>
                <select 
                  name="curve" 
                  className="area-select"
                  value={curve}
                  onChange={ e => setCurve(e.target.value) }
                >
                  { 
                    curveTypes.map( curve => (
                        <option
                          key={curve}
                          className="area-curve-option"
                        >
                          {curve}
                        </option>
                    ))
                  }
                </select>
              </div>
            </div>

            <div className="area-cities-selected-wrapper">
              {/* {
                citiesSelected.map( (city, idx) => (
                  <button
                    key={city.name + idx}
                    className="area-cities-selected"
                    onClick={ () => setCitiesSelected(citiesSelected.filter((obj, i) => idx !== i)) }
                  >
                    {city.name}
                  </button>
                ))
              } */}
            </div>
          </div>



          <svg 
            className={darkMode ? "svg-area-chart-dark" : "svg-area-chart"}
            height={svgHeight} 
            width={svgWidth} 
          >
            <g transform={`translate(${marginWidth},${marginHeight})`}>
              <path
                className="area1-path"
                ref={node => {
                  select(node).datum(rainData['NYC'].data).attr('d', areaChart)
                }}
              />
            
              {
                citiesSelected.length > 0 
                  ? rainData['NYC'].data.map( (d, idx) => (
                      <g
                        key={rainData['NYC'].city + idx}
                        transform={`translate(${xScale(d.year) - 10},${yScale(d.rain) - 32})`}
                      ><Raindrop /></g>
                    ))
                  : ''
              }
              
              <g
                className="area-xaxis"
                transform={`translate(0,${svgHeight - (marginHeight * 2)})`}
                ref={node => d3.select(node).call(d3.axisBottom(xScale))}
              />
              <g 
                className="area-yaxis"
                ref={node => d3.select(node).call(d3.axisLeft(yScale))}
              />
            </g>
          </svg>
        </div>

        <div 
          className={darkMode ? "area-cities-wrapper-dark" : "area-cities-wrapper"}
        >
          <p>US Cities</p>
          <p>Click up to 3 cities to view</p>
          {
            Object.keys(rainData).map( city => (
              <p key={city}>{city}</p>
            ))
          }
        </div>

      </div>
    </div>
  )
};