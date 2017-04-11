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
var stockcomponent_1 = require('../components/stock-component/stockcomponent');
var loadingpanelcomponent_1 = require('../components/loading-panel-component/loadingpanelcomponent');
var test_1 = require('../components/loading-button-component/test');
var test_2 = require('../components/repeater-component/test');
var test_3 = require('../components/async-component/test');
var test_4 = require('../components/react-http/test');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h3", null, "Stock Component (Fetch Http Internally)"), 
            React.createElement(stockcomponent_1.StockComponent, {ticket: "GOOGL"}), 
            React.createElement(stockcomponent_1.StockComponent, {ticket: "MSFT"}), 
            React.createElement(stockcomponent_1.StockComponent, {ticket: "GWZ"}), 
            React.createElement("h3", null, "Repeater (Attempt to Emulates an ngRepeat)"), 
            React.createElement(test_2.RepeaterTest, null), 
            React.createElement("h3", null, "Loading Button (Nested Component with Transclusion)"), 
            React.createElement(test_1.LoadingButtonTest, null), 
            React.createElement("h3", null, "Loading Panel (Loading Panel with Transclusion)"), 
            React.createElement(loadingpanelcomponent_1.LoadingPanelComponent, null, "Loading.."), 
            React.createElement("h3", null, "Async Component (Emulates Angular 2 Async Pipe)"), 
            React.createElement("p", null, "Component Handles Async Request"), 
            React.createElement(test_3.AsyncComponentTest, null), 
            React.createElement(test_3.AsyncComponentStockSymbol, null), 
            React.createElement("h3", null, "Http Request Component (Emulates Polymer Http Request Component)"), 
            React.createElement(test_4.ReactHttpComponentExample, null)));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map