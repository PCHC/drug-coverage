import dispatcher from "../dispatcher";

// Create our various actions, received from the component and sent on to the dispatcher

export function lookupPlan(drug) {
  dispatcher.dispatch({
    type: "LOOKUP_PLAN",
    drug
  });
}

export function getPlan() {
  dispatcher.dispatch({
    type: "GET_PLAN"
  });
}

export function loadPlan(plan) {
  dispatcher.dispatch({
    type: "LOAD_PLAN",
    plan
  });
}
