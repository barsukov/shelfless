import { errorAction } from './error'
export const REQUEST_BOOKS = 'REQUEST_BOOKS'
function requestBooks() {
  return {
    type: REQUEST_BOOKS
  }
}

export const CLEAR_FETCH_RESULT = 'CLEAR_FETCH_RESULT'
export function clearFetchResult() {
  return {
    type: CLEAR_FETCH_RESULT
  }
}

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
function receiveBooks(json, books) {
  return {
    type: RECEIVE_BOOKS,
    books: books.concat(json.books || []),
    page: parseInt(json.page),
    hasMoreItems: Boolean(json.hasMoreItems)
  }
}

function fetchBooks(fetcher, page, booksState) {
  return function (dispatch) {
    let books = booksState.items
    dispatch(requestBooks())
    return fetcher(page)
      .then(json =>
        dispatch(receiveBooks(json, books))
      ).catch(message =>
        dispatch(errorAction(message))
      )
  }
}

function shouldFetchBooks(books, page) {
  if (books.items.length == 0) {
    return true
  } else if (books.isLoading) {
    return false
  } else if (books.page != page) {
    return true
  } else {
    return books.didInvalidate
  }
}

export function fetchBooksIfNeeded(fetcher, page) {
  return (dispatch, getState) => {
    let booksState = getState().fetchedBooks
    if (shouldFetchBooks(booksState, page)) {
      return dispatch(fetchBooks(fetcher, page, booksState))
    }
  }
}
