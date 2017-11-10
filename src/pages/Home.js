import React from 'react';

import DrugSearch from '../components/DrugSearch';

export default class Home extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <div>
        <DrugSearch value='' {...this.props} />
      </div>
    );
  }
}
