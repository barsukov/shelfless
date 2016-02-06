export function wrapInProvider(component, store){
  let ReactRedux = require('react-redux')
  let Redux = require('redux')
  let Provider = ReactRedux.Provider
  let ReactTestUtils = require('react-addons-test-utils')

  if(store == undefined){
    store = Redux.createStore(() => {} )
  }
  return ReactTestUtils.renderIntoDocument(
    <Provider store={store}>
      {component}
    </Provider>
  );
}

/**
 * Creates a mock of Redux store with middleware.
 */
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { expect } from 'chai'

export function mockStore(getState, expectedActions, done) {
  const middlewares = [ thunk ]

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
