import { EventEmitter } from 'events';

// Store gets Actions from the Dispatcher and sends changes to the Component

import dispatcher from '../dispatcher';
//import DrugList from '../data/DrugList';
import DrugList from '../data/DummyDrugList';
import PlanCostList from '../data/PlanCostList';

class DrugStore extends EventEmitter {
  constructor() {
    super();

    this.drugs = DrugList;
    this.plans = PlanCostList;
    this.drug = {};
    this.plan = {};
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

  lookupDrug(key) {
    const drug = this.findDrug(key);
    this.drug = drug;
    return this.drug;
  }

  getDrug(){
    return this.drug;
  }

  getPlan(p) {
    const preventativeName = p.isPreventative ? 'preventative' : 'nonpreventative';

    const type = this.plans[preventativeName];
    const plan = type[p.plankey];
    this.plan = plan;
    return this.plan;
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
      case 'LOOKUP_DRUG': {
        this.lookupDrug(action.drug);
        this.emit('change');
        break;
      }
      case 'GET_DRUG': {
        this.getDrug();
        break;
      }
      case 'GET_PLAN': {
        this.getPlan(action.plan);
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
