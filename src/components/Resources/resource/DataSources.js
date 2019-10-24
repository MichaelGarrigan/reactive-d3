

import React from 'react';

import BooksSvg from '../BooksSvg.js';
import '../Resources.css';

export default props => {

  return (
    <div className="resources-wrapper">

      <div className="resources-title-wrapper"> 
        <BooksSvg dimensions={props.dimensions} />
        <p className="resources-title-lg">Data Sources</p>
      </div>

      <div className="resources-content-wrapper"> 
        <p className="resources-content-summary">
          Our graphics and charts would not be very interesting without data. So this is a collection of data api's to explore.
        </p>

        <div className="resource-item-wrapper"> 
          <a href="http://www.naturalearthdata.com" className="resource-link">
            <p>Natural Earth Data</p>
          </a>
          <ul className="resource-ul">
            <li>Free Vector and Raster Map Data</li>
            <li>Available in 1:10m, 1:50m and 1:110m Scales</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://www.census.gov/" className="resource-link">
            <p>Census.gov</p>
          </a>
          <ul className="resource-ul">
            <li>Massive amounts of free data.</li>
            <li>Data sets for population, economic, historic, government programs, etc ...</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://www.ncdc.noaa.gov/" className="resource-link">
            <p>NOAA</p>
          </a>
          <ul className="resource-ul">
            <li>National Oceanic and Atmospheric Administration</li>
            <li>Historic/Current Data Sets for weather</li>
          </ul>
        </div>
      
      </div>
    </div>
  );
};