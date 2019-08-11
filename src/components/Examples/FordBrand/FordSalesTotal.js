
import React from 'react';
import { lookupMainCategory } from './helperFunctions.js';
import './Ford.css';

const FordSalesTotal = ({category, DATA, year}) => {
  const mainCategory = lookupMainCategory(DATA.children, category);

  return (
    <div className="ford-sales-wrapper">
      {
        category === "All" 
          ? (
            <div className="ford-sales-total">
              <h3>{`${year} Total Sales: ${DATA[`${year}_rounded`]}`}</h3>
            </div>
          )
          : (
            <div className="ford-sales-total">
              <h3>{`${year} ${category.slice(0, -1)} Sales: ${mainCategory[`${year}_rounded`]}`}</h3>
            </div>
          )
      }
    </div>
  );
};

export default FordSalesTotal;