import React from 'react';

import PlanStore from '../../stores/PlanStore';

export default class DrugRow extends React.Component {
  constructor(props) {
    super();

    this.getTier = this.getTier.bind(this);

    this.state = {
      plan: PlanStore.getPlan(props.isPreventative, props.planKey),
    };
  }

  componentWillMount() {
    PlanStore.on('change', this.getTier);
  }

  componentWillUnmount() {
    PlanStore.removeListener('change', this.getTier);
  }

  getTier() {
    this.setState({
      plan: PlanStore.getPlan(this.props.isPreventative, this.props.planKey),
    })
  }

  render() {
    const { plan } = this.state;
    const { tier, cost } = this.props;
    const drugCost = plan ? plan[tier] : cost;

    return(
      <tr className={ plan ? '' : 'table-secondary' }>
        <th scope="row">{ this.props.children }</th>
        <td>${ drugCost }</td>
        <td>${ plan ? drugCost*2 : drugCost*3 }</td>
        <td>${ drugCost*12 }</td>
        <td>{ plan ? '$' + drugCost*6 : '-' }</td>
      </tr>
    );
  }
}
