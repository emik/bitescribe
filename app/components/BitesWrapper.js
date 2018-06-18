import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import BiteEditContainer from './containers/BiteEditContainer';
import BiteListContainer from './containers/BiteListContainer';
import { BiteObject } from './utility/PropTypeValues';


class BitesWrapper extends Component {

  _getSelectedBite = () => {
    if (this.props.bitesState.selectedBiteID === 0) return null;
    return this.props.bitesState.bites.find(bite => bite.id === this.props.bitesState.selectedBiteID);
  }

  render() {
    console.log("this.props");
    console.log(this.props);
    return (
      <div>
        <BiteListContainer 
          bites = {this.props.bitesState.bites}
          selectBite = {this.props.selectBite}
          addBite = {this.props.addBite}
          deleteBite = {this.props.deleteBite}
          selectedBite = {this._getSelectedBite()}
        />
        <BiteEditContainer 
          bites = {this.props.bitesState.bites}
          editBite = {this.props.editBite}
          addBite = {this.props.addBite}
          selectedBite = {this._getSelectedBite()}
        />
      </div>
    );
  }
}

BitesWrapper.propTypes = {
  addBite: PropTypes.func.isRequired,
  deleteBite: PropTypes.func.isRequired,
  editBite: PropTypes.func.isRequired,
  selectBite: PropTypes.func.isRequired,
  bites: PropTypes.arrayOf(BiteObject),
  selectedBiteID: PropTypes.number.isRequired,

};

export default BitesWrapper;