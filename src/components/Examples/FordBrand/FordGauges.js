import React from 'react';
import { sortMainCategoriesByYear } from './helperFunctions.js';

import CircleGauge from './CircleGauge.js';
import CircleGaugeMulti from './CircleGaugeMulti.js';
import FordBar from './FordBar.js';

import './Ford.css';


const FordGauges = props => {
  const sortedCategories = sortMainCategoriesByYear(props.DATA.children, props.year);

  const width = Math.round(props.dimensions.width * 0.9);
  const svgWidth = Math.round(width * 0.2);
  const svgHeight = Math.round(width * 0.12);
  
  return (
    <div className="ford-gague-wrapper">
    {
      props.category === "All"
        ? (
          <div className="ford-3circles-wrapper">
            <div className="ford-circles-icon-wrapper">
              <div 
                className="ford-Trucks-icon"
                style={{height: svgHeight, width: svgWidth, fill: 'none', stroke: '#orangered', strokeWidth: '3px'}}
              ></div>
              <div 
                className="ford-SUVs-icon"
                style={{height: svgHeight, width: svgWidth}}
              ></div>
              <div 
                className="ford-Cars-icon"
                style={{height: svgHeight, width: svgWidth}}
              ></div>
            </div>
            <div className="ford-circle-wrapper">
              {
                sortedCategories.map(item => (
                    <CircleGauge
                      key={item.name}
                      name={item.name}
                      dimensions={props.dimensions}
                      actual={item[`${props.year}_total`]}
                    />
                ))
              }
            </div>
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