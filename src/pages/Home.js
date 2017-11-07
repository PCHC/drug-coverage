import React from 'react';

import DrugSearch from '../components/DrugSearch';

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>Home</h1>
        <DrugSearch />
      </div>
    );
  }
}
