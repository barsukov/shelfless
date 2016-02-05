import { expect } from 'chai'
import { mockStore } from '../helpers/test_helper'
import * as actions from '../../src/actions/search_book'

describe('async actions', () => {
  it('creates COMPLETE_SEARCH_BOOK when searching books has been done', (done) => {
    const page = 1
    const expectedActions = [
      { type: actions.START_SEARCH_BOOK, searchTerm: "book" , page: page },
      { type: actions.COMPLETE_SEARCH_BOOK, searchTerm: "book", items: ["books"], page: page, hasMoreItems: true}
    ]
    let requester = () => { return $.Deferred().resolve({books: ['books'],hasMoreItems: true, page: page}) }
    const store = mockStore({ searchedBooks: {items: []} }, expectedActions, done)
    store.dispatch(actions.searchBook("book", page, requester))
  })
})
describe('Clear search result action', () => {
  it('return default state', () => {
    const expectedAction = {
      type: actions.CLEAR_SEARCH_RESULT
    }
    expect(actions.clearSearchResult()).to.deep.equal(expectedAction);
  })
})
