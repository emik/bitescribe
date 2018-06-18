import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BiteObject } from '../utility/PropTypeValues';

class BiteListContainer extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.bites.map(bite => {
            return (
              <li key={bite.id}>{bite.name}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

BiteListContainer.propTypes = {
  selectedBite: BiteObject,
  bites: PropTypes.arrayOf(BiteObject).isRequired,
};

export default BiteListContainer;
