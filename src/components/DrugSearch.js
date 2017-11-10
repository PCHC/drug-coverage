import React from 'react';

import * as DrugActions from '../actions/DrugActions';
import Autocomplete from 'react-autocomplete';
import { Link } from 'react-router-dom';

export default class DrugSearch extends React.Component {
  constructor(props) {
    super();

    this.drugs = props.drugs;
    this.state = {
      value: props.value
    }
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
    DrugActions.lookupDrug(item.key);
    //window.location.href = '/drug/' + item.key;
  }

  render() {
    const drugs = this.drugs;

    return(
      <Autocomplete
        value={this.state.value}
        inputProps={{ id: 'drugs-autocomplete', className: 'form-control form-control-lg', placeholder: 'Search Drug Name...' }}
        wrapperStyle={{ position: 'relative' }}
        wrapperProps={{ className: 'drugs-autocomplete' }}
        items={drugs}
        getItemValue={(item) => item.name}
        shouldItemRender={this.matchDrugToTerm}
        sortItems={this.sortDrugs}
        onChange={(event, value) => this.setState({ value })}
        onSelect={(value, item) => this.onSelect(value, item)}
        renderMenu={children => (
          <div className="list-group">
            {children}
            <li className="list-group-item text-muted">If you are unable to find a drug, contact Chelsea Magee at cmagee@pchc.com or ext. 2088</li>
          </div>
        )}
        renderItem={(item, isHighlighted) => (
          <Link
            to={{
              pathname: '/drug/' + item.key,
            }}
            className={`list-group-item list-group-item-action ${isHighlighted ? 'active' : ''}`}
            key={item.key}
          >{item.name}</Link>
        )}
      />
    );
  }
}
