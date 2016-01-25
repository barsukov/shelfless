import * as actions from '../../src/actions/request_book'
import { expect } from 'chai'
import { mockStore } from '../helpers/test_helper'

describe('book request async actions', () => {
  it('should create an action COMPLETE_REQUEST_BOOK when requestBook is done', (done) => {
    const book = { id: 1 }
    const expectedActions = [
      { type: actions.START_REQUEST_BOOK, book },
      {
        type: actions.COMPLETE_REQUEST_BOOK,
        requestedBooks: [book.id],
        status: {book_id: book.id, state: "pending"}
      }
    ]
    let requester = () => { return $.Deferred().resolve({ book_id: 1, book_request_state: "pending"}) }
    const store = mockStore({requestBook: { requestedBooks: [] }}, expectedActions, done)
    store.dispatch(actions.requestBook(requester, book))
  })
})
