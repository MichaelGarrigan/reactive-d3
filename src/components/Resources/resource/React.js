
import React from 'react';

import BooksSvg from '../BooksSvg.js';
import '../Resources.css';

export default props => {

  return (
    <div className="resources-wrapper">

      <div className="resources-title-wrapper"> 
        <BooksSvg dimensions={props.dimensions} />
        <p className="resources-title">React</p>
      </div>

      <div className="resources-content-wrapper"> 
        <p className="resources-content-summary">
          A JS library for building UI.
        </p>

        <div className="resource-item-wrapper"> 
          <a href="https://reactjs.org/" className="resource-link">
            <p>React JS</p>
          </a>
          <ul className="resource-ul">
            <li>Official Docs</li>
            <li>Tutorials, docs, blog posts and community links</li>
          </ul>
        </div>
      
      </div>
    </div>
  );
};