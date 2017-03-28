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
var book_view_1 = require('./view/book-view');
var redux_1 = require('redux');
var book_detail_action_1 = require('../../actions/book-detail-action');
var BookComponent = (function (_super) {
    __extends(BookComponent, _super);
    function BookComponent() {
        _super.apply(this, arguments);
    }
    BookComponent.prototype.getList = function () {
        var _this = this;
        var items = this.props.books.map(function (book, index) {
            return book_view_1.BookViews.getBookItem(index, book, _this.props.SelectBook);
        });
        return items;
    };
    BookComponent.prototype.render = function () {
        return (React.createElement("ul", null, this.getList()));
    };
    return BookComponent;
}(React.Component));
function PropsResolver(state) {
    return {
        books: state.books
    };
}
function ActionResolver(dispatch) {
    return redux_1.bindActionCreators({ SelectBook: book_detail_action_1.SelectBook }, dispatch);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(PropsResolver, ActionResolver)(BookComponent);
//# sourceMappingURL=bookComponent.js.map