import PropTypes from 'prop-types';

export default {
  BiteObject: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    dateCreated: PropTypes.string.isRequired,
    dateEdited: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  })
} 