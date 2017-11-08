import { EventEmitter } from 'events';

// Store gets Actions from the Dispatcher and sends changes to the Component

import dispatcher from '../dispatcher';
import DrugList from '../data/DrugList';
import TierCostList from '../data/TierCostList';

class DrugStore extends EventEmitter {
  constructor() {
    super();

    this.drugs = DrugList;
    this.tiercosts = TierCostList;
    this.drug = {};
  }

  getAllDrugs() {
    return this.drugs;
  }

  findDrug(key) {
    const drugs = this.drugs;

    return drugs.find(function(drug) {
      return drug.key === key ? drug.key === key : drug.name === key;
    });
  }

  getDrug(key) {
    const drug = this.findDrug(key);

    this.drug = drug;

    return this.drug;
  }

  handleActions(action) {
    switch(action.type) {
      case 'RECEIVE_DRUGS': {
        this.drugs = action.drugs;
        this.emit('change');
        break;
      }
      case 'RECEIVE_TIERCOSTS': {
        this.tiercosts = action.tiercosts;
        this.emit('change');
        break;
      }
      case 'GET_DRUG': {
        this.getDrug(action.drug);
        this.emit('change');
        break;
      }
      default: {
        return true;
      }
    }
  }
}

const drugStore = new DrugStore();

dispatcher.register(drugStore.handleActions.bind(drugStore));

export default drugStore;
