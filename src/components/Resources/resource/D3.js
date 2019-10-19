

import React from 'react';

import BooksSvg from '../BooksSvg.js';
import '../Resources.css';

export default props => {

  return (
    <div className="resources-wrapper">

      <div className="resources-title-wrapper"> 
        <BooksSvg dimensions={props.dimensions} />
        <p className="resources-title">D3.js</p>
      </div>

      <div className="resources-content-wrapper"> 
        <p className="resources-content-summary">
          D3 is a data visualization javascript library that utilizes web standards such as HTML, CSS, SVG and Canvas. D3 exposes a large array of functions to support interactivity, transitions, scaling, interpolation and rendering.
        </p>

        <div className="resource-item-wrapper"> 
          <a href="https://d3js.org" className="resource-link">
            <p>d3js.org</p>
          </a>
          <ul className="resource-ul">
            <li>Official Documentation</li>
            <li>This site has it all with a large selection of example code, detailed api coverage of all the libraries modules and interesting sublinks for algorithims, statistics, geometry, etc...</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://observablehq.com" className="resource-link">
            <p>Observable</p>
          </a>
          <ul className="resource-ul">
            <li>Javascript based Notebooks. (think Jupyter Notebooks)</li>
            <li>A great space to discover and manipulate D3 examples in a live environment.</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://www.d3indepth.com" className="resource-link">
            <p>d3indepth.com</p>
          </a>
          <ul className="resource-ul">
            <li>A webpage full of articles, tutorials and examples</li>
            <li>Information is based on version 4</li>
            <li>Features: Selections, Joins, Enter/Exit, Scales, Shapes, Layouts, etc ....</li>
            <li>Made by Peter Cook</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://alignedleft.com/tutorials/d3" className="resource-link">
            <p>alignedleft.com</p>
          </a>
          <ul className="resource-ul">
            <li>A webpage with tutorials and examples</li>
            <li>Information is based on version 3</li>
            <li>Made by Scott Murray</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://www.tutorialsteacher.com/d3js" className="resource-link">
            <p>tutorialsteacher.com/d3js</p>
          </a>
          <ul className="resource-ul">
            <li>A collection of tutorials. One of which is d3</li>
            <li>Information is based on version 4.6.0</li>
            <li>Geared to beginners with very basic information</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://flowingdata.com" className="resource-link">
            <p>flowingdata.com</p>
          </a>
          <ul className="resource-ul">
            <li>Tutorials and courses for R and d3</li>
            <li>Paid Resource @ $29/month or 149/year</li>
            <li>By Nathan Yau</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://www.youtube.com/watch?v=_8V5o2UHG0E" className="resource-link">
            <p>freeCodeCamp.org</p>
          </a>
          <ul className="resource-ul">
            <li>13 hr Tutorial by Curran Kelleher</li>
            <li>A YouTube video covering the very basics to intermediate.</li>
          </ul>
        </div>

      </div>

      {/* MORE at -- https://mode.com/blog/learn-d3
      <h2>SVG & Canvas</h2>
      <p>https://stackoverflow.com/questions/50141324/difference-between-svg-and-canvas-in-d3-js</p> */}

    </div>
  );
};