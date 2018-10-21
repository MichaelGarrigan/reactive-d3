import React, { Component } from 'react';
import * as d3 from 'd3';

export default class Pie1 extends Component {
  render() {
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = 960;
    const height = 600;
    const radius = Math.min(width, height) / 2;
    const dark = d3.schemeDark2;
    
    const dataPie1 = [{value: 30}, {value: 20}, {value: 40}, {value: 10}];

    const arcGen = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    const pie = d3.pie().sort(null).value( d => d.value);
    const arcs = pie(dataPie1);
    
    return (
      <div>
        <svg
          className='svg-area1'
          width={width}
          height={height}
        >
          <g
            transform={`translate(${radius},${radius})`}
          >
          {
            arcs.map( (arc, idx) => {
              return (
                <path
                  key={arc.value + '' + idx}
                  d={arcGen({
                    startAngle: arc.startAngle,
                    endAngle: arc.endAngle,
                  })}
                  style={{fill: dark[idx]}}
                />
              )
            })
          }
          </g>
        </svg>
      </div>
    )
  }
}
