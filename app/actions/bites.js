// @flow
export const ADD_BITE = 'ADD_BITE';
export const EDIT_BITE = 'EDIT_BITE';
export const DELETE_BITE = 'DELETE_BITE';
export const SELECT_BITE = 'SELECT_BITE';
export const DELETE_SELECTED_BITE = 'DELETE_SELECTED_BITE';

export function addBite() {
  return {
    type: ADD_BITE
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

export function selectBite(biteID) {
  return {
    type: SELECT_BITE,
    biteID
  }
}

export function deleteSelectedBite() {
  return {
    type: DELETE_SELECTED_BITE
  }
}