import { START_SEARCH_BOOK, COMPLETE_SEARCH_BOOK } from '../actions/search_book'

export function searchBook(state = {
  isSearching: false,
  books: []
}, action) {
  switch (action.type) {
  case START_SEARCH_BOOK:
    return Object.assign({}, state, {
      isSearching: true,
    })
  case COMPLETE_SEARCH_BOOK:
    return Object.assign({}, state, {
      isSearching: false,
      searchTerm: action.searchTerm,
      books: action.searchResult.books
    })
  default:
    return state
  }
}
