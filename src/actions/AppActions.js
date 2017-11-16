import dispatcher from "../dispatcher";
import axios from 'axios';

// Create our various actions, received from the component and sent on to the dispatcher

export function acknowledgeTerms() {
  dispatcher.dispatch({
    type: "ACKNOWLEDGE_TERMS",
  });
}

export function doAuth() {
  axios.get('https://freegeoip.net/json/')
    .then(response => {
      dispatcher.dispatch({
        type: "DO_AUTH",
        response
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
}
