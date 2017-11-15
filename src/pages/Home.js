import React from 'react';

import DrugSearch from '../components/DrugSearch';
import Acknowledgement from '../components/Acknowledgement';

export default class Home extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { acknowledged } = this.props;

    return(
      <div>
        { acknowledged ?
          <DrugSearch value='' home={true} {...this.props} />
        :
          <Acknowledgement {...this.props} />
        }
      </div>
    );
  }
}
