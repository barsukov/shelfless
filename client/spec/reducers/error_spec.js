import { expect } from 'chai'
import { errorReducer } from '../../src/reducers/error'
import { ERROR_ACTION, CLOSE_ERROR } from '../../src/actions/error'

describe('request book reducer', () => {
  it('returns the initial state', () => {
    expect(
      errorReducer(undefined, {})
    ).to.deep.equal({showError: false , errorMessage: "" })
  })

  it('should handle ERROR_ACTION', () => {
    var action = {
      type: ERROR_ACTION,
      message: "Error"
    }
    expect(errorReducer({}, action)).to.deep.equal({
      errorMessage: "Error",
      showError: true
    })
  })

  it('should handle CLOSE_ERROR', () => {
    var action = { type: CLOSE_ERROR }
    expect(errorReducer({errorMessage: ""}, action)).to.deep.equal({
      showError: false,
      errorMessage: ""
    })
  })
})
