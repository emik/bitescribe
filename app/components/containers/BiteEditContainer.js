import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { BiteObject } from '../utility/PropTypeValues';

class BiteEditContainer extends Component {

  _onEditorStateChange = (editorState) => {
    this.props.editBite({...this.props.selectedBite, editorState});
  };

  render() {
    return (
      <div>
        {this.props.selectedBite && (
          <Editor
            initialEditorState={this.props.selectedBite.editorState ? this.props.selectedBite.editorState : EditorState.createEmpty()}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            toolbarHidden={true}
            onEditorStateChange={this._onEditorStateChange}
          />
        )}
        {!this.props.selectedBite && (
          <div>
            <div>No bite selected.</div>
            <button onClick={this.props.addBite}>Create new bite</button>
          </div>
        )}
      </div>
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
