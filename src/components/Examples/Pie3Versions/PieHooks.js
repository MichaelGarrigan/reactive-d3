
import React, { useEffect, useRef } from "react";
import Prism from 'prismjs';

import { format } from 'd3-format';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';
import { arc, pie } from 'd3-shape';

import '../../../../node_modules/prismjs/themes/prism-okaidia.css';
import "./Pie3Versions.css";

export default props => {
  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);

  const width = Math.round(props.dimensions.width * 0.3);
  const innerRadius = Math.round(width * 0.25);
  const outerRadius = Math.round(width * 0.5);

  const gRef = useRef(null);

  const createPie = pie()
    .value(d => d.value)
    .sort(null);

  const createArc = arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  const colors = scaleOrdinal(schemeCategory10);
  const formatText = format(".2f");

  useEffect(
    () => {
      const data = createPie(props.data);
      const group = select(gRef.current);
      const groupWithData = group.selectAll("g.arc").data(data);

      groupWithData.exit().remove();

      const groupWithUpdate = groupWithData
        .enter()
        .append("g")
        .attr("class", "arc");

      const path = groupWithUpdate
        .append("path")
        .merge(groupWithData.select("path.arc"));

      path
        .attr("class", "arc")
        .attr("d", createArc)
        .attr("fill", (d, i) => colors(i));

      const text = groupWithUpdate
        .append("text")
        .merge(groupWithData.select("text"));

      text
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("transform", d => `translate(${createArc.centroid(d)})`)
        .style("fill", "white")
        .style("font-size", 10)
        .text(d => formatText(d.value));
    },
    [props.data]
  );

  return (
    <div className="pie-build-wrapper">
      <div className="pie-chart-wrapper">

      <svg width={width} height={width}>
        <g
          ref={gRef}
          transform={`translate(${outerRadius}, ${outerRadius})`}
        />
      </svg>

      <div className="pie-chart-info">
          <p>
            Hooks provide a more succinct version of lifecycle methods and will allow multiple 'useEffect' or 'useRef' to be used in a component.
          </p>
          <p>
            We also have the option to make custom hooks and seperate the hooks into seperate files or modules.
          </p>
        </div>
      </div>

      <div className="pie-code-wrapper">
        <p className="pie-code-title">
          SVG centric React component
        </p>
          
        <pre className="pie-code language-js"> 
          <code className="language-js">
{`

import React, { useEffect, useRef } from "react";

import { format } from 'd3-format';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';
import { arc, pie } from 'd3-shape';

import useElementSize from '../../../useElementSize.js';
import "./Pie3Versions.css";

export default props => {
  const [sizeRef, dimensions] = useElementSize();

  const width = Math.round(dimensions.width * 0.3);
  const innerRadius = Math.round(width * 0.25);
  const outerRadius = Math.round(width * 0.5);

  const gRef = useRef(null);

  const createPie = pie()
    .value(d => d.value)
    .sort(null);

  const createArc = arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  const colors = scaleOrdinal(schemeCategory10);
  const formatText = format(".2f");

  useEffect(
    () => {
      const data = createPie(props.data);
      const group = select(gRef.current);
      const groupWithData = group.selectAll("g.arc").data(data);

      groupWithData.exit().remove();

      const groupWithUpdate = groupWithData
        .enter()
        .append("g")
        .attr("class", "arc");

      const path = groupWithUpdate
        .append("path")
        .merge(groupWithData.select("path.arc"));

      path
        .attr("class", "arc")
        .attr("d", createArc)
        .attr("fill", (d, i) => colors(i));

      const text = groupWithUpdate
        .append("text")
        .merge(groupWithData.select("text"));

      text
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("transform", d => "translate(" + createArc.centroid(d) + ")")
        .style("fill", "white")
        .style("font-size", 10)
        .text(d => formatText(d.value));
    },
    [props.data]
  );

  return (
    <div className="pie-build-wrapper" ref={sizeRef}>
      <div className="pie-chart-wrapper">

      <svg width={width} height={width}>
        <g
          ref={gRef}
          transform={"translate(" + outerRadius + ", " +  outerRadius + ")"}
        />
      </svg>
    </div>
   </div>
  );
};
`.trim()
}
          </code>
      </pre>
    </div>

  </div>
  );
};