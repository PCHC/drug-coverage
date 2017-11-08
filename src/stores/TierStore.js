import { EventEmitter } from 'events';

// Store gets Actions from the Dispatcher and sends changes to the Component

import dispatcher from '../dispatcher';
import TierCostList from '../data/TierCostList';

class TierStore extends EventEmitter {
  constructor() {
    super();

    this.tiercosts = TierCostList;
    this.tier = {}
  }

  getAll() {
    return this.tiercosts;
  }

  getTier(isPreventative, tierNum) {
    const preventativeName = isPreventative ? 'preventative' : 'nonpreventative';
    const type = this.tiercosts[preventativeName];
    const tier = type[tierNum];
    console.log(tier);
    return this.tier;
  }

  handleActions(action) {
    switch(action.type) {
      case 'RECEIVE_TIERCOSTS': {
        this.tiercosts = action.tiercosts;
        this.emit('change');
      }
      default : {
        return true;
      }
    }
  }
}

const tierStore = new TierStore;

dispatcher.register(tierStore.handleActions.bind(tierStore));

export default tierStore;
