import React, { useState, Suspense, lazy } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import './Examples.css';

import Area from './Area/Area.js';
import Axis from './Axis/Axis.js';
import ClosestCircle from './ClosestCircle/ClosestCircle.js';
import Contour from './Contour/Contour';
import DayNight from './DayNightMap/DayNight.js';
import Force from './Force/Force.js';

import Lower48 from './Lower48/Lower48.js';
import Pie3Versions from './Pie3Versions/Pie3Versions.js';
import Treemap from './Treemap/Treemap.js';
import Tux from './Tux/Tux.js';

import { BarCharts, BarChartsCode, BarChartsSummary } from './BarCharts/index.js';
import BarChartsSVG from '../ExampleHelpers/ThumbnailSvgs/BarChartsSVG.js';

import { Clocks, ClocksCode, ClocksSummary } from './Clocks/index.js';
import ClocksSVG from '../ExampleHelpers/ThumbnailSvgs/ClocksSVG.js';

import { Ford, FordCode, FordSummary } from './Ford/index.js';  
import FordSVG from '../ExampleHelpers/ThumbnailSvgs/FordSVG.js';

import { LineChart, LineChartCode, LineChartSummary } from './LineChart/index.js';
import LineChartSVG from '../ExampleHelpers/ThumbnailSvgs/LineChartSVG.js';

import ExampleTemplate from '../ExampleHelpers/ExampleTemplate.js';

