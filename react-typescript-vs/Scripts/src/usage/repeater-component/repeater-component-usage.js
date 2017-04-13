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
var reactrepeatercomponent_1 = require('../../components/repeater-component/reactrepeatercomponent');
var getBooks = function () {
    var books = [];
    books.push({ title: 'The greates Salesman in The World', author: 'Og Mandino' });
    books.push({ title: 'Burro Genius', author: 'Victor Villaseñor' });
    books.push({ title: 'Flash Boys', author: 'Michael Lewis' });
    books.push({ title: 'Chaos Monkeys', author: 'Antonio Garcia Martinez' });
    return books;
};
var ReactRepeaterComponentUsage = (function (_super) {
    __extends(ReactRepeaterComponentUsage, _super);
    function ReactRepeaterComponentUsage() {
        _super.apply(this, arguments);
    }
    ReactRepeaterComponentUsage.prototype.repeatHandler = function (book, index) {
        return (React.createElement("div", {className: "col-md-12", key: index}, 
            book.title, 
            " ", 
            React.createElement("b", null, "By:"), 
            React.createElement("code", null, book.author)));
    };
    ReactRepeaterComponentUsage.prototype.render = function () {
        return (React.createElement("div", {className: "col-md-112"}, 
            React.createElement(reactrepeatercomponent_1.ReactRepeater, {array: getBooks(), ParentTag: "div", ParentTagClass: "row", RepeatItemHandler: this.repeatHandler})
        ));
    };
    return ReactRepeaterComponentUsage;
}(React.Component));
exports.ReactRepeaterComponentUsage = ReactRepeaterComponentUsage;
//# sourceMappingURL=repeater-component-usage.js.map