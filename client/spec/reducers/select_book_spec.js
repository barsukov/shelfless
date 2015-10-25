import { expect } from 'chai'
import { selectedBook } from '../../src/reducers/select_book'
import { SELECT_BOOK } from '../../src/actions/select_book'

describe('select book reducer', () => {
  it('returns the initial state', () => {
    expect(
      selectedBook(undefined, {})
    ).to.deep.equal({ })
  })

  it('should handle SELECT_BOOK', () => {
    var action = {
      type: SELECT_BOOK,
      book: "test"
    }
    expect(selectedBook({id: "1"}, action)).to.deep.equal({
      id: "1",
      book: 'test'
    })
    expect(selectedBook(
      { text: 'Use Redux', books: [] }, action)).to.deep.equal(
        {
          text: 'Use Redux',
          books: [],
          book: "test"
        }
    )
  })
})
