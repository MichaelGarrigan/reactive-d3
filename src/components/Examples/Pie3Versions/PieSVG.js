
import React, { useEffect } from "react";
import Prism from 'prismjs';

import { format } from 'd3-format';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';
import { arc, pie } from 'd3-shape';

import '../../../../node_modules/prismjs/themes/prism-okaidia.css';
import "./Pie3Versions.css";

const Arc = ({ data, index, createArc, colors, format }) => (
  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)} />
    <text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="white"
      fontSize="10"
    >
      {format(data.value)}
    </text>
  </g>
);

const PieSVG = props => {
  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);

  const width = Math.round(props.dimensions.width * 0.3);
  const innerRadius = Math.round(width * 0.25);
  const outerRadius = Math.round(width * 0.5);

  const createPie = pie()
    .value(d => d.value)
    .sort(null);

  const createArc = arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  const colors = scaleOrdinal(schemeCategory10);
  const formatText = format(".2f");
  const data = createPie(props.data);

  return (
    <div className="pie-build-wrapper">
      <div className="pie-chart-wrapper">

        <svg width={width} height={width}>
          <g transform={`translate(${outerRadius}, ${outerRadius})`}>
            {data.map((d, i) => (
              <Arc
                key={i}
                data={d}
                index={i}
                createArc={createArc}
                colors={colors}
                format={formatText}
              />
            ))}
          </g>
        </svg>
      
        <div className="pie-chart-info">
          <p>
            Class based components may be your only option if you are dealing with a legacy project or if your project needs state but does not support hooks.
          </p>
        </div>
      </div>
    

    <div className="pie-code-wrapper">
      <p className="pie-code-title">
        SVG centric React component
      </p>
        
      <pre className="pie-code language-js"> 
        <code className="language-js">
{
`import React from "react";

import { format } from 'd3-format';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';
import { arc, pie } from 'd3-shape';

import "./Pie3Versions.css";

const Arc = ({ data, index, createArc, colors, format }) => (
  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)} />
    <text
      transform={"translate(" + createArc.centroid(data) + ")"}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="white"
      fontSize="10"
    >
      {format(data.value)}
    </text>
  </g>
);

const PieSVG = props => {

  const width = Math.round(props.dimensions.width * 0.3);
  const innerRadius = Math.round(width * 0.25);
  const outerRadius = Math.round(width * 0.5);

  const createPie = pie()
    .value(d => d.value)
    .sort(null);

  const createArc = arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  const colors = scaleOrdinal(schemeCategory10);
  const formatText = format(".2f");
  const data = createPie(props.data);

  return (
    <div className="pie-chart-wrapper" ref={sizeRef}>

      <svg width={width} height={width}>
        <g transform={"translate(" + outerRadius + ", " + outerRadius + ")"}>
          {data.map((d, i) => (
            <Arc
              key={i}
              data={d}
              index={i}
              createArc={createArc}
              colors={colors}
              format={formatText}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default PieSVG;`.trim()
}
        </code>
      </pre>
    </div>

  </div>
  );
};

export default PieSVG;