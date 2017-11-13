import React from 'react';

import DrugRow from './drugtable/DrugRow';

export default class DrugTable extends React.Component {
  render() {
    return(
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th></th>
            <th>30-Day Supply</th>
            <th scope="col">90-Day Supply</th>
            <th scope="col">Annual Cost of<br/>30-Day Supply</th>
            <th scope="col">Annual Cost of<br/>90-Day Supply</th>
          </tr>
        </thead>
        <tbody>
          <DrugRow planKey="ppohome" isHDHP={false} rowClass="warning" {...this.props}>
            PPO Home
          </DrugRow>
          <DrugRow planKey="ppochoice" isHDHP={false} rowClass="success" {...this.props}>
            PPO Choice
          </DrugRow>
          <DrugRow planKey="hdhp" isHDHP={true} rowClass="light" {...this.props}>
            HDHP<br />
            <small>Until Deductible Reached</small>
          </DrugRow>
          <DrugRow planKey="hdhphome" isHDHP={true} rowClass="info" {...this.props}>
            HDHP Home<br />
            <small>After Deductible Reached</small>
          </DrugRow>
          <DrugRow planKey="hdhpchoice" isHDHP={true} rowClass="danger" {...this.props}>
            HDHP Choice<br />
            <small>After Deductible Reached</small>
          </DrugRow>
        </tbody>
      </table>
    );
  }
}
