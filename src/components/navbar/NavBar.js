
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default ({dimensions}) => {
  const [category, setCategory] = useState('');

  return (
    <nav className="navbar-wrapper">
      <Link to='/' 
        className="nav-link-title"
        onClick={() => setCategory('')}
      >
        <div 
          className="nav-title-grid"
          style={{
            height: Math.round(dimensions.width * 0.1),
            width: Math.round(dimensions.width * 0.25)
          }}
        >
          <div className="nav-bar-1"></div>
          <div className="nav-bar-2"></div>
          <div className="nav-bar-3"></div>
          <div className="nav-bar-4"></div>
          <div className="nav-bar-5"></div>
          <div className="nav-bar-6"></div>
        
          <div 
            className="nav-title-wrapper"
            style={{ fontSize: Math.round(dimensions.width * 0.05) }}
          >
            <p className="nav-title-react">reactive</p>
            <p className="nav-title-d3">d3</p>
          </div>
        </div>
      </Link>

      <div className="nav-link-group">
        <Link to="/Examples" 
          className={category === "examples" ? "nav-link-active" : "nav-examples-link"}
          onClick={() => setCategory('examples')}
        >
          <div className="nav-link">Examples</div>
        </Link>
        <Link to="/Modules" 
          className={category === "modules" ? "nav-link-active" : "nav-modules-link"}
          onClick={() => setCategory('modules')}
        >
          <div className="nav-link">Modules</div>
        </Link>
        <Link to="/Resources" 
          className={category === "resources" ? "nav-link-active" : "nav-resources-link"}
          onClick={() => setCategory('resources')}
        >
          <div className="nav-link">Resources</div>
        </Link>
      </div>
    </nav>
  );
};