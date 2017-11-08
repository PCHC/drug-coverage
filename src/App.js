import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Layout from './pages/Layout';

import Home from './pages/Home';
import DrugPage from './pages/DrugPage';

import './css/style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/drug/:name" component={DrugPage} />
        </Layout>
      </Router>
    );
  }
}

export default App;
