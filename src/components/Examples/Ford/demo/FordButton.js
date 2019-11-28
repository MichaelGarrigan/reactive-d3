import React from 'react';

import './Ford.css';


export default props => (
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
        onClick={() => {
          props.setCategory("All");
          props.setSelectedItemName("Trucks");
          props.setSelectedItemData(props.DATA.children[2])
        }}
        value="All"
      >All</button>
      <button 
        className={
          props.category === "Cars"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={() => {
          props.setCategory("Cars");
          props.setSelectedItemName(props.DATA.children[0].children[0].name);
          props.setSelectedItemData(props.DATA.children[0].children[0])
        }}
        value="Cars"
      >Cars</button>
      <button 
        className={
          props.category === "SUVs"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={() => {
          props.setCategory("SUVs");
          props.setSelectedItemName(props.DATA.children[1].children[0].name);
          props.setSelectedItemData(props.DATA.children[1].children[0])
        }}
        value="SUVs"
      >SUVs</button>
      <button 
        className={
          props.category === "Trucks"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={() => {
          props.setCategory("Trucks");
          props.setSelectedItemName(props.DATA.children[2].children[0].name);
          props.setSelectedItemData(props.DATA.children[2].children[0])
        }}
        value="Trucks"
      >Trucks</button>
    </div>
  </div>
);