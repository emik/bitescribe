// @flow
export const ADD_BITE = 'ADD_BITE';
export const EDIT_BITE = 'EDIT_BITE';
export const DELETE_BITE = 'DELETE_BITE';
export const SELECT_BITE = 'SELECT_BITE';

export function addBite(bite) {
  return {
    type: ADD_BITE,
    bite
  };
}

export function editBite(bite) {
  return {
    type: EDIT_BITE,
    bite
  };
}

export function deleteBite(biteID) {
  return {
    type: DELETE_BITE,
    biteID
  };
}

export function selectBite(bite) {
  return {
    type: SELECT_BITE,
    bite
  }
}