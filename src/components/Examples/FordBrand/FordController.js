import React from 'react';


import CircleGauge from './CircleGauge.js';

import './Ford.css';

const salesData = {
  name: "All",
  "2017": 2475556,
  "2018": 2393731,
  "2017_rounded": "2.47 M",
  "2018_rounded": "2.39 M",
  "children": [
    {
      name: "Trucks",
      "2017": 1123416,
      "2018": 1139079,
      "2017_rounded": "1.12 M",
      "2018_rounded": "1.13 M"
    },
    {
      name: "SUVs",
      "2017": 796302,
      "2018": 797238,
      "2017_rounded": "796 K",
      "2018_rounded": "797 K"
    },
    {
      name: "Cars",
      "2017": 555838,
      "2018": 457414,
      "2017_rounded": "555 K",
      "2018_rounded": "457 K"
    }
  ]
};

const FordController = props => {

  const size = 200;
  

  return (
    <div className="ford-cont-wrapper">

      <div className="ford-cont-button-wrapper">

        <div>
          <button 
            className={
              props.year === "2018"
                ? "ford-cont-button-active"
                : "ford-cont-button"
            }
            onClick={event => props.setYear(event.target.value)}
            value="2018"
          >2018</button>
          <button 
            className={
              props.year === "2017"
                ? "ford-cont-button-active"
                : "ford-cont-button"
            }
            onClick={event => props.setYear(event.target.value)}
            value="2017"
          >2017</button>
        </div>

        <div>
          <button 
            className={
              props.category === "All"
                ? "ford-cont-button-active"
                : "ford-cont-button"
            }
            onClick={event => props.setCategory(event.target.value)}
            value="All"
          >All</button>
          <button 
            className={
              props.category === "Cars"
                ? "ford-cont-button-active"
                : "ford-cont-button"
            }
            onClick={event => props.setCategory(event.target.value)}
            value="Cars"
          >Cars</button>
          <button 
            className={
              props.category === "SUVs"
                ? "ford-cont-button-active"
                : "ford-cont-button"
            }
            onClick={event => props.setCategory(event.target.value)}
            value="SUVs"
          >SUVs</button>
          <button 
            className={
              props.category === "Trucks"
                ? "ford-cont-button-active"
                : "ford-cont-button"
            }
            onClick={event => props.setCategory(event.target.value)}
            value="Trucks"
          >Trucks</button>
        </div>
      </div>

      <div className="ford-cont-sales-wrapper">
        <div>
          {
            props.category === "All"
              ? (
                <div className="ford-cont-p-lg-wrap">
                  <p className="ford-cont-p-lg">
                    {`${props.year} Total Sales`}
                  </p>
                  <p className="ford-cont-p-lg">
                    {salesData[`${props.year}_rounded`]}
                  </p>
                </div>
              )
              : (
                <div className="ford-cont-p-lg-wrap">
                  <p className="ford-cont-p-lg">
                    {`${props.year} ${props.category.slice(0, -1)} Sales`}
                  </p>
                  <p className="ford-cont-p-lg">
                    {
                      salesData.children.map( item => {
                        if (item.name === props.category) {
                          return item[`${props.year}_rounded`];
                        } else {
                          return '';
                        }
                      })
                    }
                  </p>
                </div>
              )
          }
        </div>  

        {
          props.category === 'All'
            ? (
              <div className="ford-cont-3circles-wrapper">
                {
                  salesData.children.map(item => (
                    <div 
                      className="ford-cont-circle-wrapper"
                      key={item.name}
                    >
                      <p className="ford-cont-p">
                        {item.name}
                      </p>
                      <CircleGauge
                        name={item.name}
                        size={size}
                        actual={item[props.year]}
                      />
                    </div>
                  ))
                }
              </div>
            )
            : (
              <div className="ford-cont-rank-by-wrapper">
                <button 
                  className={
                    props.rankBy === "Yearly Increase"
                      ? "ford-cont-button-active"
                      : "ford-cont-button"
                  }
                  onClick={event => props.setRankBy(event.target.value)}
                  value="Yearly Increase"
                >Yearly Increase</button>
                <button 
                  className={
                    props.rankBy === "Sales Total"
                      ? "ford-cont-button-active"
                      : "ford-cont-button"
                  }
                  onClick={event => props.setRankBy(event.target.value)}
                  value="Sales Total"
                >Sales Total</button>
              </div>
            )
        }           
      </div>
    </div>
  );
};

export default FordController;