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

export function getDrug(drug) {
  dispatcher.dispatch({
    type: "GET_DRUG",
    drug
  });
}