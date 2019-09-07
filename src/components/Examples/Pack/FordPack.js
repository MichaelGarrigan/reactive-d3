import React from 'react';
import { sortMainCategoriesByYear } from './helperFunctions.js';

import { pack, hierarchy } from 'd3-hierarchy';
import { scaleSequential } from 'd3-scale';
import { interpolateInferno } from 'd3-scale-chromatic';

import './Ford.css';


const FordPack = props => {
  const sortedCategories = sortMainCategoriesByYear(props.DATA.children, props.year);

  const { width } = props.dimensions;
  const svgWidth = Math.round(width * 0.7);
  
  const color = scaleSequential([8, 0], interpolateInferno);

  const handleFocus = e => {
    console.log('circle: ', e.target)
  }

  let fordPack = pack()
    .size([ svgWidth, svgWidth ])
    .padding(3);

  let root;

  if (props.category === 'All') {

    root = hierarchy(props.DATA)
      .sum(d => d[props.year])
      .sort((a,b) => b[props.year] - a[props.year]);
  
    fordPack(root);
  } else {
    let selectCat;
    for (let obj of sortedCategories) {
      if (props.category === obj.name) {
        selectCat = obj;
      }
    }

    root = hierarchy(selectCat)
      .sum(d => d[props.year])
      .sort((a,b) => b[props.year] - a[props.year]);
  
    fordPack(root);
  }
  
  return (
    <div className="ford-pack-wrapper">
    
      <svg 
        className="svg-ford-pack" 
        width={svgWidth} 
        height={svgWidth}
      >
      {
        root.descendants().map( node => (
          <circle
            key={node.value}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={color(node.height)}
            onFocus={e => handleFocus(e)}
          />
          ))
      }
      </svg>
            
    </div>
  );
};

export default FordPack;