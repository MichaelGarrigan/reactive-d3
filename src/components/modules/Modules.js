
import React, { useState } from 'react';

import Organization from './Organization.js';
import TimeScale from './TimeScale.js';
import modulesData from './modulesData.js';
import './Modules.css';


export default ({dimensions}) => {
  const [module, setModule] = useState('');
  
  return (
    <div className="modules-wrapper" >
      
      <div className="modules-title-wrapper"> 
        <Organization dimensions={dimensions} />
        <p className="modules-title">Modules</p>
      </div>

      <div className="modules-summary-wrapper">

        <p className="modules-summary">
          D3 underwent a major change when transitioning from version 3 to version 4. 
        </p>
        <p className="modules-summary">
          Version 3 was a single library imported as d3.
        </p>
        <p className="modules-summary">
          Version 4 structured d3 to modules (microlibraries), so prior to this release you would access methods via d3.scaleLinear but in version 4 you can just say scaleLinear from d3-scale.
        </p>

      </div>

      {
        module ? (
          <div className="module-feature-wrapper">

            <div className="module-feature-title-wrapper">
              <p className="module-feature-title">{module.name}</p>
              <button 
                className="module-feature-title-button"
                onClick={() => setModule('')}
              >X</button>
            </div>

            <div className="module-feature-methods-wrapper">
              {
                
                module.data.modules.map( item => (
                  <div 
                    className="module-feature-method-wrapper" 
                    key={item.name}
                  >
                    <p className="module-feature-method-name">{item.name}</p>
                    <p className="module-feature-method-type">{item.type}</p>
                  </div>
                ))
              }
            </div>

          </div>
        ) : ''
      }

      <div className="modules-flex">

        {
          modulesData.map( (mod, idx) => (
            <div 
              className="module-unit" 
              key={idx}
              onClick={ () => setModule(mod)}
            >
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