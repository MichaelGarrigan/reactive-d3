
import React, { useEffect } from 'react';
import Prism from 'prismjs';

import { axisBottom, axisTop } from 'd3-axis';
import { scaleOrdinal, scaleTime } from 'd3-scale';
import { select } from 'd3-selection';

import './Modules.css';
import '../../../node_modules/prismjs/themes/prism-okaidia.css';

export default props => {
  
  const svgWidth = Math.round(props.dimensions.width * 0.9);
  const svgHeight = Math.round(svgWidth * 0.1);

  const marginTop = Math.round(svgHeight * 0.4);
  const marginLeft = Math.round(svgWidth * 0.05);

  let now = Date.now();
  let ts1 = scaleTime()
    .domain([now - 60 * 60 * 1000, now])
    .range([0, svgWidth - (marginLeft * 2)])
    .nice();

  let ts2 = scaleTime()
    .domain([now - 24 * 60 * 60 * 1000, now])
    .range([0, svgWidth - (marginLeft * 2)])
    .nice();

  let ts3 = scaleTime()
    .domain([now - 7 * 24 * 60 * 60 * 1000, now])
    .range([0, svgWidth - (marginLeft * 2)])
    .nice();

  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);


  return (
    <div className="timeScale-wrapper">

      <h2>timeScale</h2>

      <div className="ts-example">
        <p className="ts-summary">
          A scale to display 1 hour of time
        </p>
        
        <pre className="ts-code"> 
          <code className="language-js">
{
`// left side of axis is current time - 1 hour
// right side of axis is current time
let t = Date.now(); // current time is milliseconds from epoch 
              
scaleTime()
  .domain( [t - 60 * 60 * 1000, t] )
  .range( [0, width] )
  .nice()`.trim()
}
          </code>
        </pre>
        <svg
          className="ts-svg"
          height={svgHeight}
          width={svgWidth}
        >
          <g 
            className="ts-g" 
            transform={`translate(${marginLeft},${marginTop})`}
            ref={node => select(node).call(axisBottom(ts1))}
          />
        </svg>
      </div>

      <div className="ts-example">
        <p className="ts-summary">
          A scale to display 1 day of time
        </p>
        
        <pre className="ts-code"> 
          <code className="language-js">
{
`// left side of axis is current time - 1 day
// right side of axis is current time
let t = Date.now(); // current time is milliseconds from epoch 
              
scaleTime()
  .domain( [t - 24 * 60 * 60 * 1000, t] )
  .range( [0, width] )
  .nice()`.trim()
}
          </code>
        </pre>
        <svg
          className="ts-svg"
          height={svgHeight}
          width={svgWidth}
        >
          <g 
            className="ts-g" 
            transform={`translate(${marginLeft},${marginTop})`}
            ref={node => select(node).call(axisBottom(ts2))}
          />
        </svg>
      </div>

      <div className="ts-example">
        <p className="ts-summary">
          A scale to display 1 week of time
        </p>
        
        <pre className="ts-code"> 
          <code className="language-js">
{
`// left side of axis is current time - 1 week
// right side of axis is current time
let t = Date.now(); // current time is milliseconds from epoch 
              
scaleTime()
  .domain( [t - 7 * 24 * 60 * 60 * 1000, t] )
  .range( [0, width] )
  .nice()`.trim()
}
          </code>
        </pre>
        <svg
          className="ts-svg"
          height={svgHeight}
          width={svgWidth}
        >
          <g 
            className="ts-g" 
            transform={`translate(${marginLeft},${marginTop})`}
            ref={node => select(node).call(axisBottom(ts3))}
          />
        </svg>
      </div>

      <div className="ts-example">
        <p className="ts-summary">
          A cheatsheet for time units in milliseconds
        </p>
        
        <pre className="ts-code"> 
          <code className="language-js">
{
`let second = 1000;
let minute = 60 * second; //       60000
let hour = 60 * minute;   //     3600000
let day = 24 * hour;      //    86400000
let week = 7 * day;       //   604800000
let month = 30 * day;     //  2592000000
let year = 365 * day;     // 31536000000`.trim()
}
          </code>
        </pre>
        
      </div>

    </div>
  )
};