
import React, { useLayoutEffect } from 'react';
import FrequencyOfLettersSVG from './FrequencyOfLettersSVG.js';
import {csvParse} from 'd3-dsv';

import './FrequencyOfLetters.css';


const FrequencyOfLetters = props => {

  useLayoutEffect( () => {
    return () => props.setRoute([]);
  });
  
  const csvFrequency = 
    `letter,frequency\nA,.08167\nB,.01492\nC,.02780\nD,.04253\nE,.12702\nF,.02288\nG,.02022\nH,.06094\nI,.06973\nJ,.00153\nK,.00747\nL,.04025\nM,.02517\nN,.06749\nO,.07507\nP,.01929\nQ,.00098\nR,.05987\nS,.06333\nT,.09056\nU,.02758\nV,.01037\nW,.02465\nX,.00150\nY,.01971\nZ,.00074\n`;

  let csvParsed = csvParse(
    csvFrequency, 
    d => ({letter: d.letter, frequency: +d.frequency})
  );

  // Sizes
  const margin = {top: 20, right: 20, bottom: 30, left: 40};
  const width = 960; 
  const height = 500; 
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Package up for component
  const dimensions = {
    height: height,
    width: width,
    innerHeight: innerHeight,
    innerWidth: innerWidth,
    margin: margin
  };

  return (
    <div>
      <p className="frequency-title">Frequency of English Letters</p>
      <div className="frequency-svg-flex">
        <FrequencyOfLettersSVG
          dimensions={dimensions}
          data={csvParsed}
        />
      </div>
    </div>
  );
};

export default FrequencyOfLetters;