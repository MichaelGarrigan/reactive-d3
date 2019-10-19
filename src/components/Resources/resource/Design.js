
import React from 'react';

import BooksSvg from '../BooksSvg.js';
import '../Resources.css';

export default props => {

  return (
    <div className="resources-wrapper">

      <div className="resources-title-wrapper"> 
        <BooksSvg dimensions={props.dimensions} />
        <p className="resources-title">Design</p>
      </div>

      <div className="resources-content-wrapper"> 
        <p className="resources-content-summary">
          Design encompases many disiplines. Such as color theory, layout, typography, UX, UI, etc ...
        </p>

        <div className="resource-item-wrapper"> 
          <a href="https://design.google" className="resource-link">
            <p>Google Design</p>
          </a>
          <ul className="resource-ul">
            <li>A collection of articles and links to many design principles.</li>
            <li>Links to Material Design, Google Fonts and Design Sprints.</li>
          </ul>
        </div>
            
        <div className="resource-item-wrapper"> 
          <a href="https://www.fontsquirrel.com" className="resource-link">
            <p>Font Squirrel</p>
          </a>
          <ul className="resource-ul">
            <li>Typography</li>
            <li>Combination of completely free and paid resources.</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://fonts.google.com" className="resource-link">
            <p>Google Fonts</p>
          </a>
          <ul className="resource-ul">
            <li>Typography</li>
            <li>Ability to use the font via CDN.</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://fonts.adobe.com" className="resource-link">
            <p>Adobe Fonts</p>
          </a>
          <ul className="resource-ul">
            <li>Typography</li>
            <li>Paid access with subscription</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://www.pexels.com" className="resource-link">
            <p>Pexels</p>
          </a>
          <ul className="resource-ul">
            <li>Photography</li>
            <li>Free stock photos.</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://unsplash.com" className="resource-link">
            <p>Unsplash</p>
          </a>
          <ul className="resource-ul">
            <li>Photography</li>
            <li>Free stock photos.</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://fontawesome.com" className="resource-link">
            <p>FontAwesome</p>
          </a>
          <ul className="resource-ul">
            <li>SVG Icons</li>
            <li>Free and paid graphics.</li>
            <li>Intergrated use with SASS and LESS.</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://www.flaticon.com" className="resource-link">
            <p>FlatIcon</p>
          </a>
          <ul className="resource-ul">
            <li>SVG, PNG, EPS, PSD and Base 64 Icons</li>
            <li>Pattern Generation</li>
            <li>Graphics are grouped into packages</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://www.svgrepo.com" className="resource-link">
            <p>SVG Repo</p>
          </a>
          <ul className="resource-ul">
            <li>Downloadable SVG Icons</li>
            <li>For Commercial or personal use</li>
            <li>Available in MonoChromatic or MultiColor</li>
          </ul>
        </div>

      </div>
    </div>
     
  );
};