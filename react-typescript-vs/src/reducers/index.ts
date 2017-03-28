

import { combineReducers } from 'redux';
import { BookReducer } from '../components/book-component/reducer/book-reducer' 
import { ActiveBookReducer } from './active-book/active-book-reducer'
const rootReducer = combineReducers({
    books: BookReducer.ReducerFunction,
    activeBook: ActiveBookReducer
});

export default rootReducer;