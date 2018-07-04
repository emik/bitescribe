import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Textarea from "react-textarea-autosize";

const StyledTextarea = styled(Textarea)`
  background-color: var(--input-bg-color2);
  border: none;
  font-size: 0.8rem;
  color: var(--input-font-color1);
  width: 100%;
  padding: 0.3rem 0.6rem;
  font-weight: 100;
  font-family: var(--main-font);
  resize: none;
`;

const TagsEditor = props => (
  <div>
    <StyledTextarea placeholder="Tags" onChange={props.editTags} value={props.textVal} />
  </div>
);

TagsEditor.propTypes = {
  editTags: PropTypes.func.isRequired,
  textVal: PropTypes.string.isRequired,
};

export default TagsEditor;