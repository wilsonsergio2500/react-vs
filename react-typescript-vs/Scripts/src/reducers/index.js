"use strict";
var redux_1 = require('redux');
var book_reducer_1 = require('../components/book-component/reducer/book-reducer');
var active_book_reducer_1 = require('./active-book/active-book-reducer');
var rootReducer = redux_1.combineReducers({
    books: book_reducer_1.BookReducer.ReducerFunction,
    activeBook: active_book_reducer_1.ActiveBookReducer
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rootReducer;
//# sourceMappingURL=index.js.map