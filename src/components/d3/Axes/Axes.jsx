import React from 'react';
import Axis from './Axis.jsx';

const Axes = ({ scales, margins, innerDimensions }) => {
  const { height, width } = innerDimensions;

  const xProps = {
    orient: 'Bottom',
    scale: scales.xScale,
    translate: `translate(0, ${height + margins})`,
    tickSize: height
  };

  const yProps = {
    orient: 'Left',
    scale: scales.yScale,
    translate: `translate(${margins}, 0)`,
    tickSize: width
  };

  return (
    <g>
      <Axis {...xProps} />
      <Axis {...yProps} />
    </g>
  );
};

export default Axes;