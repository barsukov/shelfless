import * as actions from '../../src/actions/select_book'
import { expect } from 'chai'

describe('actions', () => {
  it('should create an action to selectBook', function () {
    const book = {book: 'Finish docs'}
    const expectedAction = {
      type: actions.SELECT_BOOK,
      book
    }

    expect(actions.selectBook(book)).to.deep.equal(expectedAction);
  })
})
