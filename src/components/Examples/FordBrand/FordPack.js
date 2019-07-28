import React from 'react';

import { pack, hierarchy } from 'd3-hierarchy';
import { scaleSequential } from 'd3-scale';
import { interpolateInferno } from 'd3-scale-chromatic';

import VerticalBar from './VerticalBar.js';
import './Ford.css';

// TODO :: Add a toolbar for hover over each circle
// TODO :: 

const FordPack = props => {
  const { width } = props.dimensions;
  
  const color = scaleSequential([8, 0], interpolateInferno);

  const fordPack = pack()
    .size([ width / 2, width / 2 ])
    .padding(3);

  const root = hierarchy(props.data)
    .sum(d => d[props.year])
    .sort((a,b) => b[props.year] - a[props.year]);
  
  fordPack(root);

  // Code snippet to show text over each circle
  // .append("text").attr("dy", 5)
  // .attr('x', d => d.x - 20)
  // .attr('y', d => d.y)
  // .text( d => d.children === undefined ? d.data.name : '');
  
  return (
    <div className="ford-pack-wrapper">
      <svg 
        className="svg-ford-pack" 
        width={width / 2} 
        height={width / 2}
      >
       {
         root.descendants().map( node => (
           <circle
            key={node.value}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={color(node.height)}
           />
          ))
       }
      </svg>
          
      <VerticalBar
        category={props.category}
        data={props.data}
        dimensions={props.dimensions}
        rankBy={props.rankBy}
        view={props.view}
        year={props.year}
      />
    </div>
  );
};

export default FordPack;