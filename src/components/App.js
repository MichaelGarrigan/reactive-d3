
import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Examples from './Examples/Examples.js';
import Home from './home/Home.js';
import Modules from './modules/Modules.js';
import NavBar from './navbar/NavBar.js';
import Resources from './Resources/Resources.js';

import useElementSize from '../useElementSize.js';

export default () => {
  const [sizeRef, dimensions] = useElementSize();
  return (
    <div className="global-container" ref={sizeRef}>
      <NavBar dimensions={dimensions} />

      <Route exact path='/' component={() => <Home dimensions={dimensions} />} />
      <Route path='/Examples' component={Examples} />
      <Route exact path='/Modules' component={() => <Modules dimensions={dimensions} />} />
      <Route path='/Resources' component={() => <Resources dimensions={dimensions} />} />

    </div>
  );
};