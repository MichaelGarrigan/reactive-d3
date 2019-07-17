import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import './Examples.css';

import AnalogClock from './AnalogClock/AnalogClock.js';
import DigitalClock from './DigitalClock/DigitalClock.js';
import Force from './Force/Force.js';
import FrequencyOfLetters from './FrequencyOfLetters/FrequencyOfLetters.js';
import Gagues from './Gagues/Gagues.js';
import Pie3Versions from './Pie3Versions/Pie3Versions.js';

const Examples = props => {

  const [route, setRoute] = useState([]);

  const HOC = (Comp, props) => <Comp {...props} setRoute={setRoute} />;
  
  return (
    route.length === 0 
    ? (
    <div className="examples-wrapper">

      <Link to={`${props.match.url}/analogClock`}>
        <div className="d3-example analogClock" onClick={() => setRoute(['analogClock', AnalogClock])}>
          <span className="d3-example-text">Analog</span>
          <span className="d3-example-text">Clock</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/digitalClock`}>
        <div className="d3-example digitalClock" onClick={() => setRoute(['digitalClock', DigitalClock])}>
          <span className="d3-example-text">Digital</span>
          <span className="d3-example-text">Clock</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/frequencyOfLetters`}>
        <div className="d3-example" onClick={() => setRoute(['frequencyOfLetters', FrequencyOfLetters])}>
          <span className="d3-example-text">Frequency</span>
          <span className="d3-example-text">Of Letters</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/gagues`}>
        <div className="d3-example gague-circle1" onClick={() => setRoute(['gagues', Gagues])}>
          <span className="d3-example-text">Gagues</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/pie3Versions`}>
        <div className="d3-example" onClick={() => setRoute(['pie3Versions', Pie3Versions])}>
          <span className="d3-example-text">d3 & React</span>
          <span className="d3-example-text">3 versions</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/force`}>
        <div className="d3-example force" onClick={() => setRoute(['force', Force])}>
          <span className="d3-example-text">Force</span>
        </div>
      </Link>

      
      <Link to="/ShapeEditor">
        <div className="d3-example">
          <span className="d3-example-text">Editor</span>
          <span className="d3-example-text">d3-shape</span>
        </div>
      </Link>
      
      
      <Link to="/AnimatedCircles">
        <div className="d3-example">
          <span className="d3-example-text">Animated Circles</span>
        </div>
      </Link>
      <Link to="/Top5States">
        <div className="d3-example">
          <span className="d3-example-text">Top 5</span>
          <span className="d3-example-text">States</span>
        </div>
      </Link>
      <Link to="/StackChart">
        <div className="d3-example">
          <span className="d3-example-text">Stack Charts</span>
        </div>
      </Link>
      <Link to="/LinkedListEditor">
        <div className="d3-example">
          <span className="d3-example-text">Editor</span>
          <span className="d3-example-text">Linked List</span>
        </div>
      </Link>
      <Link to="/LineChart">
        <div className="d3-example lineChart">
          <span className="d3-example-text">Line Chart</span>
        </div>
      </Link>
      <Link to="/USMap1">
        <div className="d3-example">
          <span className="d3-example-text">USA Map 1</span>
        </div>
      </Link>
      <Link to="/TopoLower48">
        <div className="d3-example topolower48">
          <span className="d3-example-text">TopoJSON</span>
          <span className="d3-example-text">Lower 48 States</span>
        </div>
      </Link>
      <Link to="/CirclePack1">
        <div className="d3-example circlePack1">
          <span className="d3-example-text">Circle Pack</span>
          <span className="d3-example-text">#1</span>
        </div>
      </Link>
      
      <Link to="/Force2">
        <div className="d3-example force2">
          <span className="d3-example-text">Force2</span>
        </div>
      </Link>
      <Link to="/Force3">
        <div className="d3-example force3">
          <span className="d3-example-text">Force3</span>
        </div>
      </Link>
      <Link to="/Tux_SVG">
        <div className="d3-example tux_svg">
          <span className="d3-example-text">SVG Tux</span>
        </div>
      </Link>
      </div>
      )
      : (
        <Route 
          path={`${props.match.path}/${route[0]}`}
          component={ (props) => HOC(route[1], {...props}) }
        />
      )
  )
};

export default Examples;