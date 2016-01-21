import { expect } from 'chai'
import { requestBook } from '../../src/reducers/request_book'
import { START_REQUEST_BOOK, COMPLETE_REQUEST_BOOK } from '../../src/actions/request_book'

describe('request book reducer', () => {
  it('returns the initial state', () => {
    expect(
      requestBook(undefined, {})
    ).to.deep.equal({isRequesting: false , requestedBooks: [] })
  })

  it('should handle START_REQUEST_BOOK', () => {
    var action = {
      type: START_REQUEST_BOOK,
      book: "test"
    }
    expect(requestBook({id: "1"}, action)).to.deep.equal({
      id: "1",
      isRequesting: true
    })
  })
  it('should handle START_REQUEST_BOOK', () => {
    var action = {
      type: COMPLETE_REQUEST_BOOK,
      status: "pending",
      requestedBooks: [1]
    }

    expect(requestBook({book_id: "1", status: "pending"}, action)).to.deep.equal({
      book_id: "1",
      isRequesting: false,
      requestedBooks: [1],
      status: "pending"
    })
  })
})
