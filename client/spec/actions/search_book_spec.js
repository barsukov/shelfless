import { expect } from 'chai'
import { mockStore } from '../helpers/test_helper'
import * as actions from '../../src/actions/search_book'
import { ERROR_ACTION } from '../../src/actions/error'
import { Promise } from 'es6-promise'

describe('Search book async actions', () => {
  it('creates COMPLETE_SEARCH_BOOK when searching books has been done', (done) => {
    const page = 1
    const expectedActions = [
      { type: actions.START_SEARCH_BOOK, searchTerm: "book" , page: page },
      { type: actions.COMPLETE_SEARCH_BOOK, searchTerm: "book", items: ["books"], page: page, hasMoreItems: true}
    ]
    let requester = () => { return new Promise((resolve, reject) =>
      resolve({books: ['books'],hasMoreItems: true, page: page}))
    }
    const store = mockStore({ searchedBooks: {items: []} }, expectedActions, done)
    store.dispatch(actions.searchBook("book", page, requester))
  })
})

describe('When search book request was failed', () => {
  it('creates ERROR_ACTION', (done) => {
    const expectedActions = [
      { type: actions.START_SEARCH_BOOK, searchTerm: "book" , page: 1 },
      { type: ERROR_ACTION, message: "Sorry search is not possible. Problems on the server" }
    ]
    let requester = () => { return new Promise((resolve, reject) => reject("Error")) }
    const store = mockStore({searchedBooks: {items: []} }, expectedActions, done)
    store.dispatch(actions.searchBook("book", 1, requester))
  })
});

describe('Clear search result action', () => {
  it('return default state', () => {
    const expectedAction = {
      type: actions.CLEAR_SEARCH_RESULT
    }
    expect(actions.clearSearchResult()).to.deep.equal(expectedAction);
  })
})
