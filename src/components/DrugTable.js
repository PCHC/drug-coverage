import React from 'react';

import DrugRow from './drugtable/DrugRow';

export default class DrugTable extends React.Component {
  render() {
    const { preventative } = this.props.drug;

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
            HDHP
            { !preventative ? <span><br/><small>Until Deductible Reached</small></span> : null }
          </DrugRow>
          <DrugRow planKey="hdhphome" isHDHP={true} rowClass="info" {...this.props}>
            HDHP Home
            { !preventative ? <span><br/><small>Until Deductible Reached</small></span> : null }
          </DrugRow>
          <DrugRow planKey="hdhpchoice" isHDHP={true} rowClass="danger" {...this.props}>
            HDHP Choice
            { !preventative ? <span><br/><small>Until Deductible Reached</small></span> : null }
          </DrugRow>
        </tbody>
      </table>
    );
  }
}
