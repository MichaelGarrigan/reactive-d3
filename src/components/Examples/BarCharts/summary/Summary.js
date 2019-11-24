
import React from 'react';

import './Summary.css';

export default () => (
  <div className="barcharts-summary-wrapper">
    <p className="barcharts-summary-p">
      Here we are showcasing two styles of bar charts. 
    </p>

    <p className="barcharts-summary-p">
      Frequency of Letters:  
    </p>

    <p className="barcharts-summary-p">
      This is a very traditional bar chart with two axis and a hover listener over each bar which also displays the exact data in a 'text' element in an empty spot at the top of the svg.
    </p>

    <p className="barcharts-summary-p">
      States Population:
    </p>

    <p className="barcharts-summary-p">
      This chart utilizes a single axis and has a horizontal layout. Also we have some d3-geo work showing an outline of each state.
    </p>
  </div>
);