import React, { useState, useLayoutEffect } from 'react';

import { formatData, calcExtentForAxis } from './helperFunctions.js';

import { axisBottom, axisLeft, axisRight } from 'd3-axis';
import { path } from 'd3-path';
import { scaleLinear, scaleBand } from 'd3-scale';
import { interpolatePiYG } from 'd3-scale-chromatic';
import { select } from 'd3-selection';

import './Ford.css';


const FordLine = props => {
  
  const [dataSorted, setDataSorted] = useState(formatData(props));
  const { width } = props.dimensions;
  const svgWidth = Math.floor(width * 0.8);
  const svgHeight = Math.floor(svgWidth * 0.6);

  const margin5 = Math.floor(svgWidth * 0.05);
  const margin10 = Math.floor(svgWidth * 0.1);
  const margin20 = Math.floor(svgWidth * 0.2);

  useLayoutEffect( () => {
    setDataSorted(formatData(props));
  }, [props.year, props.category])
  
  let renderPath = (x, y, x1, y1) => {
    let p = path();
    p.moveTo(x, y);
    p.lineTo(x1, y1);
    p.closePath(); 

    return p.toString();
  };

  
  const bottomScale = scaleBand()
    .domain(['2017', '', '2018'])
    .rangeRound([0, svgWidth - margin20])
    .padding(0.9);

  const leftScale = scaleLinear()
    .domain(calcExtentForAxis(props.selectedItemData))
    .range([svgHeight - margin10, 0]);

  const rightScale = scaleLinear()
    .domain(calcExtentForAxis(props.selectedItemData)) 
    .range([svgHeight - margin10, 0]);


  return (
    <div className="ford-line-wrapper">
      <div className="ford-line-button-wrapper">
      {
        dataSorted.map( item => (
          <button 
            className={ 
              props.selectedItemName === item.name
                ? "ford-line-button-active" 
                : "ford-line-button" 
            }
            key={item.name}
            onClick={ () => {
              props.setSelectedItemName(item.name);
              props.setSelectedItemData(item);
            }}
            value={item.name}
          >
            {item.name}
          </button>
        ))
      }
      </div>
      <svg 
        className="svg-ford-line" 
        width={svgWidth} 
        height={svgHeight}
      >
        <g transform={`translate(${margin10}, ${margin5})`}>
          <g 
            transform={`translate(0, ${svgHeight - margin10})`}
            ref={node => select(node).call(axisBottom(bottomScale) )} 
          />
          <g transform={`translate(0, 0)`}
            ref={node => select(node).call(axisLeft(leftScale))} 
          />
          <g transform={`translate(${svgWidth - margin20}, 0)`}
            ref={node => select(node).call(axisRight(rightScale))} 
          />
            
          <g>
            <path
              d={ renderPath(
                    bottomScale('2017'),
                    (
                      props.selectedItemData['2017_total']
                        ? rightScale(props.selectedItemData['2017_total'])
                        : rightScale(props.selectedItemData['2017'])
                    ),
                    bottomScale('2018'), 
                    (
                      props.selectedItemData['2018_total']
                        ? rightScale(props.selectedItemData['2018_total'])
                        : rightScale(props.selectedItemData['2018'])
                    )
                  )
                }
              strokeWidth={10}
              stroke="blue"
            />
            <circle
              cx={bottomScale('2017')}
              cy={
                props.selectedItemData['2017_total']
                  ? rightScale(props.selectedItemData['2017_total'])
                  : rightScale(props.selectedItemData['2017'])
              }                                                 
              r={10}
              fill="teal"
            />
            <circle
              cx={bottomScale('2018')}
              cy={
                props.selectedItemData['2018_total']
                  ? rightScale(props.selectedItemData['2018_total'])
                  : rightScale(props.selectedItemData['2018'])
              }
              r={10}
              fill="teal"
            />
          </g>   
        </g>
      </svg>
    </div>
  );
};

export default FordLine;