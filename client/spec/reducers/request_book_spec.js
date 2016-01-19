import { expect } from 'chai'
import { requestBook } from '../../src/reducers/request_book'
import { START_REQUEST_BOOK } from '../../src/actions/request_book'

describe('request book reducer', () => {
  it('returns the initial state', () => {
    expect(
      requestBook(undefined, {})
    ).to.deep.equal({ })
  })

  it('should handle START_REQUEST_BOOK', () => {
    var action = {
      type: START_REQUEST_BOOK,
      book: "test"
    }
    expect(requestBook({id: "1"}, action)).to.deep.equal({
      id: "1",
      book: 'test'
    })
    expect(requestBook(
      { text: 'Use Redux', books: [] }, action)).to.deep.equal(
        {
          text: 'Use Redux',
          books: [],
          book: "test"
        }
    )
  })
})
