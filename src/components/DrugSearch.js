import React from 'react';

import * as DrugActions from '../actions/DrugActions';
import DrugStore from '../stores/DrugStore';
import Autocomplete from 'react-autocomplete';
import { Route, Redirect } from 'react-router'

export default class DrugSearch extends React.Component {
  constructor(props) {
    super();

    this.getDrugs = this.getDrugs.bind(this);

    this.drugs = DrugStore.getAllDrugs();
    this.state = {
      value: props.value
    }
  }

  componentWillMount() {
    DrugStore.on('change', this.getDrugs);
  }

  componentWillUnmount() {
    DrugStore.removeListener('change', this.getDrugs);
  }

  getDrugs() {
    this.drugs = DrugStore.getAllDrugs();
  }

  matchDrugToTerm(drug, value) {
    return (
      drug.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      drug.key.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
  }

  sortDrugs(a, b, value) {
    const aLower = a.name.toLowerCase()
    const bLower = b.name.toLowerCase()
    const valueLower = value.toLowerCase()
    const queryPosA = aLower.indexOf(valueLower)
    const queryPosB = bLower.indexOf(valueLower)
    if (queryPosA !== queryPosB) {
      return queryPosA - queryPosB
    }
    return aLower < bLower ? -1 : 1
  }

  onSelect(value, item) {
    this.setState({
      value
    });
    window.location.href = '/drug/' + item.key;
  }

  render() {
    const drugs = this.drugs;

    return(
      <Autocomplete
        value={this.state.value}
        inputProps={{ id: 'drugs-autocomplete', class: 'form-control form-control-lg' }}
        wrapperStyle={{ position: 'relative' }}
        wrapperProps={{ class: 'drugs-autocomplete' }}
        items={drugs}
        getItemValue={(item) => item.name}
        shouldItemRender={this.matchDrugToTerm}
        sortItems={this.sortDrugs}
        onChange={(event, value) => this.setState({ value })}
        onSelect={(value, item) => this.onSelect(value, item)}
        renderMenu={children => (
          <div className="menu">
            {children}
          </div>
        )}
        open={true}
        renderItem={(item, isHighlighted) => (
          <div
            className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
            key={item.key}
          >{item.name}</div>
        )}
      />
    );
  }
}
