import React from 'react';

export default class DrugRow extends React.Component {
  render() {
    //const { plan } = this.state;
    const { drug, plan, planKey, isHDHP } = this.props;
    const isHDHPbase = (planKey === 'hdhp');
    //const thisPlan = plan[planKey];
    //const drugCost = plan ? plan[tier] : cost;
    //console.log(tier, thisPlan[tier]);
    const drugCost =  (planKey in plan) ? plan[planKey] : drug.cost;

    if ( drug.preventative && isHDHPbase ) {
      return false;
    }

    return(
      <tr className={ (planKey in plan) ? '' : 'table-secondary' }>
        <th scope="row">{ this.props.children }</th>
        <td>${ drugCost }</td>
        <td>${ plan ? drugCost*2 : drugCost*3 }</td>
        <td>{
          drug.preventative || !isHDHP || (isHDHP && isHDHPbase) ? '$' + drugCost*12 : '-'
        }</td>
        <td>{
          drug.preventative || !isHDHP ? '$' + drugCost*8 : '-'
        }</td>
      </tr>
    );
  }
}
