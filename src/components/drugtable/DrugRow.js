import React from 'react';

export default class DrugRow extends React.Component {
  render() {
    //const { plan } = this.state;
    const { drug, plan, planKey } = this.props;
    //const thisPlan = plan[planKey];
    //const drugCost = plan ? plan[tier] : cost;
    //console.log(tier, thisPlan[tier]);
    const drugCost =  (planKey in plan) ? plan[planKey] : drug.cost;

    if ( drug.preventative && !plan ) {
      return false;
    }

    return(
      <tr className={ (planKey in plan) ? '' : 'table-secondary' }>
        <th scope="row">{ this.props.children }</th>
        <td>${ drugCost }</td>
        <td>${ plan ? drugCost*2 : drugCost*3 }</td>
        <td>${ drugCost*12 }</td>
        <td>{ plan ? '$' + drugCost*6 : '-' }</td>
      </tr>
    );
  }
}
