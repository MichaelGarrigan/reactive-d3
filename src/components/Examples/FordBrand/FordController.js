import React, {  } from 'react';


import CircleGauge from './CircleGauge.js';

import './Ford.css';

const salesData = {
  'All': {
    '2017': '2.47 M',
    '2018': '2.39 M'
  },
  'Cars': {
    '2017': '555 K',
    '2018': '457 K'
  },
  'SUVs': {
    '2017': '796 K',
    '2018': '797 K'
  },
  'Trucks': {
    '2017': '1.12 M',
    '2018': '1.13 M'
  }
};

const FordController = props => {

  const size = 200;
  

  return (
    <div className="ford-controller-wrapper">

      <div className="ford-controller-button-wrapper">

        <div className="ford-controller-year-button-wrapper">
          <button 
            className="ford-controller-button"
            onClick={event => props.setYear(event.target.value)}
            value="2018"
          >2018</button>
          <button 
            className="ford-controller-button"
            onClick={event => props.setYear(event.target.value)}
            value="2017"
          >2017</button>
        </div>

        <div className="ford-controller-category-button-wrapper">
          <button 
            className="ford-controller-button"
            onClick={event => props.setCategory(event.target.value)}
            value="All"
          >All</button>
          <button 
            className="ford-controller-button"
            onClick={event => props.setCategory(event.target.value)}
            value="Cars"
          >Cars</button>
          <button 
            className="ford-controller-button"
            onClick={event => props.setCategory(event.target.value)}
            value="SUVs"
          >SUVs</button>
          <button 
            className="ford-controller-button"
            onClick={event => props.setCategory(event.target.value)}
            value="Trucks"
          >Trucks</button>
        </div>

        <div className="ford-controller-sales-data-wrapper">
          {
            props.category === "All"
              ? <p>{`${props.year} Total Sales`}</p>
              : <p>{`${props.year} ${props.category.slice(0, -1)} Sales`}</p>
          }
          { salesData[props.category][props.year] }
        </div>        

        <div className="ford-controller-sales-circles-or-buttons-wrapper">
          {
            props.category === "All"
              ? (
                <div className="ford-controller-three-circles-wrapper">
                  <div className="ford-controller-circle-wrapper">
                    <p>Cars</p>
                    <CircleGauge
                      name="cars"
                      size={size}
                      actual={457414}
                    />
                  </div>
                  <div className="ford-controller-circle-wrapper">
                    <p>SUVs</p>
                    <CircleGauge
                      name="suvs"
                      size={size}
                      actual={797238}
                    />
                  </div>
                  <div className="ford-controller-circle-wrapper">
                    <p>Trucks</p>
                    <CircleGauge
                      name="trucks"
                      size={size}
                      actual={1139079}
                    />
                  </div>
                  <div className="ford-controller-circle-wrapper">
                  
                  </div>
                  <div className="ford-controller-circle-wrapper">
                  
                  </div>
                </div>
              )
              : (
                <div className="ford-controller-rank-by-button-wrapper">
                  <button 
                    className="rank-by-button"
                    onClick={event => props.setRankBy(event.target.value)}
                    value="Sales Total"
                  >Sales Total</button>
                  <button 
                    className="rank-by-button"
                    onClick={event => props.setRankBy(event.target.value)}
                    value="Yearly Increase"
                  >Yearly Increase</button>
                </div>
              )
          }
        </div>        

      </div>
    </div>
  );
};

export default FordController;