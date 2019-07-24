import React, { useState, useCallback, useRef, useEffect, useLayoutEffect } from 'react';

import { pack, hierarchy, nest } from 'd3-hierarchy';
import { select, selectAll } from 'd3-selection';
import { scaleSequential } from 'd3-scale';
import { interpolateInferno } from 'd3-scale-chromatic';

import './Ford.css';

const FordPack = props => {
  const { width, height } = props.dimensions;
  const [svgNode, setSvgNode] = useState(null);

  const color = scaleSequential([8, 0], interpolateInferno);

  const svgRef = useCallback(node => {
      setSvgNode(node);
  }, [svgNode]);

  const fordPack = pack()
    .size([width*.80, width*.80])
    .padding(3);

  const root = hierarchy(props.data)
    .sum(d => d[props.year])
    .sort((a,b) => b[props.year] - a[props.year]);
    
  fordPack(root);

  useLayoutEffect( () => {
    if (svgNode) {
      select(svgNode)
        .selectAll("circle")
        .data(root.descendants())
        .enter()
        .append("circle")
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', d => d.r)
        .attr('fill', d => color(d.height))

        .append("text").attr("dy", 5)
        .attr('x', d => d.x - 20)
        .attr('y', d => d.y)
        .text( d => d.children === undefined ? d.data.name : '');
    }
  }, [svgNode]);

  // console.log(fordPack(root))

  return (
    <div className="ford-pack-wrapper">
      <svg 
        className="svg-ford-pack" 
        ref={svgRef}
        width={width / 2} 
        height={width / 2}
      />
          
      <div className="ford-pack-bar-wrapper"></div>
    </div>
  );
};

export default FordPack;