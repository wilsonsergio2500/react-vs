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
var book_reducer_1 = require('../book-component/reducer/book-reducer');
var reactrepeatercomponent_1 = require('./reactrepeatercomponent');
var RepeaterTest = (function (_super) {
    __extends(RepeaterTest, _super);
    function RepeaterTest() {
        _super.apply(this, arguments);
    }
    RepeaterTest.prototype.repeatHandler = function (book, index) {
        return (React.createElement("div", {className: "col-md-12", key: index}, book.title));
    };
    RepeaterTest.prototype.render = function () {
        var array = book_reducer_1.BookReducer.ReducerFunction();
        return (React.createElement("div", {className: "container"}, 
            React.createElement("div", {className: ""}), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement(reactrepeatercomponent_1.ReactRepeater, {array: array, ParentTag: "div", ParentTagClass: "row", RepeatItemHandler: this.repeatHandler})
            )));
    };
    return RepeaterTest;
}(React.Component));
exports.RepeaterTest = RepeaterTest;
//# sourceMappingURL=test.js.map