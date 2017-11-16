import { EventEmitter } from 'events';

// Store gets Actions from the Dispatcher and sends changes to the Component

import dispatcher from '../dispatcher';

class AppStore extends EventEmitter {
  constructor() {
    super();

    this.acknowledged = false;
    this.isAuth = false;
  }

  acknowledgeTerms() {
    const acknowledged = true;
    this.acknowledged = acknowledged;
    return this.acknowledged;
  }

  getAcknowledgement() {
    return this.acknowledged;
  }

  doAuth(response) {
    const ips = [
      '216.195.133.189',
      '72.45.183.107',
      '96.61.69.202',
      '66.186.180.200',
      '142.0.109.36',
      '70.20.51.202',
      '127.0.0.1'
    ];

    const {data} = response;

    ips.map((ip) => {
      if(data.ip === ip) {
        this.isAuth = true;
        this.emit('auth');
      }
    });
  }

  getAuth() {
    return this.isAuth;
  }

  handleActions(action) {
    switch(action.type) {
      case 'ACKNOWLEDGE_TERMS': {
        this.acknowledgeTerms();
        this.emit('change');
        break;
      }
      case 'DO_AUTH': {
        this.doAuth(action.response);
      }
      default: {
        return true;
      }
    }
  }
}

const appStore = new AppStore();

dispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;
