import { expect } from 'chai'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions/book'
const middlewares = [ thunk ]

/**
 * Creates a mock of Redux store with middleware.
 */
function mockStore(getState, expectedActions, done) {
  if (!Array.isArray(expectedActions)) {
    throw new Error('expectedActions should be an array of expected actions.')
  }
  if (typeof done !== 'undefined' && typeof done !== 'function') {
    throw new Error('done should either be undefined or function.')
  }

  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return typeof getState === 'function' ?
          getState() :
          getState
      },

      dispatch(action) {
        const expectedAction = expectedActions.shift()

        try {
          expect(action).to.deep.equal(expectedAction)
          if (done && !expectedActions.length) {
            done()
          }
          return action
        } catch (e) {
          done(e)
        }
      }
    }
  }

  const mockStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(mockStoreWithoutMiddleware)

  return mockStoreWithMiddleware()
}

describe('async actions', () => {
  it('creates RECEIVE_BOOKS when fetching books has been done', (done) => {
    const page = 1
    const expectedActions = [
      { type: actions.REQUEST_BOOKS },
      { type: actions.RECEIVE_BOOKS, books: ['do something'], page: page}
    ]
    let fetcher = () => { return $.Deferred().resolve({books: ['do something'], page: page}) }
    const store = mockStore({ books: {items: []} }, expectedActions, done)
    store.dispatch(actions.fetchBooksIfNeeded(fetcher, page))
  })
})
