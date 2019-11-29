import React, { useState, useLayoutEffect } from 'react';

import { formatData, calcExtentForAxis } from './helperFunctions.js';

import { axisBottom, axisLeft, axisRight } from 'd3-axis';
import { path } from 'd3-path';
import { scaleLinear, scaleBand } from 'd3-scale';
import { interpolatePiYG } from 'd3-scale-chromatic';
import { select } from 'd3-selection';

import './Ford.css';
import { format } from 'util';


export default props => {
  const data = props.selectedItemData;
  
  const [dataSorted, setDataSorted] = useState(formatData(props));
  
  const width = props.dimensions.width;
  const sectionWidth = Math.round( (width * 0.95) * 0.8);
  const svgWidth = Math.floor(sectionWidth * 0.9);
  const svgHeight = Math.floor(svgWidth * 0.7);

  const margin = Math.floor(svgWidth * 0.1);

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

  const calcPercent = (year17, year18) => {
    let percent = ( (data[year17] - data[year18]) / data[year18] ) * 100;
    let formatPercent = parseFloat(Math.round(percent * 100) / 100).toFixed(2);

    // flip negative to positive and positive to negative
    let flipSign = formatPercent * -1; 

    if (flipSign > 0) return `Up ${flipSign}%`;
    else return `Down ${flipSign}%`;
  };

  
  const bottomScale = scaleBand()
    .domain(['2017', '', '2018'])
    .rangeRound([0, svgWidth - (margin * 2)])
    .padding(0.9);
  
  const leftScale = scaleLinear()
    .domain(calcExtentForAxis(data))
    .range([svgHeight - (margin * 2), 0]);

  const rightScale = scaleLinear()
    .domain(calcExtentForAxis(data)) 
    .range([svgHeight - (margin * 2), 0]);


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
        <g transform={`translate(${margin}, ${margin})`}>
          <g 
            transform={`translate(0, ${svgHeight - (margin * 2)})`}
            className="svg-ford-axis"
            ref={node => select(node).call(axisBottom(bottomScale) )} 
          />
          <g transform={`translate(0, 0)`}
            className="svg-ford-axis-side"
            ref={node => select(node).call(axisLeft(leftScale).ticks(6, "s"))} 
          />
          <g transform={`translate(${svgWidth - (margin * 2)}, 0)`}
            className="svg-ford-axis-side"
            ref={node => select(node).call(axisRight(rightScale).ticks(6, "s"))} 
          />

          {
            data['2017_total']
            ? (
              <text
                className="svg-text-percent"
                x={bottomScale('')}
                y={20}
                textAnchor="middle"
              >
                {calcPercent('2017_total', '2018_total')}
              </text>
            )
            : (
              <text
                className="svg-text-percent"
                x={bottomScale('')}
                y={20}
                textAnchor="middle"
              >
                {calcPercent('2017', '2018')}
              </text>
            )
          }
            
          <g>
            <path
              className="ford-line-path"
              d={ renderPath(
                    bottomScale('2017'),
                    (
                      data['2017_total']
                        ? rightScale(data['2017_total'])
                        : rightScale(data['2017'])
                    ),
                    bottomScale('2018'), 
                    (
                      data['2018_total']
                        ? rightScale(data['2018_total'])
                        : rightScale(data['2018'])
                    )
                  )
                }
              strokeWidth={10}
            />
            <circle
              className="ford-line-circle"
              cx={bottomScale('2017')}
              cy={
                data['2017_total']
                  ? rightScale(data['2017_total'])
                  : rightScale(data['2017'])
              }                                                 
              r={8}
            />
            <circle
              className="ford-line-circle"
              cx={bottomScale('2018')}
              cy={
                data['2018_total']
                  ? rightScale(data['2018_total'])
                  : rightScale(data['2018'])
              }
              r={8}
            />
          </g>   
        </g>
      </svg>
    </div>
  );
};