
import React, { useEffect } from 'react';

import BooksSvg from '../BooksSvg.js';
import '../Resources.css';

export default props => {
  
  useEffect( () => {
    return () => props.setRoute([]);
  }, []);

  return (
    <div className="resources-wrapper">

      <div className="resources-title-wrapper"> 
        <BooksSvg dimensions={props.dimensions} />
        <p className="resources-title">People</p>
      </div>
    </div>
  );
};