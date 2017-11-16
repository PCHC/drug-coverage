import React from 'react';

import DrugPage from './DrugPage';
import Home from './Home';
import Footer from '../components/layout/Footer';
import Disclaimer from '../components/layout/Disclaimer';

import * as DrugActions from '../actions/DrugActions';
import * as PlanActions from '../actions/PlanActions';
import * as AppActions from '../actions/AppActions';
import DrugStore from '../stores/DrugStore';
import PlanStore from '../stores/PlanStore';
import AppStore from '../stores/AppStore';

export default class Main extends React.Component {
  constructor(props) {
    super();

    this.getDrug = this.getDrug.bind(this);
    this.getPlan = this.getPlan.bind(this);
    this.getAuth = this.getAuth.bind(this);
    this.doAuthPass = this.doAuthPass.bind(this);
    this.handleAuthPassChange = this.handleAuthPassChange.bind(this);
    this.getAcknowledgement = this.getAcknowledgement.bind(this);
    this.drug = DrugStore.lookupDrug(props.match.params.name);
    this.plan = this.drug ? PlanStore.lookupPlan(this.drug) : {};

    this.state = {
      acknowledged: false,
      isAuth: AppStore.getAuth(),
      authPass: null,
      drugs: DrugStore.getAllDrugs(),
      drug: this.drug,
      plan: this.plan,
      getDrug: this.getDrug
    }
  }

  componentWillMount() {
    DrugStore.on('change', this.getDrug);
    PlanStore.on('change', this.getPlan);
    AppStore.on('change', this.getAcknowledgement);
    AppStore.on('auth', this.getAuth);
  }

  componentDidMount() {
    AppActions.doAuth();
  }

  componentWillUnmount() {
    DrugStore.removeListener('change', this.getDrug);
    PlanStore.removeListener('change', this.getPlan);
    AppStore.removeListener('change', this.getAcknowledgement);
    AppStore.removeListener('auth', this.getAuth);
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

  getAcknowledgement() {
    this.setState({
      acknowledged: AppStore.getAcknowledgement()
    })
  }

  getAuth() {
    this.setState({
      isAuth: AppStore.getAuth()
    })
  }

  handleAuthPassChange(e) {
    this.setState({
      authPass: e.target.value
    });
  }

  doAuthPass() {
    const { authPass } = this.state;
    AppActions.doAuthPass(authPass);
  }

  render() {
    const { match } = this.props;
    const { acknowledged, isAuth } = this.state;

    return(
      <div className="container-fluid">
        <h1>PCHC Benefits Prescription Drug Coverage</h1>
        <hr />
        {!isAuth ?
          <div>
            <p className="lead">
              This tool is only available on the PCHC computer network. Please visit when at a PCHC workstation.
            </p>
            <p>
              If you think this is in error, <a href="mailto:cviolette@pchc.com">contact Chris Violette</a>.
            </p>
            <p>
              If you are still unable to open this tool, you may try inputting a password instead. The password to enable this tool can be found <a href="http://intranet/benefits/2018-open-enrollment/#calculators">on the PCHC Intranet.</a>:
            </p>
            <form>
              <div className="form-group">
                <input type="password" className="form-control" onChange={this.handleAuthPassChange} placeholder="Password" />
              </div>
              <a href="#" className="btn btn-primary" onClick={this.doAuthPass}>Submit</a>
            </form>
          </div>
        :
          <div>
            { !('name' in match.params ) ?
              <Home {...this.state} {...this.props} />
            :
              <DrugPage {...this.state} {...this.props} />
            }
            { acknowledged ?
              <Disclaimer acknowledged={this.state.acknowledged} />
            : null }
          </div>
        }
        <Footer />
      </div>
    );
  }
}
