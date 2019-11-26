import React, { useState } from 'react';
import * as topojson from 'topojson-client';

import states from '../../../../node_modules/us-atlas/us/states-10m.json';

import { geoPath } from 'd3-geo';
import { select } from 'd3-selection';
import TitleBanner from '../titleBanner/TitleBanner.js';

import './Lower48.css';


export default props => {
  
  const [stateName, setStateName] = useState('click a state to see name');
  
  // calc actual size of projection
  let bbox = topojson.bbox(states);
  let width = bbox[2] + 30;
  let height = bbox[3] - bbox[1] + 30;
  
  const path = geoPath();

  // remove Alaska and Hawaii
  states.objects.states.geometries = states.objects.states.geometries.filter(d => d.id !== "02" && d.id !== "15");
    

  return (
    <div className="lower48-wrapper">
      <TitleBanner title='US Lower 48 States' />
      <p className="lower48-p">{stateName}</p>
      <svg
        className='lower48-svg'
        height={height}
        width={width}
      >
      
        {
          topojson.feature(states, states.objects.states).features.map( (item, idx) => {
            
            return (
              <path
                key={idx}
                className={
                  stateName === item.properties.name 
                    ? 'lower48-path-states-active' : 'lower48-path-states'
                  }
                onClick={ () => setStateName(item.properties.name) }
                ref={ node => select(node).attr('d', () => path(item)) }
              />
            )
          })
        }
          
        <path
          fill='none'
          stroke='black'
          strokeLinejoin='round'
          ref={
            node => select(node)
              .datum(
                topojson.mesh(
                  states, 
                  states.objects.states, 
                  // (a,b) => a === b // only outer border
                  // (a,b) => a !== b // only inner border
                )
                )
              .attr('d', path)
          }
        />
        
      </svg>
    </div>
  );
};