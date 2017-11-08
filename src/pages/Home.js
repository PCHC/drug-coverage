import React from 'react';
import { Link } from 'react-router-dom';

import DrugSearch from '../components/DrugSearch';

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>Home</h1>
        <DrugSearch value='' />
      </div>
    );
  }
}
