import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BiteObject } from '../utility/PropTypeValues';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

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

BiteEditContainer.propTypes = {
  addBite: PropTypes.func.isRequired,
  selectedBite: BiteObject,
  bites: PropTypes.arrayOf(BiteObject)
};

export default BiteEditContainer;
