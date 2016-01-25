import { START_REQUEST_BOOK, COMPLETE_REQUEST_BOOK } from '../actions/request_book'

export function requestBook(state = {
  isRequesting: false,
  requestedBooks: []
}, action) {
  switch (action.type) {
  case START_REQUEST_BOOK:
    return Object.assign({}, state, {
      isRequesting: true,
    })
  case COMPLETE_REQUEST_BOOK:
    return Object.assign({}, state, {
      isRequesting: false,
      status: action.status,
      requestedBooks: action.requestedBooks
    })
  default:
    return state
  }
}
