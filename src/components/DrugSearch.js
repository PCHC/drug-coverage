import React from 'react';

import * as DrugActions from '../actions/DrugActions';
import DrugStore from '../stores/DrugStore';

export default class DrugSearch extends React.Component {
  constructor() {
    super();

    this.getDrugs = this.getDrugs.bind(this);
    this.state = {
      drugs: DrugStore.getAll(),
    };
  }

  componentWillMount() {
    DrugStore.on('change', this.getDrugs);
  }

  componentWillUnmount() {
    DrugStore.removeListener('change', this.getDrugs);
  }

  getDrugs() {
    this.setState({
      drugs: DrugStore.getAll(),
    });
  }

  loadDrugs() {
    DrugActions.loadDrugs();
  }

  render() {
    const { drugs } = this.state;

    return(
      <div>
        <h2>Drug Search</h2>
        <button onClick={this.loadDrugs.bind(this)}>Load</button>
      </div>
    );
  }
}
