
const code1 = `
import React, { useState, useEffect } from 'react';

import us from './us_states_20m.json';
import { geoAlbers, geoPath } from 'd3-geo';
import { select } from 'd3-selection';

import './Lower48.css';

// remove Alaska and Hawaii
us.features = us.features.filter(
  d => d.properties.STATE !== "02" && d.properties.STATE !== "15");


export default props => {
  const { height, width } = props.dimensions;
  
  const [stateName, setStateName] = useState('click a state to see name');
  
  // :states-10m.json is set to 975 by 610 viewport
  // .625 keeps the ratio of height to width the same as originally used
  let svgWidth = Math.round(width * 0.95);
  let svgHeight = Math.round(svgWidth * 0.625); 

  let proj = geoAlbers()
    .fitSize([svgWidth, svgHeight], us)
    .translate([svgWidth/2, svgHeight/2]);

  let path = geoPath(proj);


  return (
    <div className="lower48-wrapper">
  
      <p className="lower48-p">{stateName}</p>

      <svg
        className='lower48-svg'
        height={svgHeight}
        width={svgWidth}
      >

        {
          us.features.map( (item, idx) => (
            <path
              key={idx}
              className={
                stateName === item.properties.NAME 
                  ? 'lower48-path-states-active' 
                  : 'lower48-path-states'
              }
              onClick={() => setStateName(item.properties.NAME)}
              d={path(item)}
            />
          ))
        }
        
      </svg>
    
    </div>
  );
};
`;

const tab1 = {
  name: 'Lower48.js',
  code: code1
};

const code2 = `
.lower48-wrapper {
  min-height: 85vh;
  text-align: center;
}
.lower48-svg {
  
  display: block;
  margin: 0 auto;
}
.lower48-p {
  color: var(--grayDark);
  font-size: 5vw;
  margin: 4vw 0 0;
}

.lower48-path-states {
  fill: teal;
  stroke: #333;
}

.lower48-path-states-active {
  fill: orange;
  stroke: #333;
}
`;

const tab2 = {
  name: 'Lower48.css',
  code: code2
};

const code3 = `
'the geojson file was downloaded from'

'https://eric.clst.org/tech/usgeojson/'

'the particular file I used is US States 20m'
`;

const tab3 = {
  name: 'us_states_20m.json',
  code: code3
};

const tabs = [tab1, tab2, tab3];

export default tabs;