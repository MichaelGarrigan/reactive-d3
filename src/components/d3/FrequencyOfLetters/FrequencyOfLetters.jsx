
import React, {Component} from 'react';
import {max} from 'd3-array';
import {axisBottom, axisLeft} from 'd3-axis';
import {csvParse} from 'd3-dsv';
import {scaleLinear, scaleBand} from 'd3-scale';
import {select} from 'd3-selection';

import './FrequencyOfLetters.css';


class FrequencyOfLetters extends Component {
  
  render() {
    const csvFrequency = 
      `letter,frequency\nA,.08167\nB,.01492\nC,.02780\nD,.04253\nE,.12702\nF,.02288\nG,.02022\nH,.06094\nI,.06973\nJ,.00153\nK,.00747\nL,.04025\nM,.02517\nN,.06749\nO,.07507\nP,.01929\nQ,.00098\nR,.05987\nS,.06333\nT,.09056\nU,.02758\nV,.01037\nW,.02465\nX,.00150\nY,.01971\nZ,.00074\n`;

    let csvParsed = csvParse(
      csvFrequency, 
      d => ({letter: d.letter, frequency: +d.frequency})
    );

    // Sizes
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const width = 960; 
    const height = 500; 
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // X scale
    const x = scaleBand()
      .domain(csvParsed.map( d => d.letter ))
      .rangeRound([0, innerWidth]).padding(0.1);

    // Y scale
    const y = scaleLinear()
      .domain([0, max( csvParsed, d => d.frequency )])
      .rangeRound([innerHeight, 0]);

    return (
      <div>
        <p className="frequency-title">Frequency of English Letters</p>

        <div className="frequency-svg-flex">
          <svg 
            className="svg-frequency-letters" 
            width={width} 
            height={height}
          >
            <g 
              transform={`translate(${margin.left},${margin.top})`}
            >
              <g
                className='x axis' 
                transform={`translate(0,${innerHeight})`} 
                ref={node => select(node).call(axisBottom(x))}
              />
              
              <g className='y axis'>
                <g
                  ref={node => select(node).call(axisLeft(y).ticks(10, '%'))}
                />
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
                csvParsed.map( datum => {
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
        </div>
      </div>
    );
  }
  
};

export default FrequencyOfLetters;