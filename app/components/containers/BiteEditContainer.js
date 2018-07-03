import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import styled, { css } from 'styled-components';
import { BiteObject } from '../utility/PropTypeValues';

const StyledBiteEditContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoneSelectedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const CreateBiteButton = styled.button`
  font-weight: 300;
  font-size: 2rem;
  background-color: #4bac35;
  color: #FFF;
  border: none;
  padding: 1rem 2rem;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: #61c34a;
  }
`;
const NoBiteText = styled.div`
  font-style: italic;
`;

class BiteEditContainer extends Component {

  _onEditorStateChange = (editorState) => {
    this.props.editBite({ ...this.props.selectedBite, editorState });
  };

  render() {
    return (
      <StyledBiteEditContainer>
        {this.props.selectedBite && (
          <Editor
            initialEditorState={this.props.selectedBite.editorState ? this.props.selectedBite.editorState : EditorState.createEmpty()}
            // toolbarHidden={true}
            onEditorStateChange={this._onEditorStateChange}
            wrapperStyle={{ flex: '1' }}
            editorStyle={{ backgroundColor: '#363636', borderRadius: '3px', padding: '0 1rem' }}
            toolbarStyle={{}}
          />
        )}
        {!this.props.selectedBite && (
          <NoneSelectedWrapper>
            <NoBiteText>No bite selected.</NoBiteText>
            <CreateBiteButton onClick={this.props.addBite}>Create new bite</CreateBiteButton>
          </NoneSelectedWrapper>
        )}
      </StyledBiteEditContainer>
    );
  }
}

BiteEditContainer.defaultProps = {
  selectedBite: {},
  bites: []
}

BiteEditContainer.propTypes = {
  addBite: PropTypes.func.isRequired,
  selectedBite: BiteObject,
  bites: PropTypes.arrayOf(BiteObject),
  editBite: PropTypes.func.isRequired,
};

export default BiteEditContainer;
