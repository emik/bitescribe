// @flow
import { ADD_BITE, DELETE_BITE, EDIT_BITE } from '../actions/bites';

type actionType = {
  +type: object
};

export default function bites(state: object = [], action: actionType) {
  switch (action.type) {
    case ADD_BITE:
      return [...state, action.bite];
    case DELETE_BITE:
      return state.filter(bite => bite.id !== action.biteID);
    case EDIT_BITE:
      return state.filter(bite => bite.id !== action.biteID);
    default:
      return state;
  }
}
