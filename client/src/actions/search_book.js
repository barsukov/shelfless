import { searchRequest } from '../lib/fetcher'

export const START_SEARCH_BOOK = 'START_SEARCH_BOOK'
export function startSearchBook(searchTerm) {
  return {
    type: START_SEARCH_BOOK,
    searchTerm: searchTerm
  }
}

export const COMPLETE_SEARCH_BOOK = 'COMPLETE_SEARCH_BOOK'
function completeSearchBook(json, searchTerm) {
  return {
    type: COMPLETE_SEARCH_BOOK,
    searchTerm: searchTerm,
    searchResult: {books: json.books, page: json.page}
  }
}

export function searchBook(searchTerm, page) {
  return (dispatch, getState) => {
    dispatch(startSearchBook(searchTerm))
    return searchRequest(searchTerm)
      .then(json =>
        dispatch(completeSearchBook(json, searchTerm))
      )
  }
}
