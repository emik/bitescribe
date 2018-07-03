import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BiteObject } from '../utility/PropTypeValues';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #3b3c3e;
  min-width: 10rem;
`;

const Button = styled.button`
  padding: 0.25rem 1rem;
  color: #FFF;
  width: 100%;
  border: none;
  background: none;
  color: #e4927e;
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
`;

const AddButton = styled.button`
  background-color: #1f1f1f;
  width: 100%;
  display: block;
  color: #c55c43;
  border: none;
  padding: 0.5rem 0;
  font-size: 4rem;
  line-height: 2.9rem;
`;


// todo:  add popup that shows filters
//        add search input at top
//        refactor bitelist

class BiteListContainer extends Component {
  render() {
    return (
      <Wrapper>
        <List>
          {this.props.bites.map(bite => {
            return (
              <Bite key={bite.id}>
                <Button style={{ fontStyle: bite.name ? 'initial' : 'italic' }}>{bite.name || 'Unnamed'}</Button>
              </Bite>
            )
          })}
        </List>
        <AddButton title="Add new entry">+</AddButton>
      </Wrapper>
    );
  }
}
BiteListContainer.defaultProps = {
  selectedBite: { id: null }
}

BiteListContainer.propTypes = {
  selectedBite: BiteObject,
  bites: PropTypes.arrayOf(BiteObject).isRequired,
};

export default BiteListContainer;
