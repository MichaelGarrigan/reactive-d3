
import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Home from './home/Home.jsx';
import NavBar from './navbar/NavBar.jsx';

class App extends Component {
  render() {
    return (
      <div className="global-container">
        <NavBar
        />
        <Switch className='routes'>
          <Route
            exact
            path='/'
            component={Home}
          />
        </Switch>
      </div>
    )
  }
};

export default withRouter(App);