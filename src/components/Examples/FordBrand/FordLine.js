import React, { useState } from 'react';
import {extent} from 'd3-array';
import {axisBottom, axisLeft, axisRight} from 'd3-axis';
import {scaleLinear, scaleBand} from 'd3-scale';
import {select} from 'd3-selection';

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

const FordLine = props => {
  const {width, height} = props.dimensions;
  const [data, setData] = useState(formatData({...props}));
  
  const marginWidth = width * 0.1;
  const marginHeight = height * 0.1;
  const svgWidth = width - marginWidth;
  const svgHeight = height - marginHeight;
  
  let calcExtentForAxis = () => {
    if (props.category === 'All') {
      return extent(data.map( item => item[`total_${props.year}`]));
    } else {
      return extent(data.map( item => item[props.year]));
    }
  }

  const bottomScale = scaleBand()
    .domain(['2017', '', '2018'])
    .range([0, svgWidth - (marginWidth * 2)])
    .padding(0.5);

  const leftScale = scaleBand()
    .domain(data.map( item => item.name))
    .range([svgHeight - marginHeight, 0])
    .padding(0.5);

  const rightScale = scaleLinear()
    .domain(calcExtentForAxis())
    .range([svgHeight - marginHeight, 0]);

  return (
    <div className="ford-line-wrapper">
      <svg 
        className="svg-ford-line" 
        width={svgWidth} 
        height={svgHeight}
      >
        <g transform={`translate(${marginWidth}, 0)`}>
          <g transform={`translate(0, ${svgHeight - marginHeight})`}
            ref={node => select(node).call(axisBottom(bottomScale))} 
          />
          <g transform={`translate(0, 0)`}
            ref={node => select(node).call(axisLeft(leftScale))} 
          />
          <g transform={`translate(${svgWidth - (marginWidth * 2)}, 0)`}
            ref={node => select(node).call(axisRight(rightScale))} 
          />
          
            
            {/* <g ref={node => select(node).call(axisLeft(y1Scale))} />
            {
              data.map( (item, idx) => {
                return (
                    <rect 
                      key={item[`total_${props.year}`]}
                      fill="steelgray"
                      x={0}
                      y={y1Scale(item.name)}
                      width={xScale(item[`total_${props.year}`])}
                      height={y1Scale.bandwidth()}
                    />
                );
              })
            } */}
          
          </g>
      </svg>
    </div>
  );
};

export default FordLine;