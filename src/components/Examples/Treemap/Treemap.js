import React, { useLayoutEffect, useRef, useEffect } from 'react';

import { format } from 'd3-format';
import { hierarchy, treemap, treemapResquarify } from 'd3-hierarchy';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';

import TitleBanner from '../titleBanner/TitleBanner.js';
import data from './TreemapData.js';
import './Treemap.css';


const Treemap = props => {
  useLayoutEffect( () => {
    return () => props.setRoute([]);
  });

  const height = 1060, 
        width = 975;

  const ref = useRef(null);

  const color = scaleOrdinal(schemeCategory10);
  const formatText = format(",d");

  const root = hierarchy(data)
    .sum(d => d.size)
    .sort( (a, b) => b.size - a.size);
  
  const treemap = treemap()
    .tile(treemapResquarify)
    .size([width, height])
    .round(true)
    .padding(1);

  treemap(root);
  
    useEffect( () => {
        const svg = select(ref.current);
        
        const leaf = svg.selectAll("g")
          .data(root.leaves())
          .join("g")
          .attr("transform", d => `translate(${d.x0},${d.y0})`);

        leaf.append("rect")
          .attr("id", d => d.data.name) 
          .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
          .attr("fill-opacity", 0.6)
          .attr("width", d => d.x1 - d.x0)
          .attr("height", d => d.y1 - d.y0);

        leaf.append("clipPath")
        .attr("id", d => `clip-${d.data.name}`)
        .append("use")
          .attr("xlink:href", d => `#${d.data.name}`);

        leaf.append("text")
          .attr("clip-path", d => `url(#clip-${d.data.name})`)
        .selectAll("tspan")
        .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g).concat(formatText(d.value)))
        .join("tspan")
          .attr("x", 3)
          .attr("y", (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
          .attr("fill-opacity", (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
          .text(d => d);
      });
  

  return (
    <div className="treemap-wrapper">
      <TitleBanner title='Treemap Basic' />
      <svg 
        className="svg-treemap"
        height={height}
        width={width}
        ref={ref}
      />
    </div>
  )
};

export default Treemap;