
import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Examples from './Examples/Examples.js';
import Home from './home/Home.jsx';
import Modules from './modules/Modules.js';
import NavBar from './navbar/NavBar.js';
import Resources from './Resources/Resources.js';


const App = () => (
  <div className="global-container">
    <NavBar />

    <Route exact path='/' component={Home} />
    <Route path='/Examples' component={Examples} />
    <Route exact path='/Modules' component={Modules} />
    <Route exact path='/Resources' component={Resources} />

  </div>
);

export default App;