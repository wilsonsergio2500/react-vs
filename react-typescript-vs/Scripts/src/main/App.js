/// <reference path="../components/loading-alert-component/loadingalertcomponent.tsx" />
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
var bookcomponent_1 = require('../components/book-component/bookcomponent');
var bookdetailcomponent_1 = require('../components/book-detail-component/bookdetailcomponent');
var stockcomponent_1 = require('../components/stock-component/stockcomponent');
var loadingalertcomponent_1 = require('../components/loading-alert-component/loadingalertcomponent');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement(bookcomponent_1.default, null), 
            React.createElement(bookdetailcomponent_1.default, null), 
            React.createElement(stockcomponent_1.StockComponent, {ticket: "GOOGL"}), 
            React.createElement(stockcomponent_1.StockComponent, {ticket: "MSFT"}), 
            React.createElement(stockcomponent_1.StockComponent, {ticket: "CSCO"}), 
            React.createElement(loadingalertcomponent_1.LoadingAlertComponent, null)));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map