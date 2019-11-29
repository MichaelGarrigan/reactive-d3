
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { range } from 'd3-array';
import { randomUniform } from 'd3-random';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import  { curveMonotoneX, curveMonotoneY, curveStep, line } from 'd3-shape';
import './Home.css';

const randomizeData = () => range(60).map(d => ({ "y": randomUniform(1)() }));
const randomizeData1 = () => range(30).map(d => ({ "y": randomUniform(1)() }));

export default ({dimensions}) => {

  const svgWidth = dimensions.width;
  const svgHeight = Math.round(svgWidth * 0.7);
  
  const [dataRandom, setDataRandom] = useState(randomizeData());
  const [dataRandom1, setDataRandom1] = useState(randomizeData1());
  const [dataWindow, setDataWindow] = useState('');
  
  const [verbs, setVerbs] = useState(
    ["Exploring", "Hacking", "Building"]
  );
  const [content, setContent] = useState('');
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState(0);
  const [fadeWordNow, setFadeWordNow] = useState(false);
  const [pause, setPause] = useState(0);
  
  useEffect( () => {

    let build = () => {
      
      if (index === verbs[word % 3].length && pause < 6) {
        setPause(pause + 1);
      }
      else if (index < verbs[word % 3].length) {
        setContent(content + verbs[word % 3][index]);
        setIndex(index + 1);
      } 
      else {
        setPause(0)
        setContent('');
        setIndex(0);
        setWord(word + 1);
      }
    };
    
    let interval = setInterval(build, 400);
    
    
    return () => clearInterval(interval); 
  }, [content, index, word, pause]);

  useEffect( () => {
    setDataWindow(
      range(25).map(d => (
        { 
          x: randomUniform()(), 
          y: randomUniform()(),
          height: randomUniform(svgHeight * 0.04, svgHeight * 0.15)(),
          width: randomUniform(svgWidth * 0.01, svgWidth * 0.04)()
        }
      ))
    )
    
  }, []);

  const xScale = scaleLinear()
    .domain([0, 59])
    .range([-25, svgWidth]); 

  const yScale = scaleLinear()
    .domain([0, 1]) 
    .range([svgHeight, 0]);

  const lineShape = line()
    .x( (d, i) => xScale(i+1) ) 
    .y( d => yScale(d.y) ) 
    .curve(curveStep);

  const xScale1 = scaleLinear()
    .domain([0, 29])
    .range([-25, svgWidth]); 

  const yScale1 = scaleLinear()
    .domain([1, 0]) 
    .range([svgHeight - 25, 0]);

  const lineShape1 = line()
    .x( (d, i) => xScale1(i+1) ) 
    .y( d => yScale1(d.y) ) 
    .curve(curveStep);

  const windowScaleX = scaleLinear()
    .domain([0, 1])
    .range([0, svgWidth]); 

  const windowScaleY = scaleLinear()
    .domain([0, 1]) 
    .range([svgHeight, 0]);

  
  return (
    <div className="home-wrapper">
      
      <svg 
        className="home-svg"
        height={svgHeight} 
        width={svgWidth}
      >
        {
          dataWindow
          ? 
            dataWindow.map( (window, idx) => (
              <rect 
                key={idx}
                fill="#FEFF3488"
                x={windowScaleX(window.x)}
                y={windowScaleY(window.y)}
                height={window.height}
                width={window.width}
              />
            ))
          : ''
        }
        <path 
          className="home-curve"
          ref={node => select(node).datum(dataRandom).attr("d", lineShape)}
        />
         <path 
          className="home-curve1"
          ref={node => select(node).datum(dataRandom1).attr("d", lineShape1)}
        />
  
      </svg>

      <div className="home-box-dynamic">
        <span className="home-text-dynamic">{content}</span>
      </div>

      <div className="home-box-static">
        <p className="home-text-static">d3 and React</p>
      </div>
    
    </div>
  );
};