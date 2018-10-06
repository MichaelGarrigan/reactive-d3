
import React from 'react';
import {max} from 'd3-array';
import {axisBottom, axisLeft} from 'd3-axis';
import {csvParse} from 'd3-dsv';
import {scaleLinear, scaleBand} from 'd3-scale';
import {select} from 'd3-selection';


class FrequencyOfLetters extends React.Component {
  
  render() {
    const csvFrequency = 
      `letter,frequency\nA,.08167\nB,.01492\nC,.02780\nD,.04253\nE,.12702\nF,.02288\nG,.02022\nH,.06094\nI,.06973\nJ,.00153\nK,.00747\nL,.04025\nM,.02517\nN,.06749\nO,.07507\nP,.01929\nQ,.00098\nR,.05987\nS,.06333\nT,.09056\nU,.02758\nV,.01037\nW,.02465\nX,.00150\nY,.01971\nZ,.00074\n`;

    let csvParsed = csvParse(
      csvFrequency, 
      d => ({letter: d.letter, frequency: +d.frequency})
    );
    console.log(csvParsed);

    const margin = {top: 20, right: 30, bottom: 30, left: 40};
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const x = scaleBand().rangeRound([0, width]);
    const y = scaleLinear().range([height, 0]);


    
    x.domain(csvParsed.map(function(d) { return d.letter; }));
    y.domain([0, max(csvParsed, function(d) { return d.frequency; })]);

    select('.x').call(axisBottom().scale(x));
    select('.y').call(axisLeft().scale(y));
    //console.log('sel',select('#x'));
    
    return (
      <div>
        <svg className="svg-frequency-letters" width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
          <g 
            style={{transform:`translate(${margin.left},${margin.top})`}}
          >
            <g id='xAxis' className='x axis' style={{transform:`translate(0,${height})`}} />
              
            <g className='y axis' />
              
            {
              csvParsed.map( datum => {
                return (
                  <rect 
                    key={datum.letter}
                    className='bar'
                    x={x(datum.letter)}
                    y={y(datum.frequency)}
                    width={30}
                    height={height - y(datum.frequency)}
                  />
                );
              })
            }
          </g>
        </svg>
      </div>
    );
  }
  
};

export default FrequencyOfLetters;