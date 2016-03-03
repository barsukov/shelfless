import { expect } from 'chai'
import { mockStore } from '../helpers/test_helper'
import * as actions from '../../src/actions/book'
import { SHOW_DIALOG } from '../../src/actions/dialog_visibility'
import { Promise } from 'es6-promise'

describe('Fetch book async actions', () => {
  it('creates RECEIVE_BOOKS when fetching books has been done', (done) => {
    const page = 1
    const expectedActions = [
      { type: actions.REQUEST_BOOKS },
      { type: actions.RECEIVE_BOOKS, books: ['do something'], page: page, hasMoreItems: false}
    ]
    let fetcher = () => {  return new Promise((resolve, reject) =>
      resolve({books: ['do something'], page: page}))
    }
    const store = mockStore({ fetchedBooks: {items: []} }, expectedActions, done)
    store.dispatch(actions.fetchBooksIfNeeded(fetcher, page))
  })
  it('creates SHOW_DIALOG when fetching books was failed', (done) => {
    const page = 1
    const expectedActions = [
      { type: actions.REQUEST_BOOKS },
      { type: SHOW_DIALOG, alertClass: "alert-danger",
        message: "Sorry request is not possible. Problems on the server", title: "Error :("
      }
    ]
    let fetcher = () => { return new Promise((resolve, reject) => reject("Error")) }
    const store = mockStore({ fetchedBooks: {items: []} }, expectedActions, done)
    store.dispatch(actions.fetchBooksIfNeeded(fetcher, page))
  })
})
