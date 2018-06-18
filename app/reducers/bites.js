import { ADD_BITE, DELETE_BITE, EDIT_BITE, SELECT_BITE } from '../actions/bites';

const biteTemplate = {
  id: 0,
  name: '',
  tags: [],
  dateCreated: '',
  dateEdited: '',
  text: '',
  editorState: null
};

const getHighestID = bites => {
  return bites.reduce((carry, bite) => {
    if (bite.id > carry) return bite.id;
    return carry;
  }, 1);
}

export default function bites(state = { bites: [], selectedBiteID: 0 }, action: actionType) {
  switch (action.type) {
    case ADD_BITE: {
      const newID = getHighestID(state.bites) + 1;
      const newBites = [...state.bites, {...biteTemplate, id: newID }];
      return { ...state, bites: newBites, selectedBiteID: newID };
    }
    case DELETE_BITE: {
      const newBites = state.bites.filter(bite => bite.id !== action.biteID);
      return { ...state, bites: newBites };
    }
    case EDIT_BITE: {
      let newBites = state.bites.filter(bite => bite.id !== action.bite.id);
      newBites = [...newBites, action.bite];
      return { ...state, bites: newBites };
    }
    case SELECT_BITE:
      return { ...state, selectedBiteID: action.bite.id }
    default:
      return state;
  }
}
