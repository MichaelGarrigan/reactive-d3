
import React from 'react';

import BooksSvg from '../BooksSvg.js';
import '../Resources.css';

const business = [
  `<p>Two-n.com</p>
  <h4>Companies that sponsored OpenVis 2017 Conf</h4>
  <p>bocoup</p>
  <p>qlik playground</p>
  <p>datadog</p>
  <p>actblue</p>
  <p>edward tufte graphics press</p>
  <p>maps 4 news</p>
  <p>fjord</p>
  <p>info viz</p>
  <p>mlab</p>
  <p>policyviz</p>
  `
];

export default props => {

  return (
    <div className="resources-wrapper">

      <div className="resources-title-wrapper"> 
        <BooksSvg dimensions={props.dimensions} />
        <p className="resources-title">Companies</p>
      </div>

      <div className="resources-content-wrapper"> 
        <p className="resources-content-summary">
          Collection of interesting and cutting edge businesses in the data visualization scene.
        </p>

        <div className="resource-item-wrapper"> 
          <a href="https://www.datadoghq.com/" className="resource-link">
            <p>DataDog</p>
          </a>
          <ul className="resource-ul">
            <li>Business monitoring and analytics</li>
            <li>Custom dashboards</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://howmuch.net/" className="resource-link">
            <p>How Much</p>
          </a>
          <ul className="resource-ul">
            <li>Understanding money through visualizations</li>
          </ul>
        </div>
      
      </div>
    </div>
  );
};