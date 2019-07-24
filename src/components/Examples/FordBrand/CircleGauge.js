import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { arc } from 'd3-shape';
import { format } from 'd3-format';
import { interpolate } from 'd3-interpolate';
import { select } from 'd3-selection';
import { transition } from 'd3-transition';

const CircleGauge = props => {
  const { actual, name } = props;
  const twoPI = 2 * Math.PI;
  let circleProgress = 0;
  let total = 2393731;
  let formatPercent = format('.0%');

  const [circleNode, setCircleNode] = useState(null);
  const [textNode, setTextNode] = useState(null);
  const [size, setSize] = useState(props.size);

  const circleRef = useCallback(node => {
    setCircleNode(node);
  }, []);

  const textRef = useCallback(node => {
    setTextNode(node);
  }, []);

  let interCircle = interpolate(circleProgress, actual / total);


  useLayoutEffect(() => {
    if (circleNode) {
      transition(name)
        .duration(2000)
        .tween( 'circleProgress', () => {
          return t => {
            circleProgress = interCircle(t);
            select(circleNode).attr('d', circleForeground.endAngle(twoPI * (circleProgress + .4)));
            select(textNode).text(formatPercent(circleProgress));
          }
        });
    }
  }, [circleNode]); 
  

  let circleBackground = arc()
    .innerRadius(60)
    .outerRadius(90)
    .startAngle(0)
    .endAngle(twoPI);

  let circleForeground = arc()
    .innerRadius(50)
    .outerRadius(100)
    .startAngle(twoPI * .4)
    .endAngle(twoPI * .4);

  let circleInner = arc()
    .innerRadius(0)
    .outerRadius(50)
    .startAngle(0)
    .endAngle(twoPI);

  return (
    <svg className="ford-ctrl-circle ford-ctrl-circle-car"
      height={size} width={size}
    >
      <g transform={`translate(${size / 2},${size / 2})`}>
        <path
          fill="#d3d3d3"
          d={circleBackground()}
        />
        <path
          ref={circleRef}
          fill="#ff4500"
          d={circleForeground()}
        />
        <path
          fill="#00000000"
          d={circleInner()}
        />
        <text 
          ref={textRef} 
          textAnchor="middle" 
          dy="0"
          style={{fontSize: '2.5rem', fill: 'white'}}
        ></text>
        <text 
          textAnchor="middle" 
          dy="24px"
          style={{fontSize: '1rem', fill: 'white'}}
        >Total Sales</text>
        
      </g>
    </svg>
  );
};

export default CircleGauge;