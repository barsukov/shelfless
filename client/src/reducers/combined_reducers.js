import { combineReducers } from 'redux'
import { books } from './book'
import { requestBook } from './request_book'
import { searchBook } from './search_book'
import { errorReducer } from './error'
import { reducer as formReducer } from 'redux-form';

const bookReducers = combineReducers({
  fetchedBooks: books,
  requestBook,
  searchedBooks: searchBook,
  form: formReducer,
  error: errorReducer
})
module.exports = bookReducers
