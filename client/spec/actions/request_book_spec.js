import * as actions from '../../src/actions/request_book'
import { expect } from 'chai'
import { mockStore } from '../helpers/test_helper'
import { ERROR_ACTION } from '../../src/actions/error'
import { Promise } from 'es6-promise'

describe('Request Book async actions', () => {
  var book;
  before(() => {
    book = { id: 1 }
  });

  it('should create an action COMPLETE_REQUEST_BOOK when requestBook is done', (done) => {
    const expectedActions = [
      { type: actions.START_REQUEST_BOOK, book },
      {
        type: actions.COMPLETE_REQUEST_BOOK,
        requestedBooks: [book.id],
        status: {book_id: book.id, state: "pending"}
      }
    ]
    let requester = () => { return new Promise((resolve, reject) =>
        resolve({ book_id: 1, book_request_state: "pending"}))
    }
    const store = mockStore({requestBook: { requestedBooks: [] }}, expectedActions, done)
    store.dispatch(actions.requestBook(requester, book))
  })

  it('creates ERROR_ACTION when requestBook was failed', (done) => {
    const expectedActions = [
      { type: actions.START_REQUEST_BOOK, book },
      { type: ERROR_ACTION, message: "Sorry the request is not possible. Server problems."}
    ]
    let requester = () => { return new Promise((resolve, reject) => reject("Error")) }
    const store = mockStore({requestBook: { requestedBooks: [] }}, expectedActions, done)
    store.dispatch(actions.requestBook(requester, book))
  })
})
