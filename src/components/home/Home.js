
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default ({dimensions}) => {
  const verbs = ["Exploring", "Understanding", "Hacking", "Building"];
  return (
    <div className="home-wrapper">
      <div className="home-summary-wrapper">
        <b>
          <div className="home-summary-verbs">
            Exploring<br /> 
            Understanding<br />
            Hacking<br />
            Building
            </div>
        </b>
        <p>d3 and React</p>
      </div>
  
    </div>
  );
};