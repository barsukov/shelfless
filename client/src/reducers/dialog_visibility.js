import { TOGGLE_DIALOG } from '../actions/dialog_visibility'
export function toggleDialog(state = {isVisible: false}, action){
  switch (action.type) {
  case TOGGLE_DIALOG:
    return Object.assign({}, state, { isVisible: !state.isVisible })
  default:
    return state
  }
}
