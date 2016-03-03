import { expect } from 'chai'
import { dialogVisibility } from '../../src/reducers/error'
import { SHOW_DIALOG, CLOSE_DIALOG } from '../../src/actions/dialog_visibility'

describe('request book reducer', () => {
  it('returns the initial state', () => {
    expect(
      errorReducer(undefined, {})
    ).to.deep.equal({showError: false , errorMessage: "" })
  })

  it('should handle SHOW_DIALOG', () => {
    var action = {
      type: SHOW_DIALOG,
      message: "Error",
      alertClass: "alert"
      title: "Error"
    }
    expect(errorReducer({}, action)).to.deep.equal({
      errorMessage: "Error",
      errorMessage: true
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
