import { EventEmitter } from 'events';

// Store gets Actions from the Dispatcher and sends changes to the Component

import dispatcher from '../dispatcher';
import PlanCostList from '../data/PlanCostList';

class PlanStore extends EventEmitter {
  constructor() {
    super();

    this.plans = PlanCostList;
    this.plan = {}
  }

  getAll() {
    return this.plans;
  }

  getPlan(isPreventative, plankey) {
    const preventativeName = isPreventative ? 'preventative' : 'nonpreventative';

    const type = this.plans[preventativeName];
    const plan = type[plankey];
    this.plan = plan;
    return this.plan;
  }

  handleActions(action) {
    switch(action.type) {
      default: {
        return true;
      }
    }
  }
}

const planStore = new PlanStore();

dispatcher.register(planStore.handleActions.bind(planStore));

export default planStore;
