import { expect } from 'chai'
import { mockStore } from '../helpers/test_helper'
import * as actions from '../../src/actions/book'

describe('async actions', () => {
  it('creates RECEIVE_BOOKS when fetching books has been done', (done) => {
    const page = 1
    const expectedActions = [
      { type: actions.REQUEST_BOOKS },
      { type: actions.RECEIVE_BOOKS, books: ['do something'], page: page, hasMoreItems: false}
    ]
    let fetcher = () => { return $.Deferred().resolve({books: ['do something'], page: page}) }
    const store = mockStore({ fetchedBooks: {items: []} }, expectedActions, done)
    store.dispatch(actions.fetchBooksIfNeeded(fetcher, page))
  })
})
