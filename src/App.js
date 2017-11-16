import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import Main from './pages/Main';

import './css/style.css';

class App extends Component {
  render() {
    return (
      <Router basename="/">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/drug/:name" component={Main} />
          </Switch>
      </Router>
    );
  }
}


export default App;
