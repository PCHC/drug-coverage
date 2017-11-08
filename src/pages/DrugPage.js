import React from 'react';

import DrugTable from '../components/DrugTable';
import DrugSearch from '../components/DrugSearch';

import * as DrugActions from '../actions/DrugActions';
import DrugStore from '../stores/DrugStore';

export default class DrugPage extends React.Component {
  constructor(props) {
    super();

    this.loadDrugs = this.loadDrugs.bind(this);
    //this.getDrugs = this.getDrugs.bind(this);
    this.getDrug = this.getDrug.bind(this);

    this.state = {
      drug: DrugStore.getDrug(props.match.params.name)
    };
  }

  componentWillMount() {
    DrugStore.on('change', this.getDrug);
  }

  componentWillUnmount() {
    DrugStore.removeListener('change', this.getDrug);
  }

  getDrug() {
    this.setState({
      drug: DrugStore.getDrug(this.props.match.params.name),
    });
  }

  loadDrugs() {
    DrugActions.loadDrugs();
  }

  render() {
    const {match} = this.props;
    const {drug} = this.state;

    if(!drug) {
      return(
        <div>
          <h2 className="display-4">No Drug '{match.params.name}' Found</h2>
          <DrugSearch value='' />
        </div>
      );
    }

    return(
      <div>
        <div className="row">
          <div className="col-6">
            <h2 className="display-4">{drug.name}</h2>
            <p className={`lead text-${drug.preventative ? 'success' : 'info'}`}>
              {drug.preventative ? 'Preventative' : 'Non-Preventative'}
            </p>
          </div>
          <div className="col">
            <DrugSearch value='' />
          </div>
        </div>
        <DrugTable drugName={drug.name} isPreventative={drug.preventative} cost={drug.cost} tier={drug.tier} />
      </div>
    );
  }
}
