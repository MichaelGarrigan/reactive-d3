
import React from 'react';
import { schemePaired } from 'd3-scale-chromatic';
import { lookupMainCategory } from './helperFunctions.js';
import './Ford.css';

export default ({category, DATA, year}) => {
  const mainCategory = lookupMainCategory(DATA.children, category);

  return (
    <div className="ford-sales-wrapper">
      {
        category === "All" 
          ? (
            <div className="ford-sales-total" style={{color: schemePaired[1]}}>
              {`${year} Total Sales: ${DATA[`${year}_rounded`]}`}
            </div>
          )
          : (
            <div className="ford-sales-total" style={{color: schemePaired[1]}}>
              {`${year} ${category.slice(0, -1)} Sales: ${mainCategory[`${year}_rounded`]}`}
            </div>
          )
      }
    </div>
  );
};