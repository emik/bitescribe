import PropTypes from 'prop-types';

const BiteObject = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.number.isRequired,
  dateCreated: PropTypes.number.isRequired,
  dateEdited: PropTypes.number.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  editorState: PropTypes.object,
});

const BitesState = PropTypes.shape({
  bites: PropTypes.arrayOf(BiteObject).isRequired,
  selectedBiteID: PropTypes.number.isRequired,
});

export default { BiteObject, BitesState } 