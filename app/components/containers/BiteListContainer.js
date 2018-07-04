import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BiteObject } from '../utility/PropTypeValues';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #3b3c3e;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
`;

const Button = styled.button`
  padding: 0.25rem 1rem;
  color: #FFF;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  color: #e4927e;
  text-align: left;
  word-wrap: break-word;
`;

const List = styled.div`
  display: block;
  list-style: none;
  overflow-y: scroll;
  flex: 1;
`;

const Bite = styled.div`
  width: 100%;
  display: block;
  background-color: ${props => props.isSelected ? '#303030' : 'initial'};
  &:hover {
    background-color:  ${props => props.isSelected ? '#303030' : '#4a4a4a'};
  }
`;

const AddButton = styled.button`
  background-color: #1f1f1f;
  width: 100%;
  display: block;
  color: #c55c43;
  border: none;
  padding: 0.5rem 0;
  font-size: 4rem;
`;


// todo:  add popup that shows filters
//        add search input at top
//        refactor bitelist

class BiteListContainer extends Component {
  render() {
    return (
      <Wrapper style={{ width: `${this.props.sidebarWidth}%` }}>
        <List>
          {this.props.bites.map(bite => {
            return (
              <Bite isSelected={bite.id === this.props.selectedBite.id} key={bite.id}>
                <Button onClick={() => this.props.selectBite(bite.id)} style={{ fontStyle: bite.title ? 'initial' : 'italic' }}>{bite.title || 'Unnamed'}</Button>
              </Bite>
            )
          })}
        </List>
        <div>
          <AddButton onClick={this.props.addBite} title="Add new entry">+</AddButton>
        </div>
      </Wrapper>
    );
  }
}
BiteListContainer.defaultProps = {
  selectedBite: { id: null }
}

BiteListContainer.propTypes = {
  selectedBite: BiteObject,
  sidebarWidth: PropTypes.number.isRequired,
  selectBite: PropTypes.func.isRequired,
  addBite: PropTypes.func.isRequired,
  bites: PropTypes.arrayOf(BiteObject).isRequired,
};

export default BiteListContainer;
