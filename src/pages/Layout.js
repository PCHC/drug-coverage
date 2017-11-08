import React from 'react';

export default class Layout extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <h1 className="display-3">PCHC Benefits Prescription Drug Coverage</h1>
        <hr />
        {this.props.children}
      </div>
    );
  }
}
