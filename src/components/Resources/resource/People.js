
import React from 'react';

import BooksSvg from '../BooksSvg.js';
import '../Resources.css';

const people = [
  'alberto clairo',
  
];

export default props => {

  return (
    <div className="resources-wrapper">

      <div className="resources-title-wrapper"> 
        <BooksSvg dimensions={props.dimensions} />
        <p className="resources-title">People</p>
      </div>

      <div className="resources-content-wrapper"> 
        <p className="resources-content-summary">
          Collection of interesting and cutting edge people in the data visualization scene.
        </p>

        <div className="resource-item-wrapper"> 
          <a href="https://bost.ocks.org/mike/" className="resource-link">
            <p>Mike Bostock</p>
          </a>
          <ul className="resource-ul">
            <li>Key Developer of D3.js</li>
            <li>Co-creator of Observable</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://wattenberger.com/" className="resource-link">
            <p>Amelia Wattenberger</p>
          </a>
          <ul className="resource-ul">
            <li>Front End Developer</li>
          </ul>
        </div>
      
      </div>
    </div>
  );
};