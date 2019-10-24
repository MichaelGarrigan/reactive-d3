

import React, { useState } from 'react';

import TitleBanner from '../titleBanner/TitleBanner.js';
import Map from './Map.js';
import Moon from './Moon.js';
import Star from './Star.js';
import Sun from './Sun.js';

import './DayNight.css';

export default props => {

  const width = Math.round(props.dimensions.width * 0.95);
  const bannerHeight = Math.round(width * 0.1);

  const [top, setTop] = useState(5);
  const [timeScale, setTimeScale] = useState(10);

  
  return (
    <div className="day-wrapper">

      <TitleBanner title='Day / Night Crawler' />
      
      <div className="day-banner-wrapper">
        <Moon />
        <Star />
        <Sun />
      </div>

      <Map 
        width={width}
      />

      <div className="day-banner-wrapper"></div>
    </div>
  );
};
