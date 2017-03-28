// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var React = require('react');
var BookDetailViews = (function () {
    function BookDetailViews() {
    }
    BookDetailViews.getView = function (book) {
        return (React.createElement("div", null, 
            React.createElement("h1", null, "Detail:"), 
            React.createElement("h2", null, book.title), 
            React.createElement("span", null, book.IsBestSeller ? 'TRUE' : 'FALSE')));
    };
    return BookDetailViews;
}());
exports.BookDetailViews = BookDetailViews;
//# sourceMappingURL=book-detail-view.js.map