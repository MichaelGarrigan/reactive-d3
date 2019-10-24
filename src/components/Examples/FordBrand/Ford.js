
import React, { useState } from 'react';

import TitleBanner from '../titleBanner/TitleBanner.js';
import FordButton from './FordButton.js';
import FordCharts from './FordCharts.js';

import DATA from './FordData.js';
import './Ford.css';


const Ford = props => {

  const [category, setCategory] = useState('All');
  const [selectedItemData, setSelectedItemData] = useState(DATA.children[2]);
  const [selectedItemName, setSelectedItemName] = useState('Trucks');
  const [year, setYear] = useState('2018');

  
  return (
    <div className="ford-wrapper">
      <TitleBanner title='Ford Sales - 2017 & 2018' />
      <div className="ford-flex">

        <FordButton 
          category={category}
          DATA={DATA}
          year={year}

          setCategory={setCategory}
          setSelectedItemData={setSelectedItemData}
          setSelectedItemName={setSelectedItemName}
          setYear={setYear}
        />

        <FordCharts 
          category={category}
          DATA={DATA}
          dimensions={props.dimensions}
          selectedItemData={selectedItemData}
          selectedItemName={selectedItemName}
          year={year}

          setCategory={setCategory}
          setSelectedItemData={setSelectedItemData}
          setSelectedItemName={setSelectedItemName}
        />
        
      </div>
    </div>
  );
};

export default Ford;