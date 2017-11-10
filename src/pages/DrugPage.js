import React from 'react';

import DrugTable from '../components/DrugTable';
import DrugSearch from '../components/DrugSearch';

export default class DrugPage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const {drug, match} = this.props;

    if(!drug) {
      return(
        <div>
          <h2 className="display-4">No Drug '{match.params.name}' Found</h2>
          <DrugSearch value='' {...this.props} />
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
            <DrugSearch value='' {...this.props} />
          </div>
        </div>
        <DrugTable drugName={drug.name} isPreventative={drug.preventative} cost={drug.cost} tier={drug.tier} {...this.props} />
      </div>
    );
  }
}
