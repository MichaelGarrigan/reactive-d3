import React from 'react';
import { schemePaired } from 'd3-scale-chromatic';

import { sortMainCategoriesByYear } from './helperFunctions.js';

import CircleGauge from './CircleGauge.js';
import CircleGaugeMulti from './CircleGaugeMulti.js';
import FordBar from './FordBar.js';

import './Ford.css';

const colors = [ schemePaired[6], schemePaired[2], schemePaired[4] ];


export default props => {
  const sortedCategories = sortMainCategoriesByYear(props.DATA.children, props.year);

  const width = props.dimensions.width;
  const sectionWidth = Math.round( (width * 0.95) * 0.8);
  const gaugeWidth = Math.round(sectionWidth * 0.3);
  const svgWidth = Math.round(sectionWidth * 0.25);
  const svgHeight = Math.round(svgWidth * 0.6);
  
  return (
    <div className="ford-gague-wrapper">
    {
      props.category === "All"
        ? (
          <div className="ford-3circles-wrapper">
            <div className="ford-circles-icon-wrapper">
              <div 
                className="ford-truck-icon"
                style={{height: svgHeight, width: svgWidth}}
              ></div>
              <div 
                className="ford-suv-icon"
                style={{height: svgHeight, width: svgWidth}}
              ></div>
              <div 
                className="ford-car-icon"
                style={{height: svgHeight, width: svgWidth}}
              ></div>
            </div>
            <div className="ford-circle-wrapper">
              {
                sortedCategories.map( (item, idx) => (
                    <CircleGauge
                      key={item.name}
                      name={item.name}
                      color={colors[idx]}
                      width={gaugeWidth}
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