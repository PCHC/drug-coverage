import React from 'react';

import Disclaimer from './layout/Disclaimer';
import * as AppActions from '../actions/AppActions';

export default class Acknowledgement extends React.Component {
  doAcknowledgement() {
    AppActions.acknowledgeTerms();
  }

  render() {
    return(
      <div>
        <Disclaimer {...this.props} />
        <a href="#" className="mt-3 mb-5 btn btn-primary btn-lg btn-block" onClick={this.doAcknowledgement}>I Accept</a>
      </div>
    );
  }
}
