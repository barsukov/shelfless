export const REQUEST_BOOKS = 'REQUEST_BOOKS'
function requestBooks() {
  return {
    type: REQUEST_BOOKS
  }
}

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
function receiveBooks(json, books) {
  return {
    type: RECEIVE_BOOKS,
    books: books.concat(json.books),
    page: parseInt(json.page)
  }
}

export function fetchBooks(fetcher, page, booksState) {
  return function (dispatch) {
    let books = booksState.items
    dispatch(requestBooks())
    return fetcher(`api/v1/books.json?page=${page}`)
      .then(json =>
        dispatch(receiveBooks(json, books))
      )
  }
}

function shouldFetchBooks(books, page) {
  if (books.items.length == 0) {
    return true
  } else if (books.isFetching) {
    return false
  } else if (books.page != page) {
    return true
  } else {
    return books.didInvalidate
  }
}

export function fetchBooksIfNeeded(fetcher, page) {
  return (dispatch, getState) => {
    let booksState = getState().books
    if (shouldFetchBooks(booksState, page)) {
      return dispatch(fetchBooks(fetcher, page, booksState))
    }
  }
}
