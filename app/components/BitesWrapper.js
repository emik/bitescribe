import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BiteEditContainer from './containers/BiteEditContainer';
import BiteListContainer from './containers/BiteListContainer';
import BiteFilterContainer from './containers/BiteFilterContainer';
import { BiteObject, BitesState } from './utility/PropTypeValues';

const Page = styled.div`
  background-color: #3b3c3e;
  color: #FFF;
`;

const BoxSection = styled.div`
  position: relative;
  height: 100%;
`;

// todo: implement filter view, pass in _resetView to all non-editor views, add close button that calls it
const views = { Editor: 0, Filter: 1 };

class BitesWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: views.Editor,
      filtersApplied: {},
      dimensions: { width: 1076, height: 768 },
      sidebarWidth: 17 // in %
    };
  }

  // componentDidMount() {
  //   this.updateDimensions();
  //   window.addEventListener("resize", this.updateDimensions.bind(this));
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateDimensions.bind(this));
  // }

  // updateDimensions = () => {
  //   this.setState({ dimensions: { width: window.innerWidth, height: window.innerHeight } });
  // }

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

  _requestDelete = (biteID) => {
    if (confirm("Delete this entry?")) {
      this.props.deleteBite(biteID);
    }
  }

  render() {
    return (
      // <Page style={{ width: this.state.dimensions.width, height: this.state.dimensions.height }}>
      <Page>
        <BiteListContainer
          bites={this.props.bitesState.bites}
          selectBite={this.props.selectBite}
          addBite={this.props.addBite}
          filtersApplied={this.state.filtersApplied}
          selectedBiteID={this.props.bitesState.selectedBiteID}
          sidebarWidth={this.state.sidebarWidth}
          requestDeleteBite={this._requestDelete}
        />
        <BoxSection style={{ left: `${this.state.sidebarWidth}%`, width: `${100 - this.state.sidebarWidth}%` }}>
          {
            this.state.currentView === views.Editor &&
            <BiteEditContainer
              bites={this.props.bitesState.bites}
              editBite={this.props.editBite}
              addBite={this.props.addBite}
              selectedBite={this._getSelectedBite()}
              requestDeleteBite={this._requestDelete}
              selectedBiteID={this.props.bitesState.selectedBiteID}
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
        </BoxSection>
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
  deleteSelectedBite: PropTypes.func.isRequired,
  editBite: PropTypes.func.isRequired,
  selectBite: PropTypes.func.isRequired,
  bites: PropTypes.arrayOf(BiteObject),
  bitesState: BitesState,
};

export default BitesWrapper;