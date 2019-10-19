
import React from 'react';

import BooksSvg from '../BooksSvg.js';
import '../Resources.css';

export default props => {

  return (
    <div className="resources-wrapper">

      <div className="resources-title-wrapper"> 
        <BooksSvg dimensions={props.dimensions} />
        <p className="resources-title">People</p>
      </div>
    </div>
  );
};