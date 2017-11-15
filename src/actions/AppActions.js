import dispatcher from "../dispatcher";

// Create our various actions, received from the component and sent on to the dispatcher

export function acknowledgeTerms() {
  dispatcher.dispatch({
    type: "ACKNOWLEDGE_TERMS",
  });
}
