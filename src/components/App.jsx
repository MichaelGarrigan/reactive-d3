
import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Area1 from './d3/area/area1/Area1';
import BubbleChart from './d3/BubbleChart/BubbleChart.jsx';
import Home from './home/Home.jsx';
import LinkedListEditor from './editors/LinkedListEditor/LinkedListEditor.jsx';
import Modules from './d3/modules/Modules.jsx';
import NavBar from './navbar/NavBar.jsx';
import Playground from './d3/playground/Playground.jsx';
import ShapeEditor from './d3/shapeEditor/ShapeEditor.jsx';
import StackChart from './d3/Stack/StackChart.jsx';

import FrequencyOfLetters from './d3/FrequencyOfLetters/FrequencyOfLetters.jsx';

class App extends Component {
  render() {
    return (
      <div className="global-container">
        <NavBar />
        <Switch className='routes'>
          <div className='parent-container'>
            <Route exact path='/' component={Home} />

            <Route exact path='/Modules' component={Modules} />

            <Route exact path='/ShapeEditor' component={ShapeEditor} />
            <Route exact path='/Playground' component={Playground} />
            <Route exact path='/BubbleChart' component={BubbleChart} />
            <Route 
              // exact 
              path='/FrequencyOfLetters' 
              component={FrequencyOfLetters} 
            />
            <Route 
              // exact 
              path='/StackChart' 
              component={StackChart} 
            />
            <Route 
              exact 
              path='/Area1' 
              component={Area1} 
            />
            <Route 
              exact 
              path='/LinkedListEditor' 
              component={LinkedListEditor} 
            />
          </div>
        </Switch>
      </div>
    )
  }
};

export default withRouter(App);