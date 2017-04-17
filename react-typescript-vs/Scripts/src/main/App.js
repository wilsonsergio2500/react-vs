/// <reference path="../usage/async-component/async-component-usage2.tsx" />
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
var nav_1 = require('./views/nav');
var async_component_usage_1 = require('../usage/async-component/async-component-usage');
var async_component_usage2_1 = require('../usage/async-component/async-component-usage2');
var loading_panel_component_usage_1 = require('../usage/loading-panel-component/loading-panel-component-usage');
var repeater_component_usage_1 = require('../usage/repeater-component/repeater-component-usage');
var loading_button_component_usage_1 = require('../usage/loading-button-component/loading-button-component-usage');
var react_http_component_usage_1 = require('../usage/react-http-component/react-http-component-usage');
var react_show_component_usage_1 = require('../usage/react-show-component/react-show-component-usage');
var iframeStyle = { flex: 100 };
var sample = (React.createElement("div", null, 
    React.createElement("h3", null, "Stock Component (Fetch Http Internally)"), 
    React.createElement(stockcomponent_1.StockComponent, {ticket: "GOOGL"}), 
    React.createElement(stockcomponent_1.StockComponent, {ticket: "MSFT"}), 
    React.createElement(stockcomponent_1.StockComponent, {ticket: "GWZ"}), 
    React.createElement("h3", null, "React Show"), 
    React.createElement(react_show_component_usage_1.ReactShowComponentUsage, null), 
    React.createElement("h3", null, "Repeater (Attempt to Emulates an ngRepeat)"), 
    React.createElement(repeater_component_usage_1.ReactRepeaterComponentUsage, null), 
    React.createElement("h3", null, "Loading Button (Nested Component with Transclusion)"), 
    React.createElement(loading_button_component_usage_1.LoadingButtonComponentUsage, null), 
    React.createElement("h3", null, "Loading Panel (Loading Panel with Transclusion)"), 
    React.createElement(loading_panel_component_usage_1.LoadingPanelComponentUsage, null), 
    React.createElement("h3", null, "Async Component (Emulates Angular 2 Async Pipe)"), 
    React.createElement("p", null, "Component Handles Async Request"), 
    React.createElement(async_component_usage_1.AsyncComponentUsage, null), 
    React.createElement("p", null, "Component Handles Async Request"), 
    React.createElement(async_component_usage2_1.AsyncComponentUsage2, null), 
    React.createElement("h3", null, "Http Request Component (Emulates Polymer Http Request Component)"), 
    React.createElement(react_http_component_usage_1.ReactHttpComponentUsage, null)));
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement(nav_1.Nav, null), 
            React.createElement("div", {className: "content-wrapper py-3"}, 
                React.createElement("div", {className: "container-fluid main-content"}, 
                    React.createElement("div", {className: "row"}), 
                    this.props.children)
            )));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map