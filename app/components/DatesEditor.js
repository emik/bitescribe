import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StyledDatesEditor = styled.div`
  background-color: var(--input-bg-color2);
  border: none;
  font-size: 0.8rem;
  color: var(--input-font-color1);
  width: 100%;
  padding: 0.3rem 0.6rem;
  font-weight: 100;
  font-family: var(--main-font);
  resize: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const DateEdited = styled.div`
  color: #7b7b7b;
  font-style: italic;
`;

const StyledDatePicker = styled(DatePicker)`
  background-color: #2f2f2f;
  border: none;
  color: #5e5e5e;
  border-radius: 2px;
  text-align: center;
  padding: 0.25rem 1rem 0.1rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #2a2a2a;
  }
`;

const DatesEditor = props => (
  <StyledDatesEditor>
    <StyledDatePicker
      selected={moment(props.biteDate)}
      onChange={props.editDate}
      showTimeSelect
      timeIntervals={15}
      timeCaption="Time"
      timeFormat="HH:mm"
      dateFormat="LLL"
    />
    <DateEdited>{`Last Edited: ${moment(props.dateLastEdited).format('MMMM Do YYYY, h:mm:ss a')}`}</DateEdited>
  </StyledDatesEditor>
);

DatesEditor.propTypes = {
  editDate: PropTypes.func.isRequired,
  dateLastEdited: PropTypes.number.isRequired,
  biteDate: PropTypes.number.isRequired,
};

export default DatesEditor;