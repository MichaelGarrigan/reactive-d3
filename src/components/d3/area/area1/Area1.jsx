
import React, { Component } from 'react';
import area1Data from './Area1Data.js';
import * as d3 from 'd3';
//console.log(area1Data);

export default class Area1 extends Component {
  componentDidMount() {
    this.selectG();
  }

  selectG () {
    var g = d3.select(this.group);
  }
  render() {

    const margin = {top: 20, right: 20, bottom: 30, left: 50};
    const width = 960;
    const height = 500; 
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // var g = d3.select(this.group);
    // console.log('g:', g);

    var parseTime = d3.timeParse("%d-%b-%y");

    var x = d3.scaleTime().rangeRound([0, innerWidth]);

    var y = d3.scaleLinear().rangeRound([innerHeight, 0]);

    var area = d3.area()
      .x(function(d) { return x(d.date); })
      .y1(function(d) { return y(d.close); });

    d3.tsvParse(area1Data, function(d) {
      //console.log('d:', d)
      d.date = parseTime(d.date);
      d.close = +d.close;
      return d;
    }, function(error, data) {
      if (error) throw error;
      console.log('d:', data);
      x.domain(d3.extent(data, function(d) { return d.date; }));
      y.domain([0, d3.max(data, function(d) { return d.close; })]);
      area.y0(y(0));

      g.append("path")
        .datum(data)
        .attr("fill", "steelblue")
        .attr("d", area);

      g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Price ($)");
});

    return (
      <div>
        AREA
        <svg 
          width={width}
          height={height}
        >
          <g 
            className='group-Area'
            ref={el => { this.group = el; }}
            style={{transform: `translate(${margin.left}, ${margin.top})`}}
          />
        </svg>
      </div>
    );
  }
}
