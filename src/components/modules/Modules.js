
import React from 'react';

import Organization from './Organization.js';
import TimeScale from './TimeScale.js';
import modulesData from './modulesData.js';
import './Modules.css';


export default ({dimensions}) => {

  return (
    <div className="modules-wrapper" >
      
      <div className="modules-title-wrapper"> 
        <Organization dimensions={dimensions} />
        <p className="modules-title">Modules</p>
      </div>

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
