import { combineReducers } from 'redux'
import { books } from './book'
import { requestBook } from './request_book'
import { searchBook } from './search_book'
import { reducer as formReducer } from 'redux-form';

const bookReducers = combineReducers({
  books,
  requestBook,
  searchBook,
  form: formReducer
})

module.exports = bookReducers
