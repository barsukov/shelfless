import { searchRequest } from '../lib/fetcher'
import { showDialog as showErrorDialog} from './dialog_visibility'

export const START_SEARCH_BOOK = 'START_SEARCH_BOOK'
export function startSearchBook(searchTerm, page) {
  return {
    type: START_SEARCH_BOOK,
    searchTerm: searchTerm,
    page: page
  }
}

export const CLEAR_SEARCH_RESULT = 'CLEAR_SEARCH_RESULT'
export function clearSearchResult() {
  return {
    type: CLEAR_SEARCH_RESULT
  }
}

export const COMPLETE_SEARCH_BOOK = 'COMPLETE_SEARCH_BOOK'
function completeSearchBook(json, searchTerm, books) {
  return {
    type: COMPLETE_SEARCH_BOOK,
    searchTerm: searchTerm,
    items: books.concat(json.books || []),
    page: parseInt(json.page),
    hasMoreItems: json.hasMoreItems
  }
}

export function searchBook(searchTerm, page, requester) {
  return (dispatch, getState) => {
    dispatch(startSearchBook(searchTerm, page))
    if(requester != undefined){
      searchRequest = requester
    }
    let books = getState().searchedBooks.items
    return searchRequest(searchTerm, page)
      .then(json =>
        dispatch(completeSearchBook(json, searchTerm, books))
      ).catch(message => {
        let errorMesage = "Sorry search is not possible. Problems on the server"
        let title = "Error :("
        let alertClass = "alert-danger"
        dispatch(showErrorDialog(errorMesage, alertClass, title))
      }
      )
  }
}
