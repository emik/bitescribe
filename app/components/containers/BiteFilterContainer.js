import React, { Component } from 'react';
import PropTypes from 'prop-types';

// todo: fill in

class BiteFilterContainer extends Component {

  render() {
    return (
      <div>
        test
      </div>
    );
  }
}

BiteFilterContainer.defaultProps = {
}

BiteFilterContainer.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
  resetView: PropTypes.func.isRequired,
};

export default BiteFilterContainer;
