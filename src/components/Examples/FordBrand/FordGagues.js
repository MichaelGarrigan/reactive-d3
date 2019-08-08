import React, { Fragment } from 'react';
import { sortMainCategoriesByYear, lookupMainCategory } from './helperFunctions.js';
import CircleGauge from './CircleGauge.js';

import './Ford.css';

const FordGagues = props => {
  const mainCategory = lookupMainCategory(props.data.children, props.category);
  const sortedCategories = sortMainCategoriesByYear(props.data.children, props.year);
  
  return (
    <div>
    {
      props.category === "All"
        ? (
          <div className="ford-3circles-wrapper">
            {
              sortedCategories.map(item => (
                <div 
                  className="ford-circle-wrapper"
                  key={item.name}
                >
                  <p className="ford-circle-p">
                    {item.name}
                  </p>
                  <CircleGauge
                    name={item.name}
                    dimensions={props.dimensions}
                    actual={item[`${props.year}_total`]}
                  />
                </div>
              ))
            }
          </div>
        )
        : ""
      }
    </div>
  ); 
};

export default FordGagues;