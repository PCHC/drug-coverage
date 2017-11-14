import React from 'react';

export default class Footer extends React.Component {
  render() {
    return(
      <footer className="p-3 text-muted text-center bg-light">
        <p>
          If this tool produces errors or does not function as expected, <a href="mailto:cviolette@pchc.com">contact Chris Violette</a>.<br/>
          If you are unable to find a drug, <a href="mailto:cmagee@pchc.com">contact Chelsea Magee</a>.
        </p>
        <hr/>
        <p>
          Version 0.2.0<br/>
          <a title="View source code on GitHub" className="text-muted" target="_blank" rel="noopener noreferrer" href="https://github.com/PCHC/drug-coverage">
            <i className="fa fa-github fa-lg"></i>
          </a>
        </p>
      </footer>
    );
  }
}
