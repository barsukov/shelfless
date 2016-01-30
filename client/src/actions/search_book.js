import { searchRequest } from '../lib/fetcher'

export const START_SEARCH_BOOK = 'START_SEARCH_BOOK'
export function startSearchBook(searchTerm, page) {
  return {
    type: START_SEARCH_BOOK,
    searchTerm: searchTerm,
    page: page
  }
}

export const COMPLETE_SEARCH_BOOK = 'COMPLETE_SEARCH_BOOK'
function completeSearchBook(json, searchTerm, books) {
  return {
    type: COMPLETE_SEARCH_BOOK,
    searchTerm: searchTerm,
    items: books.concat(json.books),
    page: parseInt(json.page),
    hasMoreItems: json.hasMoreItems
  }
}

export function searchBook(searchTerm, page) {
  return (dispatch, getState) => {
    dispatch(startSearchBook(searchTerm, page))
    let books = getState().searchBook.items
    return searchRequest(searchTerm, page)
      .then(json =>
        dispatch(completeSearchBook(json, searchTerm, books))
      )
  }
}
