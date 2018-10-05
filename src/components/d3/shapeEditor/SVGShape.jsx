

import React from 'react';
import Arc from '../shapes/Arc.jsx';
import {symbol, symbolCross} from 'd3-shape';
import './SVGShape.css';


class SVGShape extends React.Component {
  state = {
    
  };
  
  
  render() {
    const width = 600;
    const height = 400;
    return (
      <svg className='svg-shape' height={height} width={width}>
        
        {/* <rect width="100" height="200" style={{stroke:"#000", fill:"#000", strokeWidth:"2px"}} /> */}
        <g style={{transform:`translate(${width/2}px, ${height/2}px)`}}>
          <Arc shapeConfig={this.props.shapeConfig} />
        </g>
      </svg>
    );
  }
}

export default SVGShape;