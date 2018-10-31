import React from 'react';
import {max} from 'd3-array';
import {axisBottom, axisLeft} from 'd3-axis';
import {scaleLinear, scaleBand} from 'd3-scale';
import {select} from 'd3-selection';
import './FrequencyOfLetters.css';

const FrequencyOfLettersSVG = ({dimensions, data}) => {

  const {height, width, innerHeight, innerWidth, margin} = dimensions;

  // x & y scales
  const x = scaleBand()
    .domain(data.map( d => d.letter ))
    .rangeRound([0, innerWidth]).padding(0.1);

  const y = scaleLinear()
    .domain([0, max( data, d => d.frequency )])
    .rangeRound([innerHeight, 0]);

  return (
    <svg 
      className="svg-frequency-letters" 
      width={width} 
      height={height}
    >
      <g transform={`translate(${margin.left},${margin.top})`}>
        <g
          className='axis' 
          transform={`translate(0,${innerHeight})`} 
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
          data.map( datum => {
            return (
              <rect 
                key={datum.letter}
                className='bar'
                x={x(datum.letter)}
                y={y(datum.frequency)}
                width={x.bandwidth()}
                height={innerHeight - y(datum.frequency)}
              />
            );
          })
        }
      </g>
    </svg>
  )
}

export default FrequencyOfLettersSVG;