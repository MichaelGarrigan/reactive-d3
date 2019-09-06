

import React, { useState, useLayoutEffect, useCallback } from 'react';

import { axisBottom, axisTop } from 'd3-axis';
import { geoEquirectangular, geoPath } from 'd3-geo';
import { scaleLinear, scaleTime, scalePoint } from 'd3-scale';
import { select } from 'd3-selection';
import { line } from 'd3-shape';

import geoData from './geoData.js';

import './DayNight.css';

export default ({width}) => {
  
  const height = Math.round(width * 0.5);

  const marginTop = Math.round(height * 0.05);
  const marginLeft = Math.round(width * 0.02);

  const [now, setNow] = useState(Date.now())
  

  let numScale = scaleLinear()
    .domain([86400000, 0])
    .range([0, width - (marginLeft * 2)]);

  // time
  let timeScale = scaleTime()
    .domain([now - 86400000, now])
    .range([0, width - (marginLeft * 2)]);

  let timer;
  useLayoutEffect( () => {
    timer = setInterval(
      () => {
        setNow(Date.now())
        console.log('time scale called');
        timeScale = scaleTime()
          .domain([now - 86400000, now])
          .range([0, width - (marginLeft * 2)]);

      }, 
      2000
    );

    return () => { 
      clearInterval(timer); 
    }
  }, [now] ); 

  const projection = geoEquirectangular()
    .fitExtent([[0, 0], [width - (marginLeft * 2), height - (marginTop * 2)]], geoData);

  const path = geoPath()
    .projection(projection);

  let ny = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-73.935242, 40.730610]
    },
    "properties": {
      "name": "NYC"
    }
  };
  
  let nyLine = line();
  let lineData = [[numScale(60480000), 0], [numScale(60480000), height - (marginTop * 2)]];
  
  return (
    <svg
      className="day-svg"
      height={height}
      width={width}
    >
      {/* <g transform={`translate(0,${marginTop})`}>
        
      </g> */}

      <g transform={`translate(${marginLeft},${marginTop})`}>
        <path ref={node => select(node).datum(geoData).attr('d', path)}></path>
        <path className="ny" d={path(ny)}></path>
        <g
          className="day-bottom-axis" 
          transform={`translate(0,${height - (marginTop * 2)})`}
          ref={node => select(node).call(axisBottom(timeScale))} 
        />
        {/* <g
          className="day-top-axis" 
          transform={`translate(0, 0)`}
          ref={node => select(node).call(axisTop(timeScale))} 
        /> */}
        <g
          className="day-top-axis" 
          transform={`translate(0, 0)`}
          ref={node => select(node).call(axisTop(numScale))} 
        />
        <path className="ny-line" d={nyLine(lineData)}></path>
      </g>
    </svg>
  )
}