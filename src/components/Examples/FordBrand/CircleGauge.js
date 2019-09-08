import React, { useCallback, useLayoutEffect, useState } from 'react';
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

  const { width } = props.dimensions;
  const [innerWidth, setInnerWidth] = useState(Math.round(width * 0.9));
  const svgWidth = Math.round(innerWidth * 0.3);
  
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
  }, [circleNode, innerWidth]); 
 
  useLayoutEffect(() => {
    let diff = innerWidth - (Math.round(width * 0.9));
    
    if (diff < -20 || diff > 20) {
      setInnerWidth(Math.round(width * 0.9))
    }
    
  }, [width]);
  

  let circleBackground = arc()
    .innerRadius(Math.round(svgWidth * 0.3))
    .outerRadius(Math.round(svgWidth * 0.4 ))
    .startAngle(0)
    .endAngle(twoPI);

  let circleForeground = arc()
    .innerRadius(Math.round(svgWidth * 0.25))
    .outerRadius(Math.round(svgWidth * 0.45))
    .startAngle(twoPI * .4)
    .endAngle(twoPI * .4);

  let circleInner = arc()
    .innerRadius(0)
    .outerRadius(Math.round(svgWidth * 0.25))
    .startAngle(0)
    .endAngle(twoPI);

  return (
    <svg 
      height={svgWidth} width={svgWidth}
    >
      <g transform={`translate(${Math.round(svgWidth / 2)},${Math.round(svgWidth / 2)})`}>
        <path
          fill="#777"
          stroke="#333"
          strokeWidth="1"
          d={circleBackground()}
        />
        <path
          ref={circleRef}
          fill="orangered"
          stroke="#333"
          strokeWidth="1"
          d={circleForeground()}
        />
        <path
          fill="none"
          d={circleInner()}
        />
        <text 
          ref={textRef} 
          textAnchor="middle" 
          dy="0"
          style={{fontSize: '4vw', fill: '#333'}}
        ></text>
        <text 
          textAnchor="middle" 
          dy="28px"
          style={{fontSize: '1.5vw', fill: '#333'}}
        >Total Sales</text>
        
      </g>
    </svg>
  );
};

export default CircleGauge;