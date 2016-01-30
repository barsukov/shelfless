import { REQUEST_BOOKS, RECEIVE_BOOKS } from '../actions/book'

export function books(state = {
  isFetching: false,
  didInvalidate: false,
  items: [],
  page: 1
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
      hasMoreItems: action.hasMoreItems,
      page: action.page,
    })
  default:
    return state
  }
}
