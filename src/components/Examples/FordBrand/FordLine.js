import React, { useState, useLayoutEffect, Fragment } from 'react';

import { formatData, calcMaxForAxis } from './helperFunctions.js';

import {axisBottom, axisLeft, axisRight} from 'd3-axis';
import {scaleLinear, scaleBand, scaleOrdinal, scalePoint} from 'd3-scale';
import {select} from 'd3-selection';
import {interpolatePiYG} from 'd3-scale-chromatic';
import {path} from 'd3-path';

import './Ford.css';


const FordLine = props => {
  
  const { width } = props.dimensions;
  const [dataSorted, setDataSorted] = useState(formatData(props));
  
  const width10 = width * 0.1;
  const width20 = width * 0.2;
  const width50 = width * 0.5;
  const width80 = width * 0.8;
  const width90 = width * 0.9;

  const margin10 = width * 0.1;

  useLayoutEffect( () => {
    setDataSorted(formatData(props));
 }, [props.year, props.category, props.rankBy])
  

  const renderPath = (x, y, x1, y1) => {
    let p = path();
    p.moveTo(x, y);
    p.lineTo(x1, y1);
    p.closePath(); 

    return p.toString();
  }
  
  // Scales
  const bottomScale = scalePoint()
    .domain(['a', '2017', 'b', 'c', 'd', 'e', '2018', 'f'])
    .range([0, width80]);

  const leftScale = scalePoint()
    .domain([...dataSorted.map( item => item.name).reverse()])
    .range([width80, 0])
    .padding(0.5);

  const rightScale = scaleLinear()
    .domain([0, calcMaxForAxis(props)]) 
    .range([width80, 0]);


  return (
    <div className="ford-line-wrapper">
      <svg 
        className="svg-ford-line" 
        width={width} 
        height={width}
      >
        <g transform={`translate(${margin10}, ${margin10})`}>
          <g transform={`translate(0, ${width80})`}
            ref={
              node => 
                select(node).call(axisBottom(bottomScale).tickValues(['', '2017', '', '', '', '', '2018', '']))
            } 
          />
          <g transform={`translate(0, 0)`}
            ref={node => select(node).call(axisLeft(leftScale))} 
          />
          <g transform={`translate(${width80}, 0)`}
            ref={node => select(node).call(axisRight(rightScale))} 
          />
            
          {
            dataSorted.map( (item, idx) => {
              return (
                <Fragment key={idx}>
                  <circle
                    cx={bottomScale('2017')}
                    cy={
                      item['2017_total']
                       ? rightScale(item['2017_total'])
                       : rightScale(item['2017'])
                    }
                    r={20}
                    fill={interpolatePiYG(idx * 0.1 - 0.05)}
                  />
                  <circle
                    cx={bottomScale('2018')}
                    cy={
                      item['2018_total']
                       ? rightScale(item['2018_total'])
                       : rightScale(item['2018'])
                    }
                    r={20}
                    fill={interpolatePiYG(idx * 0.1 - 0.05)}
                  />
                  <path
                    d={ renderPath(
                          bottomScale('2017'),
                          (
                            item['2017_total']
                              ? rightScale(item['2017_total'])
                              : rightScale(item['2017'])
                          ),
                          bottomScale('2018'), 
                          (
                            item['2018_total']
                              ? rightScale(item['2018_total'])
                              : rightScale(item['2018'])
                          )
                        )
                      }
                    strokeWidth={10}
                    stroke="blue"
                  />
                  <circle
                    cx={bottomScale('2017')}
                    cy={
                      item['2017_total']
                       ? rightScale(item['2017_total'])
                       : rightScale(item['2017'])
                    }
                    r={10}
                    fill={interpolatePiYG(idx * 0.1)}
                  />
                  <circle
                    cx={bottomScale('2018')}
                    cy={
                      item['2018_total']
                       ? rightScale(item['2018_total'])
                       : rightScale(item['2018'])
                    }
                    r={10}
                    fill={interpolatePiYG(idx * 0.1)}
                  />
                </Fragment>
              )
            })
          }
          
          </g>
      </svg>
    </div>
  );
};

export default FordLine;