
import React from 'react';

import './Summary.css';

export default () => (
  <div className="clocks-summary-wrapper">
    <p className="clocks-summary-p">
      This example is an aggregation of bar, line and pie charts. The data for this chart comes from https://www.best-selling-cars.com/usa/2018-full-year-usa-ford-sales-americas-favorite-car-brand.
    </p>

    <p className="clocks-summary-p">
      The file helperFunctions.js contains functions to compare and sort the data based on which buttons have been selected. The data (which is in FordData.js) is structured in a hierarchical fashion, where there is a children key which contains an array of objects
    </p>

  </div>
);