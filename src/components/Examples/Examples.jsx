import React from 'react';
import {Link} from 'react-router-dom';
import './Examples.css';

const Examples = () => (
  <div className="examples-wrapper">
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
    <Link to="/BubbleChart">
      <div className="d3-example">
        <span className="d3-example-text">BubbleChart</span>
      </div>
    </Link>
    <Link to="/MinnesotaPopulation">
      <div className="d3-example">
        <span className="d3-example-text">Minnesota</span>
        <span className="d3-example-text">Population</span>
        <span className="d3-example-text"> Bar Chart</span>
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
    <Link to="/Area1">
      <div className="d3-example area1-thumbnail">
        <span className="d3-example-text">Area1</span>
      </div>
    </Link>
    <Link to="/LinkedListEditor">
      <div className="d3-example">
        <span className="d3-example-text">Editor</span>
        <span className="d3-example-text">Linked List</span>
      </div>
    </Link>
    <Link to="/LineChart">
      <div className="d3-example">
        <span className="d3-example-text">Line Chart</span>
      </div>
    </Link>
    <Link to="/USMap1">
      <div className="d3-example">
        <span className="d3-example-text">USA Map 1</span>
      </div>
    </Link>
    
  </div>
);

export default Examples;