import { EventEmitter } from 'events';

// Store gets Actions from the Dispatcher and sends changes to the Component

import dispatcher from '../dispatcher';

class AppStore extends EventEmitter {
  constructor() {
    super();

    this.acknowledged = false;
  }

  acknowledgeTerms() {
    const acknowledged = true;
    this.acknowledged = acknowledged;
    return this.acknowledged;
  }

  getAcknowledgement() {
    return this.acknowledged;
  }

  handleActions(action) {
    switch(action.type) {
      case 'ACKNOWLEDGE_TERMS': {
        this.acknowledgeTerms();
        this.emit('change');
        break;
      }
      default: {
        return true;
      }
    }
  }
}

const appStore = new AppStore();

dispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;
