import { REQUEST_BOOKS, RECEIVE_BOOKS } from '../actions/book'

export function books(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
  case REQUEST_BOOKS:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    })
  case RECEIVE_BOOKS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.books,
    })
  default:
    return state
  }
}
