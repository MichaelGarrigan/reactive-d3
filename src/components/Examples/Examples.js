import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import './Examples.css';

import AnimatedCircles from './AnimatedCircles/AnimatedCircles.js';
import Area from './Area/Area.js';
import Axis from './Axis/Axis.js';
import BarCharts from './BarCharts/BarCharts.js';
import Clocks from './Clocks/Clocks.js';
import Force from './Force/Force.js';
import Ford from './FordBrand/Ford.js';
import Gagues from './Gagues/Gagues.js';
import LineChart from './LineChart/LineChart.js';
import Lower48 from './Lower48/Lower48.js';
import Pie3Versions from './Pie3Versions/Pie3Versions.js';
import Treemap from './Treemap/Treemap.js';
import Tux from './Tux/Tux.js';

const Examples = props => {

  const [route, setRoute] = useState([]);
  const HOC = (Comp, props) => <Comp {...props} setRoute={setRoute} />;
  
  return (
    route.length === 0 
    ? (
    <div className="examples-wrapper">

      <Link to={`${props.match.url}/clocks`}>
        <div className="d3-example analogClock" onClick={() => setRoute(['clocks', Clocks])}>
          <span className="d3-example-text">Clocks</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/ford`}>
        <div className="d3-example" onClick={() => setRoute(['ford', Ford])}>
          <span className="d3-example-text">Ford Sales</span>
          <span className="d3-example-text">2017 & 2018</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/barCharts`}>
        <div className="d3-example" onClick={() => setRoute(['barCharts', BarCharts])}>
          <span className="d3-example-text">Bar</span>
          <span className="d3-example-text">Charts</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/treemap`}>
        <div className="d3-example" onClick={() => setRoute(['treemap', Treemap])}>
          <span className="d3-example-text">Treemap</span>
          <span className="d3-example-text">Basic</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/tux`}>
        <div className="d3-example tux_svg" onClick={() => setRoute(['tux', Tux])}>
          <span className="d3-example-text">SVG Tux</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/gagues`}>
        <div className="d3-example gague-circle1" onClick={() => setRoute(['gagues', Gagues])}>
          <span className="d3-example-text">Gagues</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/pie3Versions`}>
        <div className="d3-example" onClick={() => setRoute(['pie3Versions', Pie3Versions])}>
          <span className="d3-example-text">d3 & React</span>
          <span className="d3-example-text">3 versions</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/force`}>
        <div className="d3-example force" onClick={() => setRoute(['force', Force])}>
          <span className="d3-example-text">Force</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/area`}>
        <div className="d3-example area" onClick={() => setRoute(['area', Area])}>
          <span className="d3-example-text">Area Chart</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/lineChart`}>
        <div className="d3-example lineChart" onClick={() => setRoute(['lineChart', LineChart])}>
          <span className="d3-example-text">Line Chart</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/lower48`}>
        <div className="d3-example topolower48" onClick={() => setRoute(['lower48', Lower48])}>
          <span className="d3-example-text">TopoJSON</span>
          <span className="d3-example-text">Lower 48 States</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/animatedCircles`}>
        <div className="d3-example" onClick={() => setRoute(['animatedCircles', AnimatedCircles])}>
          <span className="d3-example-text">Animated Circles</span>
        </div>
      </Link>

      <Link to={`${props.match.url}/axis`}>
        <div className="d3-example" onClick={() => setRoute(['axis', Axis])}>
          <span className="d3-example-text">Axis</span>
        </div>
      </Link>
      
      </div>
      )
      : (
        <Route 
          exact
          path={`${props.match.path}/${route[0]}`}
          component={ (props) => HOC(route[1], {...props}) }
        />
      )
  )
};

export default Examples;