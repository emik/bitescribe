import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BiteEditContainer from './containers/BiteEditContainer';
import BiteListContainer from './containers/BiteListContainer';
import BiteFilterContainer from './containers/BiteFilterContainer';
import { BiteObject, BitesState } from './utility/PropTypeValues';

const Page = styled.div`
  background: #FFF;
  display: grid;
  grid-template-columns: 1fr 5fr;
  min-height: 100vh;
`;

// todo: implement filter view, pass in _resetView to all non-editor views, add close button that calls it
const views = { Editor: 0, Filter: 1 };

class BitesWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: views.Editor,
      filtersApplied: {}
    };
  }

  _getSelectedBite = () => {
    if (this.props.bitesState.selectedBiteID === 0) return null;
    return this.props.bitesState.bites.find(bite => bite.id === this.props.bitesState.selectedBiteID);
  }

  _changeView = (newView) => {
    this.setState({ currentView: newView });
  }

  _resetView = () => {
    this.setState({ currentView: views.Editor });
  }

  _setFilters = (newFilters) => {
    this.setState({ filtersApplied: newFilters });
  }

  render() {
    console.log("this.props");
    console.log(this.props);
    return (
      <Page>
        <BiteListContainer
          bites={this.props.bitesState.bites}
          selectBite={this.props.selectBite}
          addBite={this.props.addBite}
          filtersApplied={this.state.filtersApplied}
          deleteBite={this.props.deleteBite}
          selectedBite={this._getSelectedBite()}
        />
        {
          this.state.currentView === views.Editor &&
          <BiteEditContainer
            bites={this.props.bitesState.bites}
            editBite={this.props.editBite}
            addBite={this.props.addBite}
            selectedBite={this._getSelectedBite()}
          />
        }
        {
          this.state.currentView === views.Filter &&
          <BiteFilterContainer
            filters={this.state.filtersApplied}
            setFilters={this._setFilters}
            resetView={this._resetView}
          />
        }
      </Page>
    );
  }
}

BitesWrapper.defaultProps = {
  bites: []
}

BitesWrapper.propTypes = {
  addBite: PropTypes.func.isRequired,
  deleteBite: PropTypes.func.isRequired,
  editBite: PropTypes.func.isRequired,
  selectBite: PropTypes.func.isRequired,
  bites: PropTypes.arrayOf(BiteObject),
  bitesState: BitesState,
};

export default BitesWrapper;