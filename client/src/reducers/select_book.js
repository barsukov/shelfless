import { SELECT_BOOK } from '../actions/select_book'
import "babel-polyfill"

export function selectedBook(state = {}, action){
  switch (action.type) {
  case SELECT_BOOK:
    return Object.assign({}, state, { book: action.book })
  default:
    return state
  }
}
