
import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react';
import { axisBottom, axisLeft } from 'd3-axis';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { line, curveLinear } from 'd3-shape';
import { range } from 'd3-array';
import { randomUniform } from 'd3-random';
 
import './LineChart.css';

// const curveTypes = {
//   'curveLinear': curveLinear, 'curveLinearClosed': curveLinearClosed,
//   'curveBasis': curveBasis, 'curveBasisClosed': curveBasisClosed, 
//   'curveBasisOpen': curveBasisOpen, 'curveBundle': curveBundle,
//   'curveCardinal': curveCardinal, 'curveCardinalClosed': curveCardinalClosed, 
//   'curveCardinalOpen': curveCardinalOpen, 'curveCatmullRom': curveCatmullRom, 
//   'curveCatmullRomClosed': curveCatmullRomClosed, 'curveCatmullRomOpen': curveCatmullRomOpen, 'curveMonotoneX': curveMonotoneX, 'curveMonotoneY': curveMonotoneY,
//   'curveNatural': curveNatural, 'curveStep': curveStep, 
//   'curveStepAfter': curveStepAfter, 'curveStepBefore': curveStepBefore
// };

function getDimensionObject(node) {
  const rect = node.getBoundingClientRect();
  return {
      width: rect.width,
      height: rect.height,
  };
}
 
const randomizeData = () => range(20).map(d => ({ "y": randomUniform(1)() }));

const LineChart = props => {

  const [curve, setCurve] = useState(curveLinear)
  const [dataRandom, setDataRandom] = useState(randomizeData());
  const [dimensions, setDimensions] = useState({width: 960, height: 500});
  const [node, setNode] = useState(null);

  const wrapRef = useCallback(node => { setNode(node); }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() => {
          let {width, height} = getDimensionObject(node);
          setDimensions({ 
            width: Math.round(width), 
            height: Math.round(height) 
          })
        });
      
      measure();

      window.addEventListener("resize", measure);

      return () => { window.removeEventListener("resize", measure); };
      }
  }, [node]);


  useEffect( () => {
    return () => props.setRoute([]);
  }, []);
  
  const svgWidth = Math.round(dimensions.width * 0.9);
  const svgHeight = Math.round(svgWidth * 0.5);
  const marginWidth = Math.round(svgWidth * 0.06);
  const marginHeight = Math.round(svgHeight * 0.06);
  
  const xScale = scaleLinear()
    .domain([0, 20])
    .range([0, svgWidth - (marginWidth * 2)]); 

  const yScale = scaleLinear()
    .domain([0, 1]) 
    .range([svgHeight - (marginHeight * 2), 0]);

  const l = line()
    .x( (d, i) => xScale(i) ) 
    .y( d => yScale(d.y) ) 
    .curve(curveLinear);

  return (
    <div className="line-chart-wrapper" ref={wrapRef}>
      <svg className="svg-line-chart" 
        height={svgHeight} 
        width={svgWidth} 
      >
        <g transform={`translate(${marginWidth},${marginHeight})`}>
          <g
            className="line-xAxis" 
            transform={`translate(0,${svgHeight - (marginHeight * 2)})`}
            ref={node => select(node).call(axisBottom(xScale))} 
          />
          <g 
            className="line-yAxis"
            ref={node => select(node).call(axisLeft(yScale))}
          />
          <path
            className="line"
            ref={node => select(node).datum(dataRandom).attr("d", l)}
          />
          {
            dataRandom.map( (data, idx) => (
              <circle 
                key={data.y}
                className="dot"
                cx={xScale(idx)}
                cy={yScale(data.y)}
                r="5"
              />
            ))
          }
        </g>
      </svg>
    </div>
  )
}

  export default LineChart;