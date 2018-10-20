
import React, { Component } from 'react';
import * as d3 from 'd3';
import './LineChart.css';

export default class LineChart extends Component {
  render() {
   
    const margin = {top: 50, right: 50, bottom: 50, left: 50}
    const width = 960;
    const innerWidth = width - margin.left - margin.right;
    const height = 600;
    const innerHeight = height - margin.top - margin.bottom; 

    const n = 21;

    const xScale = d3.scaleLinear()
      .domain([0, n-1])
      .range([0, innerWidth]); 

    const yScale = d3.scaleLinear()
      .domain([0, 1]) 
      .range([innerHeight, 0]);

    const line = d3.line()
      .x(function(d, i) { return xScale(i); }) 
      .y(function(d) { return yScale(d.y); }) 
      .curve(d3.curveLinear) // apply smoothing to the line

      
    //  An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
    const dataset = d3.range(n).map(function(d) { return {"y": d3.randomUniform(1)() } });
    
    
    return (
      <div className="line-chart-wrapper">
        <svg className="svg-line-chart" height={height} width={width} ref={el => this.line = el}>
          <g transform={`translate(${margin.left},${margin.top})`}>
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
              className="line"
              ref={node => d3.select(node).datum(dataset).attr("d", line)}
            />
            {
              dataset.map( (data, idx) => {
                return (
                  <circle 
                    key={data.y}
                    className="dot"
                    cx={xScale(idx)}
                    cy={yScale(data.y)}
                    r="5"
                  />
                );
              })
            }
          </g>
        </svg>

      </div>
    )
  }
}