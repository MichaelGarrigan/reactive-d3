import React, { useCallback, useLayoutEffect, useEffect, useRef, useState } from 'react';

import { arc } from 'd3-shape';
import { schemeTableau10 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';

import { lookupMainCategory } from './helperFunctions.js';

export default props => {
  const { category, DATA, year } = props;
  
  const width = props.dimensions.width;
  const sectionWidth = Math.round( (width * 0.95) * 0.8);
  const svgWidth = Math.round(sectionWidth * 0.4);
  const svgHeight = Math.round(sectionWidth * 0.4);
  
  let segs = [];
  const twoPI = 2 * Math.PI;

  const categoryData = lookupMainCategory(DATA.children, category);
  categoryData.children = categoryData.children.sort( (a,b) => b[year] - a[year]);
  
  let total = categoryData[`${year}_total`];

  let spaces = categoryData.children.length;
  let spaceWidthPercent = 10 / spaces;

  let gap = (spaceWidthPercent * 0.01) * total;
  let gapInPI = Number(Math.round(((gap / total) * twoPI)+'e3')+'e-3');
  

  categoryData.children.forEach( item => {
    let chunk = (item[year] - gap) / total;
    let chunkInPI = chunk * twoPI;
    
    segs.push(Number(Math.round(chunkInPI+'e3')+'e-3') )
  })
  
  let start = 0;
  let end;
  let arcFun = [];
  segs.forEach( (item, idx) => {
  
    end = start + item;
    
    let circleForeground = arc()
      .innerRadius(Math.round(svgWidth * 0.25))
      .outerRadius(Math.round(svgWidth * 0.45))
      .startAngle(start)
      .endAngle(end);

    arcFun.push( circleForeground);

    start = Number(Math.round((end + gapInPI)+'e3')+'e-3'); 
  })

  let circleBackground = arc()
    .innerRadius(0)
    .outerRadius(Math.round(svgWidth * 0.35 ))
    .startAngle(0)
    .endAngle(twoPI);

  return (
    <svg 
      height={svgHeight} width={svgWidth}
    >
      <g transform={`translate(${Math.round(svgWidth / 2)},${Math.round(svgHeight / 2)})`}>
        <path
          fill="#777"
          stroke="#333"
          strokeWidth="1"
          d={circleBackground()}
        />
        {
          arcFun.map( (item, idx) => (
              <path
                key={idx + ""}
                fill={schemeTableau10[idx]}
                stroke="#333"
                strokeWidth="1"
                d={item()}
              />
            )
          )
        }
        
      </g>
    </svg>
  );
};