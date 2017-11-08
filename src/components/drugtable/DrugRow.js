import React from 'react';

import * as TierActions from '../../actions/TierActions';
import TierStore from '../../stores/TierStore';
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
    const { name, tier, cost } = this.props;
    const drugCost = plan[tier];

    return(
      <tr>
        <td>{ name }</td>
        <td>${ drugCost }</td>
        <td>${ drugCost*2 }</td>
        <td>${ drugCost*12 }</td>
        <td>${ drugCost*6 }</td>
      </tr>
    );
  }
}
