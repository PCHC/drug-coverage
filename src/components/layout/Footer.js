import React from 'react';

export default class Footer extends React.Component {
  render() {
    return(
      <footer>
        <hr/>
        <div className="row justify-content-between text-muted">
          <div className="col">
            <p>If this tool produces errors or does not function as expected, <a href="mailto:cviolette@pchc.com">contact Chris Violette</a>.<br/>
            If you are unable to find a drug, <a href="mailto:cmagee@pchc.com">contact Chelsea Magee</a>.</p>
          </div>
          <div className="col text-right">
            <p>Version 0.1.0 <a className="text-muted" target="_blank" rel="noopener noreferrer" href="https://github.com/PCHC/drug-coverage"><i className="fa fa-github"></i></a></p>
          </div>
        </div>
      </footer>
    );
  }
}
