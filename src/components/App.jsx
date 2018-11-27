
import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';

import AnalogClock from './d3/AnalogClock/AnalogClock.jsx';
import AnimatedCircle from './d3/AnimatedCircles/AnimatedCircle.jsx';
import Area1 from './d3/area/area1/Area1';
import Blog from './blog/blog/Blog.jsx';
import DigitalClock from './d3/DigitalClock/DigitalClock.jsx';
import EditorShell from './editors/editor/EditorShell.jsx';
import Examples from './Examples/Examples.jsx';
import Home from './home/Home.jsx';
import LinkedListEditor from './editors/LinkedListEditor/LinkedListEditor.jsx';
import LineChart from './d3/line/LineChart.jsx';
import LineEditor from './editors/LineEditor/LineEditor.jsx';
import Modules from './d3/modules/Modules.jsx';
import NavBar from './navbar/NavBar.jsx';
import Pie1 from './d3/Pie-Arc/Pie1/Pie1.jsx';
import Playground from './d3/playground/Playground.jsx';
import ScaleEditor from './editors/ScaleEditor/ScaleEditor.jsx';
import ShapeEditor from './d3/shapeEditor/ShapeEditor.jsx';
import StackChart from './d3/Stack/StackChart.jsx';
import TopoLower48 from './d3/maps/lower48/TopoLower48.jsx';
import USMap1 from './d3/maps/usMap1/USMap1.jsx';

import FrequencyOfLetters from './d3/FrequencyOfLetters/FrequencyOfLetters.jsx';

class App extends Component {
  render() {
    return (
      <div className="global-container">
        <NavBar />
  
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/AnalogClock' component={AnalogClock} />
          <Route exact path='/AnimatedCircles' component={AnimatedCircle} />
          <Route exact path='/Blog' component={Blog} />
          <Route exact path='/DigitalClock' component={DigitalClock} />
          <Route exact path='/Examples' component={Examples} />
          <Route exact path='/Modules' component={Modules} />
          <Route exact path='/EditorShell' component={EditorShell} />
          <Route exact path='/ScaleEditor' component={ScaleEditor} />
          <Route exact path='/ShapeEditor' component={ShapeEditor} />
          <Route exact path='/Playground' component={Playground} />
          <Route exact path='/FrequencyOfLetters' component={FrequencyOfLetters} />
          <Route exact path='/StackChart' component={StackChart} />
          <Route exact path='/Area1' component={Area1} />
          <Route exact path='/LinkedListEditor' component={LinkedListEditor} />
          <Route exact path='/LineChart' component={LineChart} />
          <Route exact path='/LineEditor' component={LineEditor} />
          <Route exact path='/Pie1' component={Pie1} />
          <Route exact path='/TopoLower48' component={TopoLower48} />
          <Route exact path='/USMap1' component={USMap1} />

        </Switch>
        
      </div>
    )
  }
};

export default App;