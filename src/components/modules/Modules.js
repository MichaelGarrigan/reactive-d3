
import React from 'react';
import axios from 'axios';

import TimeScale from './TimeScale.js';
import modulesData from './modulesData.js';

import useElementSize from '../../useElementSize.js';

import './Modules.css';

import * as i from 'd3-zoom';

const keys = Object.keys(i);

const dict = keys.map( (item, idx) => {
  return (
    {
      name: item,
      type: typeof i[item]
    }
  )
});

const obj = {
  name: 'd3-zoom',
  version: '1.8.3',
  modules: dict
};


export default props => {

  let [ sizeRef, dimensions ] = useElementSize();

  let call = () => {
    axios({
      method: 'post',
      url: '/d3',
      data: {name: JSON.stringify(obj)}
    });
  };
  

  return (
    <div className="modules-wrapper" ref={sizeRef}>
      <button onClick={ () => call() }>FILE</button>


      <div className="modules-flex">

        {
          modulesData.map( (mod, idx) => (
            <div className="module-unit" key={idx}>
              <div className="module-item-title">{mod.name}</div>
              <div className="module-item-version">{`version: ${mod.data.version}`}</div>
              <div className="module-item-version">{`method count: ${mod.data.modules.length}`}</div>
            </div>
          ))
        }

      </div>

      <TimeScale 
        dimensions={dimensions}
      />

    </div>
  )
};
