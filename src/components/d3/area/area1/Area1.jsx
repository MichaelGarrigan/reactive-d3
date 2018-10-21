
import React, { Component } from 'react';
//import area1Data from './Area1Data.js';
import * as d3 from 'd3';

import './Area1.css';

export default class Area1 extends Component {

  render() {

    const area1Data_1 = [
      { name: 'A', value: 4 }, 
      { name: 'B', value: 8 }, 
      { name: 'C', value: 6 },
      { name: 'D', value: 2 }, 
      { name: 'E', value: 7 }
    ];
    const area1Data_2 = [
      { name: 'A', value: 5 }, 
      { name: 'B', value: 4 }, 
      { name: 'C', value: 3 },
      { name: 'D', value: 9 }, 
      { name: 'E', value: 5 }
    ];

    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = 960;
    const height = 600;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    let step = Math.floor(innerWidth / area1Data_1.length);

    const xScale = d3.scaleOrdinal()
      .domain(area1Data_1.map(d => d.name))
      .range([0, step, step*2, step*3, step*4, step*4]);

    const yScale = d3.scaleLinear()
      .domain([0,d3.max(
        [
          ...area1Data_1.map(d => d.value),
          ...area1Data_2.map(d => d.value)
        ]
        )])
      .range([innerHeight, 0]);

    const areaChart = d3.area()
      .x(d => xScale(d.name))
      .y0(d => yScale(0))
      .y1(d => yScale(d.value))
      .curve(d3.curveNatural);

    
    return (
      <div className="area1-wrapper">
        <svg
          className='svg-area1'
          width={width}
          height={height}
        >
          <g
            transform={`translate(${margin.left},${margin.top})`}
          >
            <path
              className="area1-path-1"
              ref={node => {
                d3.select(node).datum(area1Data_1).attr('d', areaChart)
              }}
            />
            <path
              className="area1-path-2"
              ref={node => {
                d3.select(node).datum(area1Data_2).attr('d', areaChart)
              }}
            />
            {
              area1Data_1.map( d => {
                return (
                  <circle
                    key={d.name}
                    className="area1-circle-1"
                    cx={xScale(d.name)}
                    cy={yScale(d.value)}
                    r="6"
                  />
                )
              })
            }
            {
              area1Data_2.map( d => {
                return (
                  <circle
                    key={d.name}
                    className="area1-circle-2"
                    cx={xScale(d.name)}
                    cy={yScale(d.value)}
                    r="6"
                  />
                )
              })
            }
            <g
              className='x axis'
              transform={`translate(0,${innerHeight})`}
              ref={node => d3.select(node).call(d3.axisBottom(xScale))}
            />
            <g className='y axis'>
              <g
                ref={node => d3.select(node).call(d3.axisLeft(yScale))}
              />
            </g>
          </g>
        </svg>

        <pre className="area1-pre">{`
          export default class Area1 extends Component {

            render() {

              const area1Data_1 = [
                { name: 'A', value: 4 }, 
                { name: 'B', value: 8 }, 
                { name: 'C', value: 6 },
                { name: 'D', value: 2 }, 
                { name: 'E', value: 7 }
              ];
              const area1Data_2 = [
                { name: 'A', value: 5 }, 
                { name: 'B', value: 4 }, 
                { name: 'C', value: 3 },
                { name: 'D', value: 9 }, 
                { name: 'E', value: 5 }
              ];

            const margin = { top: 50, right: 50, bottom: 50, left: 50 };
            const width = 960;
            const height = 600;
            const innerWidth = width - margin.left - margin.right;
            const innerHeight = height - margin.top - margin.bottom;
            let step = Math.floor(innerWidth / area1Data_1.length);

            const xScale = d3.scaleOrdinal()
              .domain(area1Data_1.map(d => d.name))
              .range([0, step, step*2, step*3, step*4, step*4]);

            const yScale = d3.scaleLinear()
              .domain([0,d3.max(
                [
                  ...area1Data_1.map(d => d.value),
                  ...area1Data_2.map(d => d.value)
                ]
                )])
              .range([innerHeight, 0]);

            const areaChart = d3.area()
              .x(d => xScale(d.name))
              .y0(d => yScale(0))
              .y1(d => yScale(d.value))
              .curve(d3.curveNatural);

            
            return (
              <div className="area1-wrapper">
                <svg
                  className='svg-area1'
                  width={width}
                  height={height}
                >
                  <g
                    transform={'translate('+margin.left+','+margin.top+')'}
                  >
                    <path
                      className="area1-path-1"
                      ref={node => {
                        d3.select(node).datum(area1Data_1).attr('d', areaChart)
                      }}
                    />
                    <path
                      className="area1-path-2"
                      ref={node => {
                        d3.select(node).datum(area1Data_2).attr('d', areaChart)
                      }}
                    />
                    {
                      area1Data_1.map( d => {
                        return (
                          <circle
                            key={d.name}
                            className="area1-circle-1"
                            cx={xScale(d.name)}
                            cy={yScale(d.value)}
                            r="6"
                          />
                        )
                      })
                    }
                    {
                      area1Data_2.map( d => {
                        return (
                          <circle
                            key={d.name}
                            className="area1-circle-2"
                            cx={xScale(d.name)}
                            cy={yScale(d.value)}
                            r="6"
                          />
                        )
                      })
                    }
                  <g
                    className='x axis'
                    transform={'translate(0,'+innerHeight+')'}
                    ref={node => d3.select(node).call(d3.axisBottom(xScale))}
                  />
                  <g className='y axis'>
                    <g
                      ref={node => d3.select(node).call(d3.axisLeft(yScale))}
                    />
                  </g>
                </g>
              </svg>
              `}
        </pre>
      </div>
    );
  }
}
