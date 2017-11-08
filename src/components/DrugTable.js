import React from 'react';

import DrugRow from './drugtable/DrugRow';

import * as TierActions from '../actions/TierActions';
import TierStore from '../stores/TierStore';

export default class DrugTable extends React.Component {
  constructor(props) {
    super();

    this.getTiers = this.getTiers.bind(this);

    this.state = {
      tiercosts: TierStore.getAll(),
    };
  }

  componentWillMount() {
    TierStore.on('change', this.getTiers);
  }

  componentWillUnmount() {
    TierStore.removeListener('change', this.getTiers);
  }

  getTiers() {
    this.setState({
      tiercosts: TierStore.getAll(),
    })
  }

  render() {
    const { tiercosts } = this.state;

    return(
      <div>
        <h2>Drug Table</h2>
        <h3>{this.props.drugName}</h3>
        <p>{this.props.isPreventative ? 'Preventative' : 'Non-Preventative'}</p>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>30-Day Supply</th>
                <th>90-Day Supply</th>
                <th>Annual Cost of<br/>30-Day Supply</th>
                <th>Annual Cost of<br/>90-Day Supply</th>
              </tr>
            </thead>
            <tbody>
              <DrugRow name="PPO Home" planKey="ppohome" {...this.props} />
              <DrugRow name="PPO Choice" planKey="ppochoice" {...this.props} />
              <DrugRow name="HDHP Home" planKey="hdhphome" {...this.props} />
              <DrugRow name="HDHP Choice" planKey="hdhpchoice" {...this.props} />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
