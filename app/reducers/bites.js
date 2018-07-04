import moment from 'moment';
import { ADD_BITE, DELETE_BITE, EDIT_BITE, SELECT_BITE, DELETE_SELECTED_BITE } from '../actions/bites';

const biteTemplate = () => {
  return {
    id: 0,
    title: '',
    tags: [],
    date: moment().valueOf(),
    dateCreated: moment().valueOf(),
    dateEdited: moment().valueOf(),
    text: '',
    editorState: null
  }
};

const getHighestID = bitesArray => {
  return bitesArray.reduce((carry, bite) => {
    if (bite.id > carry) return bite.id;
    return carry;
  }, 1);
}

export default function bites(state = { bites: [], selectedBiteID: 0 }, action: actionType) {
  switch (action.type) {
    case ADD_BITE: {
      const newID = getHighestID(state.bites) + 1;
      const newBites = [...state.bites, { ...biteTemplate(), id: newID }];
      return { ...state, bites: newBites, selectedBiteID: newID };
    }
    case DELETE_BITE: {
      const newBites = state.bites.filter(bite => bite.id !== action.biteID);
      return { ...state, bites: newBites, selectedBiteID: action.biteID === state.selectedBiteID ? 0 : state.selectedBiteID };
    }
    case DELETE_SELECTED_BITE: {
      const newBites = state.bites.filter(bite => bite.id !== state.selectedBiteID);
      return { ...state, bites: newBites, selectedBiteID: 0 };
    }
    case EDIT_BITE: {
      let newBites = state.bites.filter(bite => bite.id !== action.bite.id);
      const oldBite = state.bites.find(bite => bite.id === action.bite.id);
      newBites = [...newBites, { ...action.bite, dateCreated: oldBite.dateCreated, date: oldBite.date, dateEdited: moment().valueOf() }];
      return { ...state, bites: newBites };
    }
    case SELECT_BITE:
      return { ...state, selectedBiteID: action.biteID };
    default:
      return state;
  }
}
