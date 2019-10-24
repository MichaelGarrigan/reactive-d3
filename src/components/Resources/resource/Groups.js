
import React from 'react';

import BooksSvg from '../BooksSvg.js';
import '../Resources.css';

const websites = [
  'storytellingwithdata.com',
  'public.tableau.com',
  'graphviz.org',
  'victorhou.com  (Minify your SVGs)'
];

export default props => {

  return (
    <div className="resources-wrapper">

      <div className="resources-title-wrapper"> 
        <BooksSvg dimensions={props.dimensions} />
        <p className="resources-title">Groups</p>
      </div>

      <div className="resources-content-wrapper"> 
        <p className="resources-content-summary">
          Collection of interesting and cutting edge companies, societies and meetups in the data visualization scene.
        </p>

        <div className="resource-item-wrapper"> 
          <a href="https://www.datavisualizationsociety.com/" className="resource-link">
            <p>Data Visualization Society</p>
          </a>
          <ul className="resource-ul">
            <li>Fostering best practices and continous education.</li>
            <li>Job postings, resource aggregation and challenges.</li>
            <li>Regular blog posts at Medium.com under the name Nightingale.</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://twitter.com/nytgraphics" className="resource-link">
            <p>NYT Graphics</p>
          </a>
          <ul className="resource-ul">
            <li>Graphics department for New York Times</li>
            <li>Twitter page with articles and links</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://twitter.com/postgraphics" className="resource-link">
            <p>Washington Post Graphics</p>
          </a>
          <ul className="resource-ul">
            <li>Graphics department for Washington Post</li>
            <li>Twitter page with articles and links</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://twitter.com/wsjgraphics" className="resource-link">
            <p>WSJ Graphics</p>
          </a>
          <ul className="resource-ul">
            <li>Graphics department for Wall Street Journal</li>
            <li>Twitter page with articles and links</li>
          </ul>
        </div>
      
      </div>

    </div>
  );
};