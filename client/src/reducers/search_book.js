import { START_SEARCH_BOOK, COMPLETE_SEARCH_BOOK, CLEAR_SEARCH_RESULT } from '../actions/search_book'

function defaultState() {
  return  {
    isLoading: false,
    searchTerm: "",
    items: [],
    page: 1
  }
}

export function searchBook(state = defaultState(), action) {
  switch (action.type) {
  case CLEAR_SEARCH_RESULT:
    return defaultState()
  case START_SEARCH_BOOK:
    return Object.assign({}, state, {
      isSearching: true,
    })
  case COMPLETE_SEARCH_BOOK:
    return Object.assign({}, state, {
      isLoading: false,
      searchTerm: action.searchTerm,
      items: action.items,
      page: action.page,
      hasMoreItems: action.hasMoreItems
    })
  default:
    return state
  }
}
