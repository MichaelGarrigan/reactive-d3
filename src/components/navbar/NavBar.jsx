
import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="navbar-wrapper">
    <h2 className="app-title">threact.com</h2> 
    <Link to="/Modules">
      <div className="nav-link">Modules</div>
    </Link>
  </div>
);

export default NavBar;