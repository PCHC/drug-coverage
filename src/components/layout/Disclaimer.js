import React from 'react';

export default class Disclaimer extends React.Component {
  render() {
    return(
      <aside>
        <hr />
        <div className="container">
          <p className="text-center text-info">These are estimates based on average 30-day supplies to help employees gauge how much their prescriptions could cost for  2018.<br/>
          Individual prescriptions may cost more or less than estimated.<br/>
          Costs of medications are subject to change as low-cost medications change and drug costs rise.</p>
          <p className="text-center text-info">These estimates are based on employees seeing PCHC providers and using PCHC Pharmacies.<br/>
          Estimates cannot be made for prescriptions written by outside providers or filled at outside pharmacies.</p>
        </div>
      </aside>
    );
  }
}
