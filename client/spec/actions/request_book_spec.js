import * as actions from '../../src/actions/request_book'
import { expect } from 'chai'

describe('actions', () => {
  it('should create an action to requestBook', function () {
    const book = {book: 'this books'}
    const expectedAction = {
      type: actions.REQUEST_BOOK,
      book
    }

    expect(actions.requestBook(book)).to.deep.equal(expectedAction);
  })
})
