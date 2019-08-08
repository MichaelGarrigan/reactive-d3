import React from 'react';

import './Ford.css';


const FordButton = props => (
  <div className="ford-button-wrapper">

    <div className="ford-button-group">
      <button 
        className={
          props.year === "2018"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={event => props.setYear(event.target.value)}
        value="2018"
      >2018</button>
      <button 
        className={
          props.year === "2017"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={event => props.setYear(event.target.value)}
        value="2017"
      >2017</button>
    </div>

    <div className="ford-button-group">
      <button 
        className={
          props.category === "All"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={event => props.setCategory(event.target.value)}
        value="All"
      >All</button>
      <button 
        className={
          props.category === "Cars"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={event => props.setCategory(event.target.value)}
        value="Cars"
      >Cars</button>
      <button 
        className={
          props.category === "SUVs"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={event => props.setCategory(event.target.value)}
        value="SUVs"
      >SUVs</button>
      <button 
        className={
          props.category === "Trucks"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={event => props.setCategory(event.target.value)}
        value="Trucks"
      >Trucks</button>
    </div>
  </div>
);

export default FordButton;