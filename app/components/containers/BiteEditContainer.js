import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import styled from 'styled-components';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { BiteObject } from '../utility/PropTypeValues';
import TagsEditor from '../TagsEditor';
import TitleEditor from '../TitleEditor';
import DatesEditor from '../DatesEditor';

const StyledBiteEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledBiteEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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

const DeleteButton = styled.button`
  height: 100%;
  background: none;
  color: #FFF;
  border: none;
  font-size: 2rem;
  font-weight: 600;
  width: 4.7rem;
  background-color: #3a3a3a;
  cursor: pointer;
  &:hover {
    background-color: #5f4848;
  }
`;

const HeaderEditingWrapper = styled.div`
  display: flex;
`;

const HeaderLeftColumn = styled.div`
  flex: 1;
`;

const HeaderRightColumn = styled.div`
`;
class BiteEditContainer extends Component {

  componentDidUpdate(prevProps, prevState) {
    // TODO: fix editor state
  }

  _onEditorStateChange = (editorState) => {
    this.props.editBite({ ...this.props.selectedBite, editorState });
  };

  _onTagsChange = (event) => {
    this.props.editBite({ ...this.props.selectedBite, tags: event.target.value });
  };

  _onTitleChange = (event) => {
    this.props.editBite({ ...this.props.selectedBite, title: event.target.value });
  };

  _onDateChange = (momentDate) => {
    this.props.editBite({ ...this.props.selectedBite, date: momentDate.valueOf() });
  };

  render() {
    // console.log("this.props.selectedBite");
    // console.log(this.props.selectedBite);
    console.log("this.props.selectedBite");
    console.log(this.props.selectedBite);
    return (
      <StyledBiteEditContainer>
        {this.props.selectedBite && (
          <StyledBiteEditorWrapper>
            <HeaderEditingWrapper>
              <HeaderLeftColumn>
                <TitleEditor textVal={this.props.selectedBite.title} editTitle={this._onTitleChange} />
                <TagsEditor tags={this.props.selectedBite.tags} editTags={this._onTagsChange} />
              </HeaderLeftColumn>
              <HeaderRightColumn>
                <DeleteButton onClick={() => this.props.requestDeleteBite(this.props.selectedBiteID)}>X</DeleteButton>
              </HeaderRightColumn>
            </HeaderEditingWrapper>
            <Editor
              initialEditorState={this.props.selectedBite.editorState}
              toolbarHidden
              placeholder="Your entry"
              editorState={this.props.selectedBite.editorState}
              // toolbarHidden={true}
              onEditorStateChange={this._onEditorStateChange}
              wrapperStyle={{ flex: '1' }}
              editorStyle={{ backgroundColor: '#363636', borderRadius: '3px', padding: '0px 0.6rem' }}
              toolbarStyle={{}}
            />
            <DatesEditor
              editDate={this._onDateChange}
              dateLastEdited={this.props.selectedBite.dateEdited}
              biteDate={this.props.selectedBite.date}
            />
          </StyledBiteEditorWrapper>
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
  selectedBite: null,
  bites: []
}

BiteEditContainer.propTypes = {
  addBite: PropTypes.func.isRequired,
  selectedBite: BiteObject,
  bites: PropTypes.arrayOf(BiteObject),
  editBite: PropTypes.func.isRequired,
  requestDeleteBite: PropTypes.func.isRequired,
  selectedBiteID: PropTypes.number.isRequired,
};

export default BiteEditContainer;
