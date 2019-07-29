import React, { useState, useCallback, useRef, useEffect, useLayoutEffect } from 'react';


import { select } from 'd3-selection';
import { scaleSequential } from 'd3-scale';
import { format } from 'd3-format';
import { interpolateBlues } from 'd3-scale-chromatic';

import { extent, max } from 'd3-array';
import { axisLeft, axisRight, axisTop } from 'd3-axis';
import { scaleLinear, scaleBand } from 'd3-scale';

import './Ford.css';

const formatData = obj => {
  let dataArr = [];

  // extract a subcategory 
  if (obj.category === 'All') {
    dataArr = obj.data.children.map(item => item);
  } else {
    let category = obj.data.children.forEach(item => {
      if (item[obj.category]) return item;
    });
    dataArr = category.children.map(item => item);
  }

  // sort the array
  if (obj.rankBy === 'Yearly Increase') {
    return dataArr.sort( (a,b) => {
      if ( (a.yearDiff - b.yearDiff) > 0 ) return -1;
      else if ( (a.yearDiff - b.yearDiff) < 0 ) return 1;
      else return 0;
    });
  } else {
    return dataArr.sort( (a,b) => {
      if ( (a[obj.year] - b[obj.year]) > 0 ) return -1;
      else if ( (a[obj.year] - b[obj.year]) < 0 ) return 1;
      else return 0;
    });
  }
}

const VerticalBar = props => {
  const { width } = props.dimensions;
  const [data, setData] = useState(formatData({...props}));
  const width50 = width / 2;
  const margin5 = width50 * 0.05;
  const margin10 = width50 * 0.1;
  const margin15 = width50 * 0.15;

  let calcMaxForAxis = () => {
    if (props.category === 'All') {
      return max(data.map( item => item[`total_${props.year}`]));
    } else {
      return max(data.map( item => item[props.year]));
    }
  }

  const xScale = scaleLinear()
      .domain([calcMaxForAxis(), 0])
      .range([width50 - margin15 - margin5 , 0]);
      
  const yScale = scaleBand()
    .domain(data.map( item => item.name))
    .range([0, width50 - margin10])
    .padding(0.5);
  
  const color = scaleSequential([8, 0], interpolateBlues);


  return (
    <svg 
      className="svg-ford-vert-bar" 
      width={width50} 
      height={width50}
    >
      <g transform={`translate(${margin15}, ${margin5})`}>
          <g ref={
            node => select(node).call(axisTop(xScale).tickFormat(format(".0s")).ticks(5))
            } 
          />
        
          
          <g ref={node => select(node).call(axisLeft(yScale))} />
          {
            data.map( (item, idx) => {
              return (
                <g key={item[`total_${props.year}`]}>
                  <rect 
                    fill={color(idx)}
                    x={0}
                    y={yScale(item.name)}
                    width={xScale(item[`total_${props.year}`])}
                    height={yScale.bandwidth()}
                  />
                  <text
                    x={xScale(item[`total_${props.year}`]) - 75}
                    y={yScale(item.name)}
                    // dy="-5"
                    style={{fontSize: "2rem", fill: "white"}}
                  >{19.3}</text>
                </g>
              );
            })
          }
        
        </g>
    </svg>
  );
};

export default VerticalBar;