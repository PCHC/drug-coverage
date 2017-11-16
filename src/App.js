import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import IP from 'ip';


import Main from './pages/Main';
import Footer from './components/layout/Footer';

import './css/style.css';

class App extends Component {
  render() {
    const ips = [
      '216.195.133.189',
      '72.45.183.107',
      '96.61.69.202',
      '66.186.180.200',
      '127.0.0.1'
    ];

    const allowedIP = ips.includes(IP.address());

    if(allowedIP) {
      return (
        <Router basename="/">
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/drug/:name" component={Main} />
            </Switch>
        </Router>
      );
    }

    return(
      <div className="container-fluid">
        <h1>PCHC Benefits Prescription Drug Coverage</h1>
        <hr />
        <p className="lead">
          This tool is only available on the PCHC computer network. Please visit when at a PCHC workstation.
        </p>
        <p>
          If you think this is in error, <a href="mailto:cviolette@pchc.com">contact Chris Violette</a>.
        </p>
        <Footer />
      </div>
    )
  }
}

export default App;
