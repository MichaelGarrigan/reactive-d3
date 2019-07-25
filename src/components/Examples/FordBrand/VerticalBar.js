import React, { useState, useCallback, useRef, useEffect, useLayoutEffect } from 'react';


import { select } from 'd3-selection';
import { scaleSequential } from 'd3-scale';
import { interpolateInferno } from 'd3-scale-chromatic';

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
  const { width, height } = props.dimensions;
  const [data, setData] = useState(formatData({...props}));
  const margin = 50;

  let calcMaxForAxis = () => {
    if (props.category === 'All') {
      return max(data.map( item => item[`total_${props.year}`]));
    } else {
      return max(data.map( item => item[props.year]));
    }
  }

  const xScale = scaleLinear()
      .domain([calcMaxForAxis(), 0])
      .range([width / 3, 0]);
      
  const y1Scale = scaleBand()
    .domain(data.map( item => item.name))
    .range([0, height - (margin * 2)])
    .padding(0.2);
  

  

  // const svgRef = useCallback(node => {
  //     setSvgNode(node);
  // }, [svgNode]);

  // useLayoutEffect( () => {
  //   if (svgNode) {
  //     select(svgNode)
  //       .selectAll("circle")
  //       .data(root.descendants())
  //       .enter()
  //       .append("circle")
  //       .attr('cx', d => d.x)
  //       .attr('cy', d => d.y)
  //       .attr('r', d => d.r)
  //       .attr('fill', d => color(d.height))

  //       .append("text").attr("dy", 5)
  //       .attr('x', d => d.x - 20)
  //       .attr('y', d => d.y)
  //       .text( d => d.children === undefined ? d.data.name : '');
  //   }
  // }, [svgNode]);

  return (
    <div className="ford-pack-bar-wrapper">
      <svg 
        className="svg-ford-vert-bar" 
        width={width / 2} 
        height={width / 2}
      >
        <g transform={`translate(${margin}, ${margin})`}>
            <g ref={node => select(node).call(axisTop(xScale))} />
          
            
            <g ref={node => select(node).call(axisLeft(y1Scale))} />
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
            }
          
          </g>
      </svg>
    </div>
  );
};

export default VerticalBar;