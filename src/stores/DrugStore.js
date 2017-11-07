import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class DrugStore extends EventEmitter {
  constructor() {
    super();

    this.drugs = [{}];
  }

  getAll() {
    return this.drugs;
  }

  handleActions(action) {
    switch(action.type) {
      case 'RECEIVE_DRUGS': {
        this.drugs = action.drugs;
        this.emit('change');
      }
    }
  }
}

const drugStore = new DrugStore;

dispatcher.register(drugStore.handleActions.bind(drugStore));

export default drugStore;
