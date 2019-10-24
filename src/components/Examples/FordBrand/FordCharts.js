
import React from 'react';

import FordSalesTotal from './FordSalesTotal.js';
import FordGauges from './FordGauges.js';
import FordLine from './FordLine.js';

import './Ford.css';


export default props => {
  
  return (
    <div className="ford-charts-wrapper">

      <FordSalesTotal
        category={props.category}
        DATA={props.DATA}
        year={props.year}
      />

      <FordGauges 
        category={props.category}
        DATA={props.DATA}
        dimensions={props.dimensions}
        selectedItemName={props.selectedItemName}
        year={props.year}
      />
      
      <FordLine 
        category={props.category}
        DATA={props.DATA}
        dimensions={props.dimensions}
        selectedItemName={props.selectedItemName}
        selectedItemData={props.selectedItemData}
        year={props.year}

        setCategory={props.setCategory}
        setSelectedItemName={props.setSelectedItemName}
        setSelectedItemData={props.setSelectedItemData}
      /> 

    </div>
  );
};