import { getCoockieByName } from '../lib/coockies'
import { errorAction } from './error'

export const START_REQUEST_BOOK = 'START_REQUEST_BOOK'
export function startRequestBook(book) {
  return {
    type: START_REQUEST_BOOK,
    book: book
  }
}

export const COMPLETE_REQUEST_BOOK = 'COMPLETE_REQUEST_BOOK'
function requestBookComplete(json, requestedBooks) {
  return {
    type: COMPLETE_REQUEST_BOOK,
    requestedBooks: requestedBooks.concat(json.book_id),
    status: {book_id: json.book_id, state: json.book_request_state}
  }
}

function serializeBodyParams(book) {
  return JSON.stringify({book_id: book.id})
}

export function requestBook(requester, book) {
  return function (dispatch, getState) {
    dispatch(startRequestBook(book))
    let requestedBooks = getState().requestBook.requestedBooks
    let account_id = getCoockieByName("account_id")
    let url = `/api/v1/accounts/${account_id}/reader_book_requests`
    return requester(url, serializeBodyParams(book))
      .then(json =>
        dispatch(requestBookComplete(json, requestedBooks))
      ).catch(message =>
        dispatch(errorAction("Sorry the request is not possible. Server problems."))
      )
  }
}
