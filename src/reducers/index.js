import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  // the mapping of our state
    // this will add a KEY to our global state app called books and the value is whatever is returned from the books reducer
    books: BooksReducer
});

export default rootReducer;
