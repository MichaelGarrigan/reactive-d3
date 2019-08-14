import React from 'react';
import { sortMainCategoriesByYear } from './helperFunctions.js';

import CircleGauge from './CircleGauge.js';
import CircleGaugeMulti from './CircleGaugeMulti.js';
import FordBar from './FordBar.js';

import './Ford.css';


const FordGauges = props => {
  const sortedCategories = sortMainCategoriesByYear(props.DATA.children, props.year);
  
  return (
    <div className="ford-gague-wrapper">
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
        : (
          <div className="ford-circle-bar-wrapper">
            <CircleGaugeMulti
              DATA={props.DATA}
              dimensions={props.dimensions}
              category={props.category}
              year={props.year}
            />
            <FordBar
              DATA={props.DATA}
              dimensions={props.dimensions}
              category={props.category}
              year={props.year}
            /> 
          </div>
        )
      }
    </div>
  ); 
};

export default FordGauges;