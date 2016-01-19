import { combineReducers } from 'redux'
import { books } from './book'
import { selectedBook } from './select_book'
import { requestBook } from './request_book'

const bookReducers = combineReducers({
  books,
  selectedBook,
  requestBook
})

module.exports = bookReducers
