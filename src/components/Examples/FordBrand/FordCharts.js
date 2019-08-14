
import React, { useState, useCallback, useLayoutEffect } from 'react';

// import { fordHierarchy } from './FordData.js';

import FordSalesTotal from './FordSalesTotal.js';
import FordGauges from './FordGauges.js';
import FordPack from './FordPack.js';
import FordLine from './FordLine.js';
// import VerticalBar from './VerticalBar.js';

import './Ford.css';

function getDimensionObject(node) {
    const rect = node.getBoundingClientRect();

    return {
        width: rect.width,
        height: rect.height,
    };
}

const FordCharts = props => {

  // const [data, setData] = useState(fordHierarchy);
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
        DATA={props.DATA}
        year={props.year}
      />

      <FordGauges 
        category={props.category}
        DATA={props.DATA}
        dimensions={dimensions}
        selectedItemName={props.selectedItemName}
        year={props.year}
      />
      
      <FordLine 
        category={props.category}
        DATA={props.DATA}
        dimensions={dimensions}
        selectedItemName={props.selectedItemName}
        selectedItemData={props.selectedItemData}
        year={props.year}

        setCategory={props.setCategory}
        setSelectedItemName={props.setSelectedItemName}
        setSelectedItemData={props.setSelectedItemData}
      /> 

      <FordPack 
        category={props.category}
        DATA={props.DATA}
        dimensions={dimensions}
        year={props.year}
      />
  
    </div>
  );
};

export default FordCharts;