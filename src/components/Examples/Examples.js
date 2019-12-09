import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import ClocksSVG from '../ExampleHelpers/ThumbnailSvgs/ClocksSVG.js';
import FordSVG from '../ExampleHelpers/ThumbnailSvgs/FordSVG.js';
import BarChartsSVG from '../ExampleHelpers/ThumbnailSvgs/BarChartsSVG.js';
import LineChartSVG from '../ExampleHelpers/ThumbnailSvgs/LineChartSVG.js';
import Lower48SVG from '../ExampleHelpers/ThumbnailSvgs/Lower48SVG.js';
import RainfallSVG from '../ExampleHelpers/ThumbnailSvgs/RainfallSVG.js';
import ClosestCircleSVG from '../ExampleHelpers/ThumbnailSvgs/ClosestCircleSVG.js';
import ContourSVG from '../ExampleHelpers/ThumbnailSvgs/ContourSVG.js';
import DayNightSVG from '../ExampleHelpers/ThumbnailSvgs/DayNightSVG.js';
import Pie3versionsSVG from '../ExampleHelpers/ThumbnailSvgs/Pie3versionsSVG.js';

import './Examples.css';

export default props => {
  let { path } = useRouteMatch();
  
  return (
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
        <Lower48SVG />
      </div>
    </Link>

    <Link to={`${path}/rainfall`}>
      <div className="example-wrapper">
        <p className="example-text">Rainfall</p>
        <p className="example-text">Area Chart</p>
        <RainfallSVG />
      </div>
    </Link>

    <Link to={`${path}/closestcircle`}>
      <div className="example-wrapper">
        <p className="example-text">Closest</p>
        <p className="example-text">Circle</p>
        <ClosestCircleSVG />
      </div>
    </Link>

    <Link to={`${path}/contour`}>
      <div className="example-wrapper">
        <p className="example-text">Contour</p>
        <p className="example-text">Design</p>
        <ContourSVG />
      </div>
    </Link>

    <Link to={`${path}/daynight`}>
      <div className="example-wrapper">
        <p className="example-text">Day/Night</p>
        <p className="example-text">Tracker</p>
        <DayNightSVG />
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
        <Pie3versionsSVG />
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
  )
};