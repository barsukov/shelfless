import { ERROR_ACTION, CLOSE_ERROR } from '../actions/error'

export function errorReducer(state = {
  showError: false,
  errorMessage: ""
}, action) {
  switch (action.type) {
    case ERROR_ACTION:
      return Object.assign({}, state, {
        errorMessage: action.message,
        showError: true
      })
    case CLOSE_ERROR:
      return Object.assign({}, state, {
        showError: false
      })
    default:
      return state;
  }
}
