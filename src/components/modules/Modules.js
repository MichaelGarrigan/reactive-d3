
import React from 'react';

import TimeScale from './TimeScale.js';
import modulesData from './modulesData.js';

import useElementSize from '../../useElementSize.js';

import './Modules.css';

export default props => {

  let [ sizeRef, dimensions ] = useElementSize();

  return (
    <div className="modules-wrapper" ref={sizeRef}>
      <TimeScale 
        dimensions={dimensions}
      />

      <div className="modules-flex">
        {
          modulesData.map( (item, idx) => (
              
            <div className="module-wrapper" key={idx}>
              <div className="module-header">
                <h2 className="module-title">{item.name}</h2>
              </div>
              <div className="module-body">
                {
                  item.subs.map( sub => {
                    return <div key={sub} className="module-body-item">{sub}</div>;
                  })
                }
              </div>
            </div>
          ))  
        }
      </div>
    </div>
  )
};
