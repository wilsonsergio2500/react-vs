// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var book_detail_view_1 = require('./view/book-detail-view');
var BookDetailComponent = (function (_super) {
    __extends(BookDetailComponent, _super);
    function BookDetailComponent() {
        _super.apply(this, arguments);
    }
    BookDetailComponent.prototype.render = function () {
        if (!this.props.activeBook) {
            return (React.createElement("div", null, "Book not Selected..."));
        }
        return book_detail_view_1.BookDetailViews.getView(this.props.activeBook);
    };
    return BookDetailComponent;
}(React.Component));
function ResolveProps(state) {
    return {
        activeBook: state.activeBook
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(ResolveProps)(BookDetailComponent);
//# sourceMappingURL=bookDetailComponent.js.map