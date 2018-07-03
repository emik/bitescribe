import PropTypes from 'prop-types';

const BiteObject = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  dateCreated: PropTypes.string.isRequired,
  dateEdited: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
});

const BitesState = PropTypes.shape({
  bites: PropTypes.arrayOf(BiteObject).isRequired,
  selectedBiteID: PropTypes.number.isRequired,
});

export default { BiteObject, BitesState } 