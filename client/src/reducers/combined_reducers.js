import { combineReducers } from 'redux'
import { books } from './book'
import { selectedBook } from './select_book'

const bookReducers = combineReducers({
  books,
  selectedBook
})

module.exports = bookReducers
