import { START_SEARCH_BOOK, COMPLETE_SEARCH_BOOK } from '../actions/search_book'

export function searchBook(state = {
  isSearching: false,
  searchTerm: "",
  items: [],
  page: 1
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
      items: action.items,
      page: action.page,
      hasMoreItems: action.hasMoreItems
    })
  default:
    return state
  }
}
