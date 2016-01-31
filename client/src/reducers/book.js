import { REQUEST_BOOKS, RECEIVE_BOOKS, CLEAR_FETCH_RESULT } from '../actions/book'

function defaultState() {
  return  {
    isLoading: false,
    didInvalidate: false,
    items: [],
    page: 1
  }
}

export function books(state = defaultState(), action) {
  switch (action.type) {
  case CLEAR_FETCH_RESULT:
    return defaultState()
  case REQUEST_BOOKS:
    return Object.assign({}, state, {
      isLoading: true,
      didInvalidate: false
    })
  case RECEIVE_BOOKS:
    return Object.assign({}, state, {
      isLoading: false,
      didInvalidate: false,
      items: action.books,
      hasMoreItems: action.hasMoreItems,
      page: action.page,
    })
  default:
    return state
  }
}
