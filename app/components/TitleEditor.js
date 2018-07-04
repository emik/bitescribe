import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Textarea from "react-textarea-autosize";

const StyledTextarea = styled(Textarea)`
  background-color: var(--input-bg-color1);
  border: none;
  font-size: 1.7rem;
  color: var(--input-font-color1);
  width: 100%;
  padding: 0.3rem 0.6rem;
  font-weight: 100;
  font-family: var(--main-font);
  resize: none;
`;

const TitleEditor = props => (
  <div>
    <StyledTextarea placeholder="Title" autoFocus onChange={props.editTitle} value={props.textVal} />
  </div>
);

TitleEditor.propTypes = {
  editTitle: PropTypes.func.isRequired,
  textVal: PropTypes.string.isRequired,
};

export default TitleEditor;