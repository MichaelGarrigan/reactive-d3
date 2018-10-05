import React from 'react';
import {arc} from 'd3-shape';

const Arc = ({shapeConfig}) => {
  console.log('arc:', shapeConfig);
  return (
    // <div>
    //   <line d={arc()(shapeConfig)} stroke="#000" strokeWidth="2px" />
      <rect width="100" height="200" style={{stroke:"#000", fill:"#000", strokeWidth:"2px"}} />
    // </div>
  )
};

export default Arc;