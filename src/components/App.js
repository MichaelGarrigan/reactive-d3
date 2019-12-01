
import React, { Suspense, lazy } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Home from './home/Home.js';
import NavBar from './navbar/NavBar.js';
const LazyExamples = lazy( () => import('./Examples/Examples.js'));
const LazyModules = lazy( () => import('./modules/Modules.js'));
const LazyResources = lazy( () => import('./Resources/Resources.js'));

import useElementSize from '../useElementSize.js';

export default () => {
  const [sizeRef, dimensions] = useElementSize();
  return (
    <div className="global-container" ref={sizeRef}>
      <NavBar dimensions={dimensions} />

      <Route exact path='/' component={() => <Home dimensions={dimensions} />} />
      
      <Route 
        path='/Examples' 
        component={ () => (
          <Suspense fallback={<div>Loading...</div>} >
            <LazyExamples dimensions={dimensions} />
          </Suspense>
        )} 
      />
      
      <Route 
        path='/Modules' 
        component={ () => (
          <Suspense fallback={<div>Loading...</div>} >
            <LazyModules dimensions={dimensions} />
          </Suspense>
        )} 
      />
      <Route 
        path='/Resources' 
        component={ () => (
          <Suspense fallback={<div>Loading...</div>} >
            <LazyResources dimensions={dimensions} />
          </Suspense>
        )} 
      />
    </div>
  );
};