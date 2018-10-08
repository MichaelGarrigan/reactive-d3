
import React, { Component } from 'react';
import {min, max, range, transpose} from 'd3-array';
import {area, stack, stackOffsetWiggle} from 'd3-shape';
import {selectAll, select} from 'd3-selection';
import {scaleLinear} from 'd3-scale';
import {interpolateCool} from 'd3-scale-chromatic';

import StackSVG from './StackSVG.jsx';
import StackController from './StackController.jsx';
import './StackChart.css';

export default class StackChart extends Component {
  render() {
    const width = 600;
    const height = 400;
    const n = 4; // number of layers
    const m = 20; // number of samples per layer
    const k = 10; // number of bumps per layer

    // Inspired by Lee Byron’s test data generator.
    const bumps = (n, m) => {
      var a = [], i;
      for (i = 0; i < n; ++i) a[i] = 0;
      for (i = 0; i < m; ++i) bump(a, n);
      return a;
    };

    const bump = (a, n) => {
      var x = 1 / (0.1 + Math.random());
      var y = 2 * Math.random() - 0.5;
      var z = 10 / (0.1 + Math.random());
      for (var i = 0; i < n; i++) {
        var w = (i / n - y) * z;
        a[i] += x * Math.exp(-w * w);
      }
    };

    const chart = stack().keys(range(n)).offset(stackOffsetWiggle);
    let layers0 = chart(transpose(range(n).map(function() { return bumps(m, k); })));
    let layers1 = chart(transpose(range(n).map(function() { return bumps(m, k); })));
    let layers = layers0.concat(layers1);

    const x = scaleLinear()
      .domain([0, m - 1])
      .range([0, width]);

    const y = scaleLinear()
      .domain([min(layers, stackMin), max(layers, stackMax)])
      .range([height, 0]);

    var z = interpolateCool;

    var areaChart = area()
      .x(function(d, i) { return x(i); })
      .y0(function(d) { return y(d[0]); })
      .y1(function(d) { return y(d[1]); });

    const stackMax = layer => {
      return max(layer, function(d) { return d[1]; });
    };

    const stackMin = layer => {
      return min(layer, function(d) { return d[0]; });
    };

    const transition = () => {
      var t;
      selectAll("path")
        .data((t = layers1, layers1 = layers0, layers0 = t))
        .transition()
        .duration(2500)
        .attr("d", area);
    };



    return (
      <div>
        <button type='button' onClick={() => { transition(); }}>Transition</button>
        <svg width={width} height={height}>
          {
            layers0.map( layer => {
              console.log('layer:', layer);
              console.log('area:', areaChart(layer));
              return (
                <path
                  key={layer}
                  ref={el => { this.myPath = el; }}
                  d={areaChart(select(this.myPath).call(layer.data))}
                  style={{fill: z(Math.random())}}
                />
              );
            })
          }
        </svg>
        {/* <StackSVG /> */}
        <StackController />
      </div>
    );
  }
}
