import React, { useLayoutEffect } from 'react';
import { scaleTime, scaleLinear } from 'd3-scale';
import { axisBottom, axisRight, axisLeft } from 'd3-axis';
import { select } from 'd3-selection';
import { format } from 'd3-format';
import { timeYear } from 'd3-time';
import './Axis.css';

const Axis = props => {

  useLayoutEffect( () => {
    return () => props.setRoute([]); 
  }, [] );

  const margin = 20;
  const width = 600 - margin*2;
  const height = 500 - margin*2;
   
  const formatNumber = format(".1f");

  const x = scaleTime()
    .domain([new Date(2010, 7, 1), new Date(2012, 7, 1)])
    .range([0, width]);

  const y = scaleLinear()
    .domain([0, 2e6])
    .range([height, 0]);

  const xAxis = axisBottom(x)
    .ticks(timeYear)
    .tickSize(-height);

  const yAxis = axisLeft(y)
    .tickSize(-width);
    

  return (
    <div className="axis-wrapper">
      <svg
        height="500"
        width="700"
      >
        <g transform={`translate(${margin*3},${margin})`}>
          <g 
            transform={`translate(0,${height})`}
            ref={node => select(node).call(xAxis)}
          />
          <g ref={node => select(node).call(yAxis)} />
        </g>
      </svg>
    </div>
  );

};

export default Axis;