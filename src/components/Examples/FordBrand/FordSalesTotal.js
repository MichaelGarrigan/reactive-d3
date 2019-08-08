
import React from 'react';
import { lookupMainCategory } from './helperFunctions.js';
import './Ford.css';

const FordSalesTotal = props => {
  const mainCategory = lookupMainCategory(props.data.children, props.category);

  return (
    <div className="ford-sales-wrapper">
      {
        props.category === "All" 
          ? (
            <div className="ford-sales-total">
              <h3>{`${props.year} Total Sales: ${props.data[props.year + '_rounded']}`}</h3>
            </div>
          )
          : (
            <div className="ford-sales-total">
              <h3>{`${props.year} ${props.category.slice(0, -1)} Sales: ${mainCategory[`${props.year}_rounded`]}`}</h3>
            </div>
          )
      }
    </div>
  );
};

export default FordSalesTotal;