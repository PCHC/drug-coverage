import dispatcher from "../dispatcher";
import DrugList from '../data/DrugList';

export function loadDrugs() {
  dispatcher.dispatch({
    type: "RECEIVE_DRUGS",
    drugs: DrugList
  });
}
