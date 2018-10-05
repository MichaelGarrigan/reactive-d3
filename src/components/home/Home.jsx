
import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="home-wrapper">
    <Link to="/ShapeEditor">
      <div className="d3-example">ShapeEditor</div>
    </Link>
    <Link to="/Playground">
      <div className="d3-example">Playground</div>
    </Link>
    <Link to="/BubbleChart">
      <div className="d3-example">BubbleChart</div>
    </Link>
    <Link to="/MinnesotaPopulation">
      <div className="d3-example">Minnesota Population Bar Chart</div>
    </Link>
    <Link to="/FrequencyOfLetters">
      <div className="d3-example">Frequency Of Letters</div>
    </Link>
  </div>
);

export default Home;