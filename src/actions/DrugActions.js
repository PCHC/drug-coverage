import dispatcher from "../dispatcher";
import DrugList from '../data/DrugList';
import TierCostList from '../data/TierCostList';

// Create our various actions, received from the component and sent on to the dispatcher

export function loadDrugs() {
  dispatcher.dispatch({
    type: "RECEIVE_DRUGS",
    drugs: DrugList
  });
}

export function loadTierCosts(type) {
  console.log('loadTierCosts');
  dispatcher.dispatch({
    type: "RECEIVE_TIERCOSTS",
    tiercosts: TierCostList
  })
}

export function getDrug() {
  dispatcher.dispatch({
    type: "GET_DRUG"
  });
}

export function lookupDrug(drug) {
  dispatcher.dispatch({
    type: "LOOKUP_DRUG",
    drug
  });
}

export function getPlan(plan) {
  dispatcher.dispatch({
    type: "GET_PLAN",
    plan
  });
}