export default props => {
  let { path } = useRouteMatch();
  
  return (
    <Switch>
      <Route 
        path={`${path}/clocks`} 
        component={() => 
          <ExampleTemplate 
            dimensions={props.dimensions} 
            title='Classic World Clocks'
            demo={Clocks}
            code={ClocksCode}
            summary={ClocksSummary}
          />
        } 
      />

      <Route 
        path={`${path}/ford`} 
        component={() => 
          <ExampleTemplate 
            dimensions={props.dimensions} 
            title='Ford Sales - 2017 & 2018'
            demo={Ford}
            code={FordCode}
            summary={FordSummary}
          />
        } 
      />
      
      <Route 
        path={`${path}/barcharts`} 
        component={() => (
          <ExampleTemplate 
            dimensions={props.dimensions} 
            title='Bar Charts'
            demo={BarCharts}
            code={BarChartsCode}
            summary={BarChartsSummary}
          />
        )} 
      />

      <Route 
        path={`${path}/linechart`} 
        component={() => 
          <ExampleTemplate 
            dimensions={props.dimensions} 
            title='Line Chart with Curves'
            demo={LineChart}
            code={LineChartCode}
            summary={LineChartSummary}
          />
        } 
      />
      
      <Route path={`${path}/lower48`} component={() => <Lower48 dimensions={props.dimensions} />} />
      <Route path={`${path}/area`} component={() => <Area dimensions={props.dimensions} />} />
      <Route path={`${path}/closestcircle`} component={() => <ClosestCircle dimensions={props.dimensions} />} />
      <Route path={`${path}/contour`} component={() => <Contour dimensions={props.dimensions} />} />
      <Route path={`${path}/daynight`} component={() => <DayNight dimensions={props.dimensions} />} />
      <Route path={`${path}/treemap`} component={() => <Treemap dimensions={props.dimensions} />} />
      <Route path={`${path}/tux`} component={() => <Tux dimensions={props.dimensions} />} />
      <Route path={`${path}/pie3versions`} component={() => <Pie3Versions dimensions={props.dimensions} />} />
      <Route path={`${path}/force`} component={() => <Force dimensions={props.dimensions} />} />
      <Route path={`${path}/axis`} component={() => <Axis dimensions={props.dimensions} />} />
      
      <Route path={path}>
  
        <div className="examples-wrapper">
        
        <Link to={`${path}/clocks`}>
          <div className="example-wrapper" >
            <p className="example-text">World</p>
            <p className="example-text">Clocks</p>
            <ClocksSVG />
          </div>
        </Link>

      <Link to={`${path}/ford`}>
        <div className="example-wrapper">
          <p className="example-text">Ford Sales</p>
          <p className="example-text">2017 & 2018</p>
          <FordSVG />
        </div>
      </Link>

      <Link to={`${path}/barcharts`}>
        <div className="example-wrapper">
          <p className="example-text">Bar</p>
          <p className="example-text">Charts</p>
          <BarChartsSVG />
        </div>
      </Link>

      <Link to={`${path}/linechart`}>
        <div className="example-wrapper">
          <p className="example-text">Line</p>
          <p className="example-text">Chart</p>
          <LineChartSVG />
        </div>
      </Link>

      <Link to={`${path}/lower48`}>
        <div className="example-wrapper">
          <p className="example-text">US Lower</p>
          <p className="example-text">48 States</p>
          <svg 
            className="example-thumbnail"
            viewBox="0 0 51.329166 31.220832" 
          >
            <g transform="translate(0 -265.78)">
              <circle cx="33.943" cy="273.88" r=".4009" className="example-svg-component-fill"/>
              <circle cx="34.01" cy="275.82" r=".4009" className="example-svg-component-fill"/>
              <circle cx="32.607" cy="275.82" r=".4009" className="example-svg-component-fill"/>
              <circle cx="33.275" cy="277.69" r=".4009" className="example-svg-component-fill"/>
              <circle cx="44.434" cy="278.22" r=".4009" className="example-svg-component-fill"/>
              <circle cx="47.039" cy="268.6" r=".4009" className="example-svg-component-fill"/>
              <circle cx="13.363" cy="288.65" r=".4009" className="example-svg-component-fill"/>
              <circle cx="11.092" cy="288.18" r=".4009" className="example-svg-component-fill"/>
              <circle cx="9.2208" cy="286.98" r=".4009" className="example-svg-component-fill"/>
              <circle cx="7.0158" cy="285.98" r=".4009" className="example-svg-component-fill"/>
              <circle cx="5.479" cy="284.3" r=".4009" className="example-svg-component-fill"/>
              <circle cx="3.8086" cy="282.83" r=".4009" className="example-svg-component-fill"/>
              <circle cx="3.2741" cy="280.63" r=".4009" className="example-svg-component-fill"/>
              <circle cx="6.214" cy="267.13" r=".4009" className="example-svg-component-fill"/>
              <circle cx="6.0136" cy="268.8" r=".4009" className="example-svg-component-fill"/>
              <circle cx="2.8731" cy="278.36" r=".4009" className="example-svg-component-fill"/>
              <circle cx="2.4722" cy="275.82" r=".4009" className="example-svg-component-fill"/>
              <circle cx="2.8731" cy="273.61" r=".4009" className="example-svg-component-fill"/>
              <circle cx="3.8086" cy="271.68" r=".4009" className="example-svg-component-fill"/>
              <circle cx="4.5436" cy="269.81" r=".4009" className="example-svg-component-fill"/>
              <circle cx="4.6772" cy="267.53" r=".4009" className="example-svg-component-fill"/>
              <circle cx="36.148" cy="290.45" r=".4009" className="example-svg-component-fill"/>
              <circle cx="38.286" cy="290.59" r=".4009" className="example-svg-component-fill"/>
              <circle cx="39.155" cy="292.26" r=".4009" className="example-svg-component-fill"/>
              <circle cx="40.157" cy="293.99" r=".4009" className="example-svg-component-fill"/>
              <circle cx="43.899" cy="280.03" r=".4009" className="example-svg-component-fill"/>
              <circle cx="43.832" cy="281.83" r=".4009" className="example-svg-component-fill"/>
              <circle cx="43.498" cy="284.1" r=".4009" className="example-svg-component-fill"/>
              <circle cx="41.761" cy="285.71" r=".4009" className="example-svg-component-fill"/>
              <circle cx="40.491" cy="287.45" r=".4009" className="example-svg-component-fill"/>
              <circle cx="40.224" cy="289.78" r=".4009" className="example-svg-component-fill"/>
              <circle cx="41.226" cy="291.72" r=".4009" className="example-svg-component-fill"/>
              <circle cx="42.162" cy="293.46" r=".4009" className="example-svg-component-fill"/>
              <circle cx="41.694" cy="295.33" r=".4009" className="example-svg-component-fill"/>
              <circle cx="44.434" cy="278.22" r=".4009" className="example-svg-component-fill"/>
              <circle cx="44.434" cy="278.22" r=".4009" className="example-svg-component-fill"/>
              <circle cx="44.634" cy="271.74" r=".4009" className="example-svg-component-fill"/>
              <circle cx="35.948" cy="274.82" r=".4009" className="example-svg-component-fill"/>
              <circle cx="47.307" cy="275.28" r=".4009" className="example-svg-component-fill"/>
              <circle cx="45.369" cy="276.35" r=".4009" className="example-svg-component-fill"/>
              <circle cx="34.21" cy="290.32" r=".4009" className="example-svg-component-fill"/>
              <circle cx="32.54" cy="291.72" r=".4009" className="example-svg-component-fill"/>
              <circle cx="30.736" cy="291.86" r=".4009" className="example-svg-component-fill"/>
              <circle cx="28.731" cy="291.32" r=".4009" className="example-svg-component-fill"/>
              <circle cx="16.237" cy="288.65" r=".4009" className="example-svg-component-fill"/>
              <circle cx="17.573" cy="290.45" r=".4009" className="example-svg-component-fill"/>
              <circle cx="19.043" cy="291.79" r=".4009" className="example-svg-component-fill"/>
              <circle cx="20.847" cy="291.32" r=".4009" className="example-svg-component-fill"/>
              <circle cx="21.983" cy="292.99" r=".4009" className="example-svg-component-fill"/>
              <circle cx="26.727" cy="292.19" r=".4009" className="example-svg-component-fill"/>
              <circle cx="24.856" cy="293.26" r=".4009" className="example-svg-component-fill"/>
              <circle cx="22.918" cy="294.8" r=".4009" className="example-svg-component-fill"/>
              <circle cx="24.656" cy="295.6" r=".4009" className="example-svg-component-fill"/>
              <circle cx="24.054" cy="269.54" r=".4009" className="example-svg-component-fill"/>
              <circle cx="21.649" cy="269.47" r=".4009" className="example-svg-component-fill"/>
              <circle cx="19.577" cy="269.34" r=".4009" className="example-svg-component-fill"/>
              <circle cx="17.506" cy="269.2" r=".4009" className="example-svg-component-fill"/>
              <circle cx="15.101" cy="268.8" r=".4009" className="example-svg-component-fill"/>
              <circle cx="12.829" cy="268.47" r=".4009" className="example-svg-component-fill"/>
              <circle cx="10.557" cy="268" r=".4009" className="example-svg-component-fill"/>
              <circle cx="8.419" cy="267.4" r=".4009" className="example-svg-component-fill"/>
              <circle cx="32.874" cy="273.95" r=".4009" className="example-svg-component-fill"/>
              <circle cx="33.876" cy="271.81" r=".4009" className="example-svg-component-fill"/>
              <circle cx="32.072" cy="271.28" r=".4009" className="example-svg-component-fill"/>
              <circle cx="29.801" cy="271.88" r=".4009" className="example-svg-component-fill"/>
              <circle cx="30.469" cy="270.47" r=".4009" className="example-svg-component-fill"/>
              <circle cx="28.13" cy="270.14" r=".4009" className="example-svg-component-fill"/>
              <circle cx="26.192" cy="269.67" r=".4009" className="example-svg-component-fill"/>
              <circle cx="35.68" cy="273.15" r=".4009" className="example-svg-component-fill"/>
              <circle cx="45.904" cy="270.14" r=".4009" className="example-svg-component-fill"/>
              <circle cx="46.572" cy="273.08" r=".4009" className="example-svg-component-fill"/>
              <circle cx="47.908" cy="271.81" r=".4009" className="example-svg-component-fill"/>
              <circle cx="47.975" cy="270.01" r=".4009" className="example-svg-component-fill"/>
              <circle cx="36.683" cy="277.09" r=".4009" className="example-svg-component-fill"/>
              <circle cx="38.821" cy="276.42" r=".4009" className="example-svg-component-fill"/>
              <circle cx="40.09" cy="274.75" r=".4009" className="example-svg-component-fill"/>
              <circle cx="41.894" cy="274.15" r=".4009" className="example-svg-component-fill"/>
              <circle cx="42.763" cy="272.14" r=".4009" className="example-svg-component-fill"/>
            </g>
          </svg>
        </div>
      </Link>

      <Link to={`${path}/area`}>
        <div className="example-wrapper">
          <p className="example-text">Rainfall</p>
          <p className="example-text">Area Chart</p>
          <svg
            className="example-thumbnail"
            viewBox="0 0 51.329165 31.220834"
          >
            <g transform="translate(0,-265.77915)">
            <path
              className="example-svg-component-fill"
              d="m 34.116699,269.49589 c -1.047983,2.16248 -2.338168,4.3341 -3.270085,5.94279 -0.315036,0.71034 -0.513715,1.15237 -0.530717,2.00194 2.1e-5,2.03329 1.705156,3.68141 3.808553,3.68143 2.103398,-2e-5 3.808532,-1.64815 3.808553,-3.68143 -6.6e-5,-0.70913 -0.211989,-1.40283 -0.610298,-1.99832 -1.010783,-1.6116 -2.362999,-3.90914 -3.206006,-5.94641 z m 0.0031,2.74867 c 0.547212,1.32243 1.424892,2.81359 2.081011,3.85971 0.258549,0.38655 0.395799,0.83677 0.395841,1.29708 -1.3e-5,1.31985 -1.106845,2.39003 -2.472201,2.39004 -1.365356,-10e-6 -2.472187,-1.07019 -2.4722,-2.39004 0.01104,-0.55147 0.140185,-0.83856 0.344682,-1.29966 0.604924,-1.04423 1.442601,-2.45344 2.122867,-3.85713 z"
            />
            <path
              className="example-svg-component-fill"
              d="m 25.630891,280.98848 c -1.047983,2.16248 -2.338168,4.3341 -3.270085,5.94279 -0.315036,0.71034 -0.513715,1.15238 -0.530717,2.00195 2.1e-5,2.03329 1.705156,3.68141 3.808553,3.68143 2.103398,-2e-5 3.808532,-1.64815 3.808553,-3.68143 -6.6e-5,-0.70913 -0.211989,-1.40284 -0.610298,-1.99833 -1.010783,-1.6116 -2.362999,-3.90914 -3.206006,-5.94641 z m 0.0031,2.74867 c 0.547213,1.32243 1.424893,2.81359 2.081012,3.85971 0.258548,0.38655 0.395798,0.83677 0.39584,1.29708 -1.3e-5,1.31985 -1.106845,2.39003 -2.472201,2.39004 -1.365356,-10e-6 -2.472187,-1.07019 -2.4722,-2.39004 0.01104,-0.55147 0.140186,-0.83856 0.344682,-1.29966 0.604925,-1.04423 1.442602,-2.45344 2.122867,-3.85713 z"
            />
            <path
              className="example-svg-component-fill"
              d="m 41.934332,280.05304 c -1.047983,2.16248 -2.338168,4.3341 -3.270085,5.94279 -0.315036,0.71034 -0.513715,1.15238 -0.530717,2.00195 2.1e-5,2.03329 1.705156,3.68141 3.808553,3.68143 2.103398,-2e-5 3.808532,-1.64815 3.808553,-3.68143 -6.6e-5,-0.70913 -0.211989,-1.40284 -0.610298,-1.99833 -1.010783,-1.6116 -2.363,-3.90914 -3.206006,-5.94641 z m 0.0031,2.74867 c 0.547212,1.32243 1.424892,2.8136 2.081011,3.85972 0.258549,0.38655 0.395798,0.83676 0.395841,1.29707 -1.3e-5,1.31985 -1.106845,2.39003 -2.472201,2.39004 -1.365356,-1e-5 -2.472187,-1.07019 -2.4722,-2.39004 0.01104,-0.55147 0.140185,-0.83856 0.344682,-1.29966 0.604924,-1.04423 1.442601,-2.45344 2.122867,-3.85713 z"
            />
            <path
              className="example-svg-component-fill"
              d="m 16.877814,269.69635 c -1.047983,2.16248 -2.338167,4.3341 -3.270084,5.94279 -0.315037,0.71034 -0.513715,1.15237 -0.530718,2.00194 2.1e-5,2.03329 1.705157,3.68141 3.808554,3.68143 2.103398,-2e-5 3.808531,-1.64815 3.808553,-3.68143 -6.7e-5,-0.70913 -0.21199,-1.40283 -0.610299,-1.99832 -1.010782,-1.6116 -2.362999,-3.90914 -3.206006,-5.94641 z m 0.0031,2.74867 c 0.547212,1.32243 1.424892,2.81359 2.081011,3.85971 0.258548,0.38655 0.395798,0.83677 0.39584,1.29708 -1.3e-5,1.31985 -1.106844,2.39003 -2.4722,2.39004 -1.365356,-10e-6 -2.472188,-1.07019 -2.472201,-2.39004 0.01104,-0.55147 0.140186,-0.83856 0.344682,-1.29966 0.604925,-1.04423 1.442602,-2.45344 2.122868,-3.85713 z"
            />
            <path
              className="example-svg-component-fill"
              d="m 8.7929111,281.32257 c -1.047983,2.16248 -2.338168,4.3341 -3.270085,5.94279 -0.315036,0.71034 -0.513715,1.15238 -0.530717,2.00195 2.1e-5,2.03329 1.705156,3.68141 3.808553,3.68143 2.1033979,-2e-5 3.8085319,-1.64815 3.8085529,-3.68143 -6.6e-5,-0.70913 -0.211989,-1.40284 -0.610298,-1.99833 -1.010783,-1.6116 -2.3629989,-3.90914 -3.2060059,-5.94641 z m 0.0031,2.74867 c 0.547213,1.32243 1.4248929,2.81359 2.0810119,3.85971 0.258548,0.38655 0.395798,0.83677 0.39584,1.29708 -1.3e-5,1.31985 -1.106845,2.39003 -2.4722009,2.39004 -1.365356,-10e-6 -2.472187,-1.07019 -2.4722,-2.39004 0.01104,-0.55147 0.140186,-0.83856 0.344682,-1.29966 0.604925,-1.04423 1.442602,-2.45344 2.122867,-3.85713 z"
            />
          </g>
        </svg>
        </div>
      </Link>

      <Link to={`${path}/closestcircle`}>
        <div className="example-wrapper">
          <p className="example-text">Closest</p>
          <p className="example-text">Circle</p>
          <svg 
            className="example-thumbnail"
            viewBox="0 0 51.329165 31.220834"
          >
            <g transform="translate(0 -265.78)">
              <path 
                className="example-svg-component-fill"
                transform="matrix(.26458 0 0 .26458 0 265.78)" 
                d="m54.547 36.934a49.75 47.982 0 0 0 -49.748 47.984 49.75 47.982 0 0 0 14.141 33.439h9.4551a43.484 41.938 0 0 1 -17.328 -33.439 43.484 41.938 0 0 1 43.48 -41.939 43.484 41.938 0 0 1 43.484 41.939 43.484 41.938 0 0 1 -17.305 33.439h9.502a49.75 47.982 0 0 0 14.07 -33.439 49.75 47.982 0 0 0 -49.752 -47.984z" 
              />
              <path 
                className="example-svg-component-fill"
                transform="matrix(.26458 0 0 .26458 0 265.78)" 
                d="m122.78-0.14258a49.75 47.982 0 0 0 -16.715 35.816 49.75 47.982 0 0 0 49.748 47.98 49.75 47.982 0 0 0 38.559 -17.701l0.10547-11.178a43.484 41.938 0 0 1 -38.664 22.838 43.484 41.938 0 0 1 -43.48 -41.939 43.484 41.938 0 0 1 20.863 -35.775l-10.416-0.041016zm55.928 0.2207a43.484 41.938 0 0 1 16.129 17.15l0.10547-11.104a49.75 47.982 0 0 0 -5.8008 -6.0059l-10.434-0.041016z"  
              />
            </g>
          </svg>
        </div>
      </Link>

      <Link to={`${path}/contour`}>
        <div className="example-wrapper">
          <p className="example-text">Contour</p>
          <p className="example-text">Design</p>
          <svg 
            className="example-thumbnail"
            viewBox="0 0 51.329165 31.220834" 
          >
            <g transform="translate(0 -265.78)" className="example-svg-component-stroke" fill="none">
              <path 
                d="m3.3073 271.2c-2.2133 17.431 24.63 20.284 24.001 7.1815-9.1281-17.821 21.962-10.648 19.844-3.0238-8.6935 10.583 0.28348 18.143 0.28348 18.143"
              />
              <path 
                d="m7.8621 291.37c-1.4418-14.732 16.045-17.145 15.635-6.0699-5.9463 15.063 14.307 8.9998 12.927 2.5558-5.6631-8.9452 0.18467-15.335 0.18467-15.335"
              />
            </g>
          </svg>
        </div>
      </Link>

      <Link to={`${path}/daynight`}>
        <div className="example-wrapper">
          <p className="example-text">Day/Night</p>
          <p className="example-text">Tracker</p>
          <svg 
            className="example-thumbnail"
            viewBox="0 0 51.329165 31.220834"
          >
            <g transform="translate(0 -265.78)" className="example-svg-component-fill">
            <path 
              d="m12.568 269.88a8.599 8.599 0 0 0 -8.599 8.599 8.599 8.599 0 0 0 8.599 8.599 8.599 8.599 0 0 0 4.161 -1.0847 7.0871 7.0871 0 0 1 -2.6489 0.5178 7.0871 7.0871 0 0 1 -7.0869 -7.0869 7.0871 7.0871 0 0 1 7.0869 -7.0869 7.0871 7.0871 0 0 1 7.0662 6.5588 8.599 8.599 0 0 0 0.02067 -0.41703 8.599 8.599 0 0 0 -8.599 -8.599z"
            />
            <path 
              d="m46.64 291.86-4.0162-3.2598 2.3535 4.6062-3.2507-4.0236 1.3444 4.9949-2.3431-4.6115 0.27657 5.1652-1.3331-4.9979-0.80339 5.1099-0.26486-5.1658-1.8482 4.8312 0.81497-5.108-2.8123 4.3413 1.8592-4.827-3.6535 3.6618 2.8221-4.335-4.3349 2.8221 3.6617-3.6535-4.827 1.8592 4.3413-2.8123-5.108 0.81497 4.8312-1.8482-5.1658-0.26486 5.1099-0.80339-4.9979-1.3331 5.1652 0.27657-4.6115-2.3431 4.9949 1.3444-4.0236-3.2507 4.6062 2.3536-3.2598-4.0162 4.0162 3.2598-2.3535-4.6062 3.2507 4.0236-1.3444-4.9949 2.3431 4.6115-0.27657-5.1652 1.3331 4.9979 0.80339-5.1099 0.26486 5.1658 1.8482-4.8312-0.81497 5.108 2.8123-4.3413-1.8592 4.827 3.6535-3.6617-2.8221 4.3349 4.3349-2.8221-3.6617 3.6535 4.827-1.8592-4.3413 2.8123 5.108-0.81496-4.8312 1.8482 5.1658 0.26486-5.1099 0.80339 4.9979 1.3331-5.1652-0.27657 4.6115 2.3431-4.9949-1.3444 4.0236 3.2507-4.6062-2.3536z" 
            />
            </g>
          </svg>
        </div>
      </Link>

      <Link to={`${path}/treemap`}>
        <div className="example-wrapper">
          <p className="example-text">Treemap</p>
          <p className="example-text">Basic</p>
        </div>
      </Link>

      <Link to={`${path}/tux`}>
        <div className="example-wrapper">
          <p className="example-text">SVG Tux</p>
        </div>
      </Link>

      <Link to={`${path}/pie3versions`}>
        <div className="example-wrapper">
          <p className="example-text">d3 & React</p>
          <p className="example-text">3 versions</p>
          <svg
            className="example-thumbnail"
            viewBox="0 0 51.329165 31.220834"
          >
            <g transform="translate(0 -265.78)" className="example-svg-component-fill">
              <path 
                d="m8.1532 286.56v-10.427q-0.73112 0.58316-1.4187 0.99224t-1.8887 0.83556v-1.4622q1.9061-0.80945 3.3074-2.0976h1.6189v12.159h3.2465v1.3491h-8.1729v-1.3491z" 
              />
              <path 
                d="m30.927 288.11h-8.1729v-1.4884q0-0.57445 0.235-1.2272 0.235-0.66149 0.89649-1.4796 0.66149-0.81816 1.4013-1.5754l0.9226-0.94001q0.27852-0.28723 1.2185-1.3317 0.94001-1.0445 1.2359-1.6015 0.30463-0.55705 0.30463-1.0967 0-0.87038-0.6963-1.3404-0.6963-0.47871-1.5667-0.47871-0.49612 0-1.1141 0.11315-0.60927 0.11315-1.0706 0.26982-0.4613 0.14796-1.4971 0.61797v-1.4361q1.0967-0.52223 2.1934-0.71371 1.1054-0.20019 1.8191-0.20019 1.0532 0 1.9322 0.34815 0.88779 0.33945 1.3143 1.0619 0.43519 0.72241 0.43519 1.5406 0 0.9139-0.55704 1.8713-0.54834 0.95742-2.0802 2.4632l-0.99223 0.98353-0.83556 0.81816q-0.79205 0.80075-1.2795 1.5493t-0.53964 1.7843h6.493z" 
              />
              <path 
                d="m39.928 287.67v-1.7059q1.9932 1.0096 3.4554 1.0096 1.3404 0 2.2108-0.80946 0.87908-0.81815 0.87908-2.0976 0-1.2882-0.96612-2.0976-0.95742-0.80945-3.2639-0.80945h-0.89649v-1.3491h1.2446q1.6972 0 2.4545-0.75723 0.75723-0.76594 0.75723-1.6972 0-0.84427-0.61797-1.4187-0.61797-0.58316-1.8974-0.58316-1.4361 0-3.0898 0.80946v-1.5406q1.6537-0.61797 3.0289-0.61797 2.4632 0 3.3945 0.97483 0.94001 0.96612 0.94001 2.2108 0 0.92261-0.49612 1.7321-0.49612 0.80945-1.8278 1.4448 1.175 0.34815 1.7756 0.85297 0.60056 0.50483 0.9052 1.1924 0.31334 0.6876 0.31334 1.5406 0 1.8974-1.41 3.1334-1.4013 1.2359-3.6295 1.2359-0.64408 0-1.41-0.0958-0.75723-0.0957-1.8539-0.55704z" 
              />
            </g>
          </svg>
        </div>
      </Link>

      <Link to={`${path}/force`}>
        <div className="example-wrapper">
          <p className="example-text">Force</p>
        </div>
      </Link>

      <Link to={`${path}/axis`}>
        <div className="example-wrapper">
          <p className="example-text">Axis</p>
        </div>
      </Link>

      </div>
    </Route>
    </Switch>
  )
};