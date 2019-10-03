
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({dimensions}) => (
  <div className="navbar-wrapper">
    <Link to='/' className="nav-link-title">
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
          <p className="nav-title">reactive</p>
          <p className="nav-title">d3</p>
        </div>
      </div>
    </Link>

    <div className="nav-link-group">
      <Link to="/Examples" className="nav-examples-link">
        <div className="nav-link">Examples</div>
      </Link>
      <Link to="/Modules" className="nav-modules-link">
        <div className="nav-link">Modules</div>
      </Link>
      <Link to="/Resources" className="nav-resources-link">
        <div className="nav-link">Resources</div>
      </Link>
    </div>
  </div>
);

export default NavBar;