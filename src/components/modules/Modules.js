
import React, { useState, useLayoutEffect, useCallback } from 'react';

import TimeScale from './TimeScale.js';
import modulesData from './modulesData.js';

function getDimensionObject(node) {
  const rect = node.getBoundingClientRect();

  return {
      width: rect.width,
      height: rect.height,
  };
}


import './Modules.css';

export default props => {
  const [dimensions, setDimensions] = useState({width: 960, height: 500});
  const [node, setNode] = useState(null);

  const wrapRef = useCallback(node => {
      setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() => {
          let {width, height} = getDimensionObject(node);
          setDimensions({ 
            width: Math.round(width), 
            height: Math.round(height) 
          })
        });
      
      measure();

      window.addEventListener("resize", measure);

      return () => { window.removeEventListener("resize", measure); };
      }
  }, [node]);

  return (
    <div className="modules-wrapper" ref={wrapRef}>
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
