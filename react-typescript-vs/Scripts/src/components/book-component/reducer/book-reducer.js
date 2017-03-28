"use strict";
var book_model_1 = require("../../../models/book/book-model");
var BookReducer = (function () {
    function BookReducer() {
    }
    BookReducer.ReducerFunction = function () {
        var books = Array();
        books.push(new book_model_1.BookVm('The greates Salesman in The World', true));
        books.push(new book_model_1.BookVm('The Undoing Project', true));
        books.push(new book_model_1.BookVm('Burro Genious'));
        books.push(new book_model_1.BookVm('Flash Boys', true));
        books.push(new book_model_1.BookVm('Chaos Monkeys', true));
        return books;
    };
    return BookReducer;
}());
exports.BookReducer = BookReducer;
//# sourceMappingURL=book-reducer.js.map