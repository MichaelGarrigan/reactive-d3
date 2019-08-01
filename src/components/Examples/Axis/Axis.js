import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react';
import { scaleTime, scaleLinear } from 'd3-scale';
import { axisBottom, axisRight, axisLeft } from 'd3-axis';
import { select } from 'd3-selection';
import { format } from 'd3-format';
import { timeYear } from 'd3-time';
import './Axis.css';

function getDimensionObject(node) {
  const rect = node.getBoundingClientRect();

  return {
      width: rect.width,
      height: rect.height,
  };
}


const Axis = props => {

  const [dimensions, setDimensions] = useState({width: 960, height: 500});
  const [node, setNode] = useState(null);
  const margin = 20;
  const width = dimensions.width;
  const height = dimensions.height;
   
  const formatNumber = format(".1f");

  const wrapNode = useCallback(node => {
    setNode(node);
  }, []);

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
  }, [] );

  const tenElems = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  

  const basicLinear = scaleLinear([0, 100], [0, width * 0.8]);
  // const basicLinear = scaleLinear().domain([0, 100]).range([0, width * 0.8]);
  const basicXAxis = axisBottom(basicLinear);
  

  const colorLinear = scaleLinear([0, 100], ["brown", "steelblue"]);

  const x = scaleTime()
    .domain([new Date(2010, 7, 1), new Date(2012, 7, 1)])
    .range([0, width * 0.8]);

  const y = scaleLinear()
    .domain([0, 2e6])
    .range([width * 0.3, 0]);

  const xAxis = axisBottom(x)
    .ticks(timeYear)
    .tickSize(-(width * 0.3));

  const yAxis = axisLeft(y)
    .tickSize(-(width * 0.8));
    

  return (
    <div className="axis-wrapper" ref={wrapNode}>

      <div className="axis-example">
        <h3>scaleLinear([0, 100], [0, width * 0.8])</h3>
        <svg
          className="svg-axis"
          height={width * 0.1}
          width={width * 0.9}
        >
          <g 
            transform={`translate(${margin},${margin * 2})`}
            ref={node => select(node).call(basicXAxis)}
          />
        </svg>
      </div>

      <div className="axis-example">
        <h3>scaleLinear([0, 100], [0, width * 0.8])</h3>
        <svg
          className="svg-axis"
          height={width * 0.2}
          width={width * 0.9}
        >
          <g transform={`translate(${margin},${margin * 2})`}>
            <g 
              transform={`translate(0,${width * 0.1})`}
              ref={node => select(node).call(basicXAxis)}
            />
              {
                tenElems.map(num => (
                  <rect
                    key={num}
                    width="20"
                    height={width * 0.1}
                    x={basicLinear(num)}
                    y="0"
                    fill={colorLinear(num)}
                  />
                ))
              }
            </g>
        </svg>
      </div>

      <div className="axis-example">
        <h3>scaleLinear([0, 100], [0, width * 0.8])</h3>
        <svg
          className="svg-axis"
          height={width * 0.4}
          width={width * 0.9}
        >
          <g transform={`translate(${margin * 3},${margin * 2})`}>
            <g 
              transform={`translate(0,${width * 0.3})`}
              ref={node => select(node).call(xAxis)}
            />
            <g ref={node => select(node).call(yAxis)} />
            </g>
        </svg>
      </div>
      
    </div>
  );

};

export default Axis;