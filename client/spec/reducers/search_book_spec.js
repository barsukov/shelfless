import { expect } from 'chai'
import { searchBook } from '../../src/reducers/search_book'
import { START_SEARCH_BOOK, COMPLETE_SEARCH_BOOK, CLEAR_SEARCH_RESULT } from '../../src/actions/search_book'

describe('search book reducer', () => {
  it('should handle CLEAR_SEARCH_RESULT', () => {
    var action = {
      type: CLEAR_SEARCH_RESULT
    }
    expect(
      searchBook({isLoading: true}, action)
    ).to.deep.equal({
      isLoading: false,
      searchTerm: "",
      items: [],
      page: 1
    })
  })
  it('returns the initial state', () => {
    expect(
      searchBook(undefined, {})
    ).to.deep.equal({
      isLoading: false,
      searchTerm: "",
      items: [],
      page: 1
    })
  })

  it('should handle START_SEARCH_BOOK', () => {
    var action = {
      type: START_SEARCH_BOOK,
      searchTerm: "test"
    }
    expect(searchBook({searchTerm: "test"}, action)).to.deep.equal({
      searchTerm: "test",
      isLoading: true
    })
  })
  it('should handle COMPLETE_SEARCH_BOOK', () => {
    var action = {
      type: COMPLETE_SEARCH_BOOK,
      searchTerm: "test",
      items: ["test"],
      page: 1,
      hasMoreItems: true,
    }

    expect(searchBook({searchTerm: "test"}, action)).to.deep.equal({
      items: ["test"],
      isLoading: false,
      searchTerm: "test",
      page: 1,
      hasMoreItems: true
    })
  })
})
