import dispatcher from "../dispatcher";
import TierCostList from '../data/TierCostList';

// Create our various actions, received from the component and sent on to the dispatcher

export function loadTierCosts(type) {
  dispatcher.dispatch({
    type: "RECEIVE_TIERCOSTS",
    tiercosts: TierCostList
  })
}
