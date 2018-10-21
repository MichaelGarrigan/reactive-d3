import React, { Component } from 'react';
import * as d3 from 'd3';

export default class ScaleEditor extends Component {
  render() {
    const linear1 = d3.scaleLinear()
      .domain([10, 1000])
      .range([-10, -1000]).clamp(true);

    console.log(linear1(10));
    console.log(linear1(1400));

    const linear2 = d3.scaleLinear()
      .domain([1,2,3])
      .range(['A','B','C']);

    console.log(linear2(1));
    console.log(linear2(3));

    var linear3 = d3.scaleLinear()
      .domain([-100, 0, +100])
      .range(["red", "white", "green"]);

    console.log(linear3(-100));
    console.log(linear3(0));
    console.log(linear3(-50));
    console.log(linear3(150));

    const linear4 = d3.scaleLinear()
      .domain(['A','B','C'])
      .range([1,2,3]);

    console.log(linear4('A'));
    console.log(linear4('C'));
    console.log(linear4.invert(1));
    console.log(linear4.invert(3));

    const linear5 = d3.scaleLinear();

    console.log(linear5('red'));
    console.log(linear5(-8))

    
    return (
      <div>
        d3-scale Editor
      </div>
    )
  }
}
