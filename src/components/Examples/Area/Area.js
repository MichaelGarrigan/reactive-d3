

import React, { useState, useEffect, useRef } from 'react';
import TitleBanner from '../titleBanner/TitleBanner.js';
import Raindrop from './Raindrop.js';

import { extent } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { scaleLinear, scalePoint } from 'd3-scale';
import { select } from 'd3-selection';
import * as shape from 'd3-shape';

import useElementSize from '../../../useElementSize.js';
import curveTypes from '../LineChart/curveTypes.js';
import rainData from './AreaData.js';
 
import './Area.css';
 

export default props => {
  const [darkMode, setDarkMode] = useState(false);
  const [curve, setCurve] = useState('curveLinear');
  const [citySelected, setCitySelected] = useState(rainData['NYC']);
  const [tooltipData, setTooltipData] = useState([56.23, 44.98]);

  const tooltipRef = useRef(null);
  let [ sizeRef, dimensions ] = useElementSize();

  useEffect( () => { return () => props.setRoute([]); }, [] );

  const displayWidth = Math.round(dimensions.width * 0.95);
  const displayHeight = Math.round(dimensions.width * 0.7);
  
  const svgWidth = Math.round(displayWidth * 0.8) - 6;
  const svgHeight = Math.round(displayHeight * 0.85);
  const marginWidth = Math.round(svgWidth * 0.05);
  const marginHeight = Math.round(svgHeight * 0.05);

  const calcYExtent = () => {
    // gather all data into an array
    const rainfall = citySelected.data.map(item => item.rain);
    // extract the extent
    const ext = extent(rainfall);
    // round to nearest 5
    const lowerFactor = Math.floor(ext[0] / 5);
    const higherFactor = Math.floor(ext[1] / 5);
    
    return [(lowerFactor - 1) * 5, (higherFactor + 1) * 5];
  }
  
  const xScale = scalePoint()
    .domain([2014, 2015, 2016, 2017, 2018])
    .range([ 20, svgWidth - (marginWidth * 2) - 20]); 

  const yScale = scaleLinear()
    .domain(calcYExtent()) 
    .range([svgHeight - (marginHeight * 2) - 20, 20]);

  const areaChart = shape.area()
    .x(d => xScale(d.year))
    .y0(d => yScale(calcYExtent()[0]))
    .y1(d => yScale(d.rain))
    .curve(shape[curve]);

  

  return (
    <div className="area-wrapper" ref={sizeRef}>

      <TitleBanner title="Area Chart for Rainfall" />

      <div className="area-chart-summary">
        <p> 
          2014-2018 Percipitation For Select Cities
        </p>
        <p> 
          Data from -- NOAA National Centers 
        </p>
        <a href="https://www.ncdc.noaa.gov/cag/">
          www.ncdc.noaa.gov/cag/
        </a>
      </div>

      <div className="area-chart-wrapper">

        <div className="area-chart">

          <div 
            className={
              darkMode ? "freq-tooltip-dark" : "freq-tooltip"
            } 
            ref={tooltipRef}
          >
            <p>{`${tooltipData[0]} inches`}</p>
            <p> 
              {
              tooltipData[0] - tooltipData[1] > 0
                ? `${Math.floor( ((tooltipData[0] - tooltipData[1]) / tooltipData[1]) * 100) }% above mean`
                : `${Math.floor( ((tooltipData[0] - tooltipData[1]) / tooltipData[1]) * 100) }% below mean`
              }
            </p>
        </div>

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

            <div 
              className={darkMode ? "area-controller-info-dark" : "area-controller-info"}
            >
              <p>
                Mean Rainfall (1948-2000) for this city is the <span>Magenta</span> Line
              </p>
            </div>

          </div>

          <svg 
            className={darkMode ? "svg-area-chart-dark" : "svg-area-chart"}
            height={svgHeight} 
            width={svgWidth} 
          >
            <g transform={`translate(${marginWidth},${marginHeight})`}>
              <path
                className="area-path-background"
                ref={node => {
                  select(node).datum(citySelected.data).attr('d', areaChart)
                }}
              />
              <path
                className="area-path"
                ref={node => {
                  select(node).datum(citySelected.data).attr('d', areaChart)
                }}
              />
              <path
                className="area-mean-line"
                d={
                  shape.line()(
                    [
                      [ 
                        xScale(2014), 
                        yScale(citySelected.mean)
                      ],
                      [ 
                        xScale(2018), 
                        yScale(citySelected.mean)
                      ]
                    ]
                  )
                }
              />
            
              {
                citySelected.data.map( (item, idx) => (
                  <g
                    key={item.rain}
                    onMouseEnter={e => {
                      e.persist();
                      setTooltipData([item.rain, citySelected.mean]);
                      tooltipRef.current.focus();

                      select(tooltipRef.current)
                        .style('left', `${e.clientX - 0}px`)
                        .style('top', `${e.pageY - 80}px`)
                        .style('opacity', '0.9')
                    }}
                    onMouseOut={(e) => {
                      e.persist();
                      tooltipRef.current.focus();
              
                      select(tooltipRef.current)
                        .style('opacity', '0')
                    }}
                    transform={`translate(${xScale(item.year) - 10},${yScale(item.rain) - 40})`}
                  ><Raindrop /></g>
                ))
              }
              
              <g
                className={darkMode ? "area-axis-dark" : "area-axis"}
                transform={`translate(0,${svgHeight - (marginHeight * 2)})`}
                ref={node => select(node).call(axisBottom(xScale))}
              />
              <g 
                className={darkMode ? "area-axis-dark" : "area-axis"}
                ref={node => select(node).call(axisLeft(yScale))}
              />
            </g>
          </svg>

        </div>

        <div 
          className={darkMode ? "area-cities-wrapper-dark" : "area-cities-wrapper"}
        >
          <p className="area-cities-title">US Cities</p>
          <div className="area-cities-flex">
            {
              Object.keys(rainData).map( city => (
                <div 
                  className={
                    city === citySelected.city
                      ? "area-city-selected" : "area-city" 
                  }
                  onClick={ () => setCitySelected(rainData[city])}
                  key={city}
                >
                  <p>{rainData[city].name}</p>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
};