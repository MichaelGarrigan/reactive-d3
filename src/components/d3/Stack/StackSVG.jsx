
import React, { Component } from 'react';
import './StackChart.css';
//import sizeMe from 'react-sizeme';

export default class StackSVG extends Component {
  render() {
    const height = 400;
    const width = 600;
    return (
      <svg className="stackSVG" width={width} height={height}></svg>
    )
  }
}

//export default sizeMe()(StackSVG);
