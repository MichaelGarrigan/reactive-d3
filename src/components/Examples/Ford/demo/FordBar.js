import React from 'react';

import { lookupMainCategory } from './helperFunctions.js';

import { max } from 'd3-array';
import { axisLeft } from 'd3-axis';
import { select } from 'd3-selection';
import { scaleLinear, scaleBand } from 'd3-scale';
import { schemeTableau10 } from 'd3-scale-chromatic';

import './Ford.css';


export default props => {
  const { category, DATA, year } = props;
  
  const width = props.dimensions.width;
  const sectionWidth = Math.round( (width * 0.95) * 0.8);
  const svgWidth = Math.round(sectionWidth * 0.6);
  const svgHeight = Math.round(sectionWidth * 0.4);

  const width75 = Math.round(svgWidth * 0.75);

  const categoryData = lookupMainCategory(DATA.children, category);
  categoryData.children = categoryData.children.sort( (a,b) => b[year] - a[year]);


  let total = categoryData[`${year}_total`];
  
  const margin5 = Math.floor(svgWidth * 0.05);
  const margin10 = Math.floor(svgWidth * 0.1);
  const margin15 = Math.floor(svgWidth * 0.15);
  const margin20 = Math.floor(svgWidth * 0.2);

  const xScale = scaleLinear()
    .domain([max(categoryData.children.map( item => item[year])), 0])
    .range([width75 - margin15 , 0]);

      
  const yScale = scaleBand()
    .domain(categoryData.children.map( item => item.name))
    .range([0, svgHeight])
    .padding(0.4);
  

  return (
    <svg 
      className="svg-ford-bar" 
      width={svgWidth} 
      height={svgHeight}
    >
      <g 
        className="svg-ford-bar-yaxis" 
        transform={`translate(${Math.round(svgWidth * 0.25)}, 0)`}
        ref={
          node => select(node).call(axisLeft(yScale))
        }
      >
      
      {
        categoryData.children.map( (item, idx) => {
          return (
            <g key={item.name}>
              <rect 
                className="ford-bar-rect"
                fill={schemeTableau10[idx]}
                x={10}
                y={yScale(item.name)}
                width={xScale(item[year])}
                height={yScale.bandwidth()}
              />
              <text
                className="ford-bar-text"
                x={xScale(item[year]) + 15 }
                y={yScale(item.name) + (yScale.bandwidth() * 0.7)}
                textAnchor="start"
              >
                {item[`${year}_rounded`]}
              </text>
            </g>
          )
        })
      }

      </g>
    </svg>
  );
};