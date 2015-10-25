export const REQUEST_BOOKS = 'REQUEST_BOOKS'
function requestBooks() {
  return {
    type: REQUEST_BOOKS
  }
}

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
function receiveBooks(json) {
  return {
    type: RECEIVE_BOOKS,
    books: json.new_books
  }
}

export function fetchBooks(fetcher) {
  return function (dispatch) {
    dispatch(requestBooks())
    return fetcher(`/new_books.json`)
      .then(json =>
        dispatch(receiveBooks(json))
      )
  }
}

function shouldFetchBooks(state) {
  const books = state.books
  if (books.items.length == 0) {
    return true
  } else if (books.isFetching) {
    return false
  } else {
    return books.didInvalidate
  }
}

export function fetchBooksIfNeeded(fetcher) {
  return (dispatch, getState) => {
    if (shouldFetchBooks(getState())) {
      return dispatch(fetchBooks(fetcher))
    }
  }
}
