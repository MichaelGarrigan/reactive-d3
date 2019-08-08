
import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react';

import { fordHierarchy } from './FordData.js';

import FordSalesTotal from './FordSalesTotal.js';
import FordGagues from './FordGagues.js';
import FordPack from './FordPack.js';
// import FordLine from './FordLine.js';

import './Ford.css';

function getDimensionObject(node) {
    const rect = node.getBoundingClientRect();

    return {
        width: rect.width,
        height: rect.height,
    };
}

const FordCharts = props => {

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
    <div className="ford-charts-wrapper" ref={wrapRef}>

      <FordSalesTotal
        category={props.category}
        data={props.data}
        year={props.year}
      />

      <FordGagues 
        category={props.category}
        data={props.data}
        dimensions={dimensions}
        year={props.year}
      />
      
      <FordPack 
        category={props.category}
        data={props.data}
        dimensions={dimensions}
        featuredItem={props.featuredItem}
        rankBy={props.rankBy}
        year={props.year}
      />
      {/* <FordLine 
        category={category}
        data={data}
        dimensions={dimensions}
        featuredItem={featuredItem}
        year={year}
        /> */
      }
  
    </div>
  );
};

export default FordCharts;