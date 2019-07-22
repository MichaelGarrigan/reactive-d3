
import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react';
import {max} from 'd3-array';
import {axisBottom, axisLeft} from 'd3-axis';
import {scaleLinear, scaleBand} from 'd3-scale';
import {select} from 'd3-selection';

import TitleBanner from '../titleBanner/TitleBanner.js';
import './FrequencyOfLetters.css';

const letterData = [
  ["A", .08167], ["B", .01492], ["C", .02780], ["D", .04253], ["E", .12702], ["F", .02288], ["G", .02022], ["H", .06094], ["I", .06973], ["J", .00153], ["K", .00747], ["L", .04025], ["M", .02517], ["N", .06749], ["O", .07507], ["P", .01929], ["Q", .00098], ["R", .05987], ["S", .06333], ["T", .09056], ["U", .02758], ["V", .01037], ["W", .02465], ["X", .00150], ["Y", .01971], ["Z", .00074]
];

// https://github.com/Swizec/useDimensions
function getDimensionObject(node) {
    const rect = node.getBoundingClientRect();

    return {
        width: rect.width,
        height: rect.height,
        top: "x" in rect ? rect.x : rect.top,
        left: "y" in rect ? rect.y : rect.left,
        x: "x" in rect ? rect.x : rect.left,
        y: "y" in rect ? rect.y : rect.top,
        right: rect.right,
        bottom: rect.bottom
    };
}

function useDimensions({ liveMeasure = true }) {
    const [dimensions, setDimensions] = useState({width: 960, height: 500});
    const [node, setNode] = useState(null);

    const svgRef = useCallback(node => {
        setNode(node);
    }, []);

    useLayoutEffect(() => {
        if (node) {
            const measure = () =>
                window.requestAnimationFrame(() => {
                  let {width, height} = getDimensionObject(node)
                  setDimensions({ 
                    width: Math.round(width * .80), 
                    height: Math.round(height * .75) 
                  })
                });
            
            measure();

            if (liveMeasure) {
                window.addEventListener("resize", measure);

                return () => {
                    window.removeEventListener("resize", measure);
                };
            }
        }
    }, [node]);

    return [svgRef, dimensions, node];
}


const FrequencyOfLetters = props => {

  const [data, setData] = useState(letterData);

  const [wrapRef, {height, width}] = useDimensions({ liveMeasure: true });


  useEffect( () => {
    return () => props.setRoute([]);
  }, []);
  

  // Sizes
  const margin = 20;

  // x & y scales
  const x = scaleBand()
    .domain(data.map( d => d[0] ))
    .rangeRound([0, width - (margin * 2)]).padding(0.1);

  const y = scaleLinear()
    .domain([0, max( data, d => d[1] )])
    .rangeRound([height - (margin * 2), 0]);


  return (
    <div className="frequency-wrapper">
      <TitleBanner title='Frequency of English Letters' />
      <div 
        className="frequency-svg-flex"
        ref={wrapRef}
      >
        
        <svg 
          className="svg-frequency-letters" 
          width={width} 
          height={height}
        >
          <g transform={`translate(${margin},${margin})`}>
            <g
              className='axis' 
              transform={`translate(0,${height - (margin * 2)})`} 
              ref={node => select(node).call(axisBottom(x))}
            />
            
            <g className='axis'>
              <g ref={node => select(node).call(axisLeft(y).ticks(10, '%'))} />
              <text 
                transform='rotate(-90)'
                y='6'
                dy='0.71em'
                textAnchor='end'
              >
                Frequency
              </text>
            </g>   
            {
              data.map( d => {
                return (
                  <rect 
                    key={`${d[0]}-${d[1]}`}
                    className='bar'
                    x={x(d[0])}
                    y={y(d[1])}
                    width={x.bandwidth()}
                    height={height - (margin * 2) - y(d[1])}
                  />
                );
              })
            }
          </g>
        </svg>
      </div>
    </div>
  );
};

export default FrequencyOfLetters;