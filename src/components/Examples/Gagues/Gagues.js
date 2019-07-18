import React, { useState, useLayoutEffect } from 'react';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { arc, area } from 'd3-shape';
import { interpolate } from 'd3-interpolate';
import { interval } from 'd3-time';
import { transition } from 'd3-transition';
import TitleBanner from '../titleBanner/TitleBanner';

import './Gagues.css';


const Gagues = props => {

  useLayoutEffect( () => {
    return () => props.setRoute([]);
  });

  let height = 800,
      width = 800,
      radius = Math.min(width, height)/2,
      thickness = 25,
      pi = Math.PI * 2;
  
  const [endG, setEndG] = useState(pi);
  const [endH, setEndH] = useState(pi);

  // Draw the outer circle.
  let arcG = arc()
    .startAngle(0)
    .endAngle(pi)
    .innerRadius(250)
    .outerRadius(300);

  let arcH = arc()
    .startAngle(0)
    .endAngle(pi)
    .innerRadius(200)
    .outerRadius(250);

  const arcTween = (newAngle, node) => {
    return d => {
      let interp = interpolate(d.endAngle, newAngle);
      return time => {
        d.endAngle = interpolate(time);
        return node(d);
      }
    }
  }

  const changeAngle = (angle, node) => {
    arcTween(angle, node);
  }

  return (
    <div className="gague-wrapper">
      <TitleBanner title='Circle Gague #1' />
      <button onClick={changeAngle} >End Angle</button>
      <div className="gague-svg-wrapper">
        <svg 
          id="svg-gague"
          height={height}
          width={width}
        >
          <g transform={`translate(${width / 2},${height / 2})`} >
            <path
              className="arcG"
              d={arcG()}
              ref={node => changeAngle(pi * Math.random(), select(node))}
            />
            <path
              className="arcH"
              d={arcH()}
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Gagues;