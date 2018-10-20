
import React, { Component } from 'react';
//import area1Data from './Area1Data.js';
import * as d3 from 'd3';

import './Area1.css';

export default class Area1 extends Component {

  // var g = d3.select(this.group);

  render() {

    const newData = [
      { name: 'A', value: 1 }, { name: 'B', value: 2 }, { name: 'C', value: 3 },
      { name: 'D', value: 4 }, { name: 'E', value: 5 }
    ];

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 700;
    const height = 400;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // var g = d3.select(this.group);
    // console.log('g:', g);

    var x = d3.scaleLinear().domain(newData.map(d => d.name)).range([0, innerWidth]);
    var y = d3.scaleLinear().domain([1, 2, 3, 4, 5]).range([innerHeight, 0]);

    var areaChart = d3.area()
      .x(d => x(d.name))
      .y1(d => y(d.value));

    d3.select(this.myX).call(d3.axisBottom(x));

    console.log('line', d3.line(newData.map(d => d.value)))

    // d3.tsvParse(
    //   area1Data,
    //   d => {
    //     console.log('d:', d);
    //     d.date = parseTime(d.date);
    //     d.close = +d.close;
    //     return d;
    //   },
    //   (error, data) => {
    //     if (error) throw error;
    //     console.log('d:', data);
    //     x.domain(d3.extent(data, function (d) { return d.date; }));
    //     y.domain([0, d3.max(data, function (d) { return d.close; })]);
    // area.y0(y(0));

    d3.select("path")
      .datum(newData)
      .attr("fill", "steelblue")
      .attr("d", areaChart);

    // g.append("g")
    //   .attr("transform", "translate(0," + height + ")")
    //   .call(d3.axisBottom(x));

    // g.append("g")
    //   .call(d3.axisLeft(y))
    //   .append("text")
    //   .attr("fill", "#000")
    //   .attr("transform", "rotate(-90)")
    //   .attr("y", 6)
    //   .attr("dy", "0.71em")
    //   .attr("text-anchor", "end")
    //   .text("Price ($)");
    //});

    return (
      <div>
        <svg
          className='svg-area1'
          width={width}
          height={height}
        >
          <g
            transform={`translate(${margin.left},${margin.top})`}
          >

            <path
              ref={node => {
                console.log(d3.line(newData.map(d => d.value)).context(d3.select(node)));
              }}
            />
            <g
              className='x axis'
              transform={`translate(0,${innerHeight})`}
              ref={node => d3.select(node).call(d3.axisBottom(x))}
            />
            <g className='y axis'>
              <g
                ref={node => d3.select(node).call(d3.axisLeft(y).ticks(5, '%'))}
              />
              <text
                transform='rotate(-90)'
                y='6'
                dy='0.71em'
                textAnchor='end'
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
