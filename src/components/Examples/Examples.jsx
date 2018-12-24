import React from 'react';
import {Link} from 'react-router-dom';
import './Examples.css';

const Examples = () => (
  <div className="examples-wrapper">
    <Link to="/Area1">
      <div className="d3-example area1-thumbnail">
        <span className="d3-example-text">Area1</span>
      </div>
    </Link>
    <Link to="/ShapeEditor">
      <div className="d3-example">
        <span className="d3-example-text">Editor</span>
        <span className="d3-example-text">d3-shape</span>
      </div>
    </Link>
    <Link to="/Pie1">
      <div className="d3-example">
        <span className="d3-example-text">Pie1</span>
      </div>
    </Link>
    <Link to="/Playground">
      <div className="d3-example">
        <span className="d3-example-text">Playground</span>
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
    <Link to="/FrequencyOfLetters">
      <div className="d3-example">
        <span className="d3-example-text">Frequency</span>
        <span className="d3-example-text">Of Letters</span>
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
    <Link to="/AnalogClock">
      <div className="d3-example analogClock">
        <span className="d3-example-text">Analog</span>
        <span className="d3-example-text">Clock</span>
      </div>
    </Link>
    <Link to="/DigitalClock">
      <div className="d3-example digitalClock">
        <span className="d3-example-text">Digital</span>
        <span className="d3-example-text">Clock</span>
      </div>
    </Link>
    <Link to="/CirclePack1">
      <div className="d3-example circlePack1">
        <span className="d3-example-text">Circle Pack</span>
        <span className="d3-example-text">#1</span>
      </div>
    </Link>
    <Link to="/Force1">
      <div className="d3-example force1">
        <span className="d3-example-text">Force1</span>
      </div>
    </Link>
    <Link to="/Force2">
      <div className="d3-example force2">
        <span className="d3-example-text">Force2</span>
      </div>
    </Link>
  </div>
);

export default Examples;