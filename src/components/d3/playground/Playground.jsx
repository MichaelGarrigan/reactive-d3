
import React from 'react';
import Dimensions from 'react-dimensions';

import {max} from 'd3-array';
import {scaleBand, scaleLinear} from 'd3-scale';

import './Playground.css';
import Axes from '../Axes/Axes.jsx';

class Playground extends React.Component {

  render() {
    const data = [
      {name: 'First', value: 21, year: 1910},
      {name: 'Second', value: 5, year: 1920},
      {name: 'Third', value: 25, year: 1930},
      {name: 'Forth', value: 31, year: 1940},
      {name: 'Fifth', value: 11, year: 1950},
      {name: 'Sixth', value: 2, year: 1960},
      {name: 'Seventh', value: 15, year: 1970}
    ];

    const {containerWidth, containerHeight} = this.props;
    const margins = 40;
    const svgWidth = max([containerWidth / 2, 300]);
    const svgHeight = max([containerHeight / 2, 300]);
    const innerDimensions = {
      height: svgHeight - (margins * 2),
      width: svgWidth - (margins * 2)
    };

    const maxDataValue = max(data.map(d => d.value));

    const xScale = scaleBand()
      .padding(0.5)
      .domain(data.map(d => d.name))
      .range([margins, svgWidth - margins]);
    const yScale = scaleLinear()
      .domain([0, maxDataValue])
      .range([svgHeight - margins, margins]);

    const scales = {xScale, yScale};

    return (
      <svg 
        className="svg-playground"
        height={svgHeight}
        width={svgWidth}
      >
        <Axes
          innerDimensions={innerDimensions}
          margins={margins}
          scales={scales}
        />
      </svg>
    )
  }
}

export default Dimensions({className: 'dimension'})(Playground);