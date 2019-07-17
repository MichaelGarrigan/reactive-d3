
import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Blog from './blog/blog/Blog.jsx';
import EditorShell from './editors/editor/EditorShell.jsx';
import Examples from './Examples/Examples.js';
import Home from './home/Home.jsx';
import Modules from './d3/modules/Modules.jsx';
import NavBar from './navbar/NavBar.js';


const App = () => (
  <div className="global-container">
    <NavBar />

    <Route exact path='/' component={Home} />
    <Route exact path='/Blog' component={Blog} />
    <Route exact path='/EditorShell' component={EditorShell} />
    <Route path='/Examples' component={Examples} />
    <Route exact path='/Modules' component={Modules} />
    
  </div>
);

export default App;