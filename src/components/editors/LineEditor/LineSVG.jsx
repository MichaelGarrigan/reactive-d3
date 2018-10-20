import React from 'react';
import * as d3 from 'd3';


const LineSVG = ({height, width, margins, controller}) => {
  
  const curveTypes = {
    'curveLinear': d3.curveLinear, 'curveLinearClosed': d3.curveLinearClosed,
    'curveBasis': d3.curveBasis, 'curveBasisClosed': d3.curveBasisClosed, 
    'curveBasisOpen': d3.curveBasisOpen, 'curveBundle': d3.curveBundle,
    'curveCardinal': d3.curveCardinal, 'curveCardinalClosed': d3.curveCardinalClosed, 
    'curveCardinalOpen': d3.curveCardinalOpen, 'curveCatmullRom': d3.curveCatmullRom, 
    'curveCatmullRomClosed': d3.curveCatmullRomClosed, 'curveCatmullRomOpen': d3.curveCatmullRomOpen, 'curveMonotoneX': d3.curveMonotoneX, 'curveMonotoneY': d3.curveMonotoneY,
    'curveNatural': d3.curveNatural, 'curveStep': d3.curveStep, 
    'curveStepAfter': d3.curveStepAfter, 'curveStepBefore': d3.curveStepBefore
  };

  let data = [];
  if (controller.random && controller.dataPoints > 0) {
    for (let i = 0; i < +controller.dataPoints; i += 1) {
      data.push([i, Math.floor(Math.random() * 10)]);
    }
  }

  const innerHeight = height - margins.top - margins.bottom;
  const innerWidth = width - margins.left - margins.right;
  
  const xScale = d3.scaleLinear()
    .domain([1, controller.dataPoints])
    .range([0, innerWidth]); 

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d[1]))
    .range([innerHeight, 0]);

  const line = d3.line()
    .x( (d, i) => xScale(i+1) ) 
    .y( d => yScale(d[1]) ) 
    .curve(curveTypes[controller.curveType]);
    
          
    return (
      <svg 
        height={height}
        width={width}
      >
        <g transform={`translate(${margins.left},${margins.top})`}>
            <g
              className="xAxis" 
              transform={`translate(0,${innerHeight})`}
              ref={node => d3.select(node).call(d3.axisBottom(xScale))} 
            />
            <g 
              className="yAxis"
              ref={node => d3.select(node).call(d3.axisLeft(yScale))}
            />
            <path
              className="line-path"
              ref={node => d3.select(node).datum(data).attr("d", line)}
            />
            {
              data.map( d => {
                return (
                  <circle 
                    key={`${d[0]+1}${d[1]}`}
                    className="line-dot"
                    cx={xScale(d[0]+1)}
                    cy={yScale(d[1])}
                    r="5"
                  />
                );
              })
            }
          </g>
      </svg>
    )
  }


export default LineSVG;