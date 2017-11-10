import { EventEmitter } from 'events';

// Store gets Actions from the Dispatcher and sends changes to the Component

import dispatcher from '../dispatcher';
import TierCostList from '../data/TierCostList';

class PlanStore extends EventEmitter {
  constructor() {
    super();

    this.plans = TierCostList;
    this.plan = {}
  }

  getAll() {
    return this.plans;
  }

  lookupPlan(drug) {
    const preventativeName = drug.preventative ? 'preventative' : 'nonpreventative';
    const type = this.plans[preventativeName];
    const plan = type[drug.tier];
    this.plan = plan;
    return this.plan;
  }

  getPlan() {
    return this.plan;
  }

  handleActions(action) {
    switch(action.type) {
      case 'LOAD_PLAN': {
        this.getPlan(action.plan);
        break;
      }
      case 'LOOKUP_PLAN': {
        this.lookupPlan(action.drug);
        this.emit('change');
        break;
      }
      case 'GET_PLAN': {
        this.getPlan();
        break;
      }
      default: {
        return true;
      }
    }
  }
}

const planStore = new PlanStore();

dispatcher.register(planStore.handleActions.bind(planStore));

export default planStore;
