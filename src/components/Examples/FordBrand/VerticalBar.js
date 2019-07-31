import React, { useState, useLayoutEffect } from 'react';

import { 
  sortMainCategoriesByYear, 
  sortCategoryByRankBy,
  lookupMainCategory,
  calcMaxForAxis } from './helperFunctions.js';


import { select } from 'd3-selection';
import { scaleSequential } from 'd3-scale';
import { format } from 'd3-format';
import { interpolateBlues } from 'd3-scale-chromatic';

import { extent, max } from 'd3-array';
import { axisLeft, axisRight, axisTop } from 'd3-axis';
import { scaleLinear, scaleBand } from 'd3-scale';

import './Ford.css';

const formatData = props => {
  if (props.category === 'All') {
    return sortMainCategoriesByYear(
      props.data.children, 
      props.year
    );
  } else {
    return sortCategoryByRankBy(
      lookupMainCategory(props.data.children, props.category), 
      props.year,
      props.rankBy
    );
  }
}

const VerticalBar = props => {
  const { width } = props.dimensions;
  const [dataSorted, setDataSorted] = useState(formatData(props));
  const width50 = width / 2;
  const margin5 = width50 * 0.05;
  const margin10 = width50 * 0.1;
  const margin15 = width50 * 0.15;

  useLayoutEffect( () => {
     setDataSorted(formatData(props));
  }, [props.year, props.category, props.rankBy])

  const xScale = scaleLinear()
    .domain([calcMaxForAxis(props), 0])
    .range([width50 - margin15 - margin5 , 0]);

      
  const yScale = scaleBand()
    .domain(dataSorted.map( item => item.name))
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
            node => select(node).call(axisTop(xScale).tickFormat(format("~s")).tickSize(-width50))
            } 
          />
        
          
          <g ref={node => select(node).call(axisLeft(yScale))} />
          {
            props.category === 'All'
            ? (
              dataSorted.map( (item, idx) => {
                return (
                  <g key={item[`${props.year}_total`]}>
                    <rect 
                      fill={color(idx)}
                      x={0}
                      y={yScale(item.name)}
                      width={xScale(item[`${props.year}_total`])}
                      height={yScale.bandwidth()}
                    />
                    <text
                      x={xScale(item[`${props.year}_total`]) - 75}
                      y={yScale(item.name) + (yScale.bandwidth() * 0.6)}
                      style={{fontSize: "1.5rem", fill: "white"}}
                    >{item[`${props.year}_rounded`]}</text>
                  </g>
                );
              })
            )
            : (
              dataSorted.map( (item, idx) => {
                return (
                  <g key={item[props.year]}>
                    <rect 
                      fill={color(idx)}
                      x={0}
                      y={yScale(item.name)}
                      width={xScale(item[props.year])}
                      height={yScale.bandwidth()}
                    />
                    <text
                      x={xScale(item[props.year]) - 50}
                      y={yScale(item.name)}
                      style={{fontSize: "1.2rem", fill: "white"}}
                    >{
                        props.rankBy === "Yearly Increase" 
                          ? `${item.yearDiff} %`
                          : item[`${props.year}_rounded`]
                     }</text>
                  </g>
                );
              })
            )
          }
        
        </g>
    </svg>
  );
};

export default VerticalBar;