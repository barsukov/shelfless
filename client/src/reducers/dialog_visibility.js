import { SHOW_DIALOG, CLOSE_DIALOG } from '../actions/dialog_visibility'
export function dialogVisibility(state = {
  isVisible: false,
  title: "",
  message: "",
  alertClass: ""
}, action) {
  switch (action.type) {
    case SHOW_DIALOG:
      return Object.assign({}, state, {
        isVisible: true,
        message: action.message,
        alertClass: action.alertClass,
        title: action.title
      })
    case CLOSE_DIALOG:
      return Object.assign({}, state, { isVisible: false })
    default:
      return state
  }
}
