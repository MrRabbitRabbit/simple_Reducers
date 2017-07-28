import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
    state: BooksReducer
});

export default rootReducer;