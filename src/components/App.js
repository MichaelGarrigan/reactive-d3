
import React, { Suspense, lazy } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Home from './home/Home.js';
import NavBar from './navbar/NavBar.js';
import Examples from './Examples/Examples.js';

const Modules = lazy( 
  () => import(/* webpackChunkName: 'modules' */'./modules/Modules.js')
);
const Resources = lazy( 
  () => import(/* webpackChunkName: 'resources' */'./Resources/Resources.js')
);

const Clocks = lazy( () => import(/* webpackChunkName: 'clocks' */'../routes/clocks.js'));
const Ford = lazy( () => import(/* webpackChunkName: 'ford' */'../routes/ford.js'));
const BarCharts = lazy( () => import(/* webpackChunkName: 'barcharts' */'../routes/barcharts.js'));
const LineChart = lazy( () => import(/* webpackChunkName: 'linechart' */'../routes/linechart.js'));

const Lower48 = lazy( () => import(/* webpackChunkName: 'lower48' */'../routes/lower48.js'));
const Rainfall = lazy( () => import(/* webpackChunkName: 'rainfall' */'./Examples/Rainfall/Rainfall.js'));
const ClosestCircle = lazy( () => import(/* webpackChunkName: 'closestcircle' */'./Examples/ClosestCircle/ClosestCircle.js'));
const Contour = lazy( () => import(/* webpackChunkName: 'contour' */'./Examples/Contour/Contour.js'));
const Axis = lazy( () => import(/* webpackChunkName: 'axis' */'./Examples/Axis/Axis.js'));
const DayNight = lazy( () => import(/* webpackChunkName: 'daynight' */'./Examples/DayNightMap/DayNight.js'));
const Force = lazy( () => import(/* webpackChunkName: 'force' */'./Examples/Force/Force.js'));
const Pie3Versions = lazy( () => import(/* webpackChunkName: 'pie3versions' */'./Examples/Pie3Versions/Pie3Versions.js'));
const Treemap = lazy( () => import(/* webpackChunkName: 'treemap' */'./Examples/Treemap/Treemap.js'));
const Tux = lazy( () => import(/* webpackChunkName: 'tux' */'./Examples/Tux/Tux.js'));

import useElementSize from '../useElementSize.js';

export default props => {
  const [sizeRef, dimensions] = useElementSize();

  const routes = {
    clocks: Clocks,
    ford: Ford,
    barcharts: BarCharts,
    linechart: LineChart,
    lower48: Lower48,
    rainfall: Rainfall,
    closestcircle: ClosestCircle,
    contour: Contour,
    axis: Axis,
    daynight: DayNight,
    force: Force,
    pie3versions: Pie3Versions,
    treemap: Treemap,
    tux: Tux
  }
  
  return (
    <div className="global-container" ref={sizeRef}>
      <NavBar dimensions={dimensions} />

      <Route 
        exact 
        path='/' 
        component={ props => (
          <Home {...props} dimensions={dimensions} />
        )}
      />

      <Route 
        path='/Examples/:id' 
        component={ props => {
          let id = props.match.params.id;
          
          if (routes[id]) {
            const Comp = routes[id];
            
            return (
              <Suspense fallback={<div>Loading...</div>} >
                <Comp {...props} dimensions={dimensions} />
              </Suspense>
            )
          } else return ""  
        }} 
      />
      
      <Route 
        exact
        path='/Examples' 
        component={ props => (
          <Examples {...props} dimensions={dimensions} />
        )} 
      />
  
      <Route 
        path='/Modules' 
        component={ props => (
          <Suspense fallback={<div>Loading...</div>} >
            <Modules {...props} dimensions={dimensions} />
          </Suspense>
        )} 
      />
      <Route 
        path='/Resources' 
        component={ props => (
          <Suspense fallback={<div>Loading...</div>} >
            <Resources {...props} dimensions={dimensions} />
          </Suspense>
        )} 
      />
    </div>
  );
};