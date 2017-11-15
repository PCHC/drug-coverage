import React from 'react';

export default class Disclaimer extends React.Component {
  render() {
    return(
      <aside className={"font-weight-normal mt-3 mb-3 " + (!this.props.acknowledged ? 'lead' : null)}>
        <p className="text-center text-info">These estimates are based on employees seeing PCHC providers and using PCHC Pharmacies.<br/>
        Estimates cannot be made for prescriptions written by outside providers or filled at outside pharmacies.</p>
        <p className="text-center text-info">These are estimates based on average 30-day supplies to help employees gauge how much their prescriptions could cost for  2018.<br/>
        Individual prescriptions may cost more or less than estimated.<br/>
        Costs of medications are subject based on formulary or drug cost adjustments.</p>
      </aside>
    );
  }
}
