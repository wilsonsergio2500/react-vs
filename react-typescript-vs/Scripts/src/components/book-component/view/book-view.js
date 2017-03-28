// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var React = require('react');
var BookViews = (function () {
    function BookViews() {
    }
    BookViews.getBookItem = function (key, bookVm, selectFunction) {
        return (React.createElement("li", {key: key, className: "list-group col-sm-4", onClick: function () { return selectFunction(bookVm); }}, bookVm.title));
    };
    return BookViews;
}());
exports.BookViews = BookViews;
//# sourceMappingURL=book-view.js.map