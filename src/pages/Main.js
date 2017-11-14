import React from 'react';

import DrugPage from './DrugPage';
import Home from './Home';
import Footer from '../components/layout/Footer';
import Disclaimer from '../components/layout/Disclaimer';

import * as DrugActions from '../actions/DrugActions';
import * as PlanActions from '../actions/PlanActions';
import DrugStore from '../stores/DrugStore';
import PlanStore from '../stores/PlanStore';

export default class Main extends React.Component {
  constructor(props) {
    super();

    this.getDrug = this.getDrug.bind(this);
    this.getPlan = this.getPlan.bind(this);
    this.drug = DrugStore.lookupDrug(props.match.params.name);
    this.plan = this.drug ? PlanStore.lookupPlan(this.drug) : {};

    this.state = {
      drugs: DrugStore.getAllDrugs(),
      drug: this.drug,
      plan: this.plan,
      getDrug: this.getDrug
    }
  }

  componentWillMount() {
    DrugStore.on('change', this.getDrug);
    PlanStore.on('change', this.getPlan);
  }

  componentWillUnmount() {
    DrugStore.removeListener('change', this.getDrug);
    PlanStore.removeListener('change', this.getPlan);
  }

  componentWillReceiveProps(nextProps) {
    if(
      this.props.match !== nextProps.match &&
      ('name' in nextProps.match.params)
    ) {
      DrugActions.lookupDrug(nextProps.match.params.name);
    }
  }

  getDrug() {
    this.setState({
      drug: DrugStore.getDrug()
    }, () => {
      PlanActions.lookupPlan(this.state.drug);
    });
  }

  getPlan() {
    this.setState({
      plan: PlanStore.getPlan()
    })
  }

  render() {
    const { match } = this.props;

    return(
      <div className="container-fluid">
        <h1>PCHC Benefits Prescription Drug Coverage</h1>
        <p className="alert alert-warning">This tool is currently being tested. The prices seen are not accurate.</p>
        <hr />
        { !('name' in match.params ) ?
          <Home {...this.state} {...this.props} />
        :
          <DrugPage {...this.state} {...this.props} />
        }
        <Disclaimer />
        <Footer />
      </div>
    );
  }
}
