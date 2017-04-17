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
var async_component_2_1 = require('../../components/async-component/async-component-2');
var stock_details_1 = require('../../apis/stock/stock-details');
var promiseType;
(function (promiseType) {
    promiseType[promiseType["google"] = 1] = "google";
    promiseType[promiseType["gwz"] = 2] = "gwz";
})(promiseType || (promiseType = {}));
var AsyncComponentUsage2 = (function (_super) {
    __extends(AsyncComponentUsage2, _super);
    function AsyncComponentUsage2() {
        _super.apply(this, arguments);
    }
    AsyncComponentUsage2.prototype.componentWillMount = function () {
        this.setState({ PromiseType: promiseType.google, promiseToSolve: stock_details_1.GetStockDetails('NASDAQ', 'GOOGL') });
    };
    AsyncComponentUsage2.prototype.changePromise = function () {
        if (this.state.PromiseType == promiseType.google) {
            this.setState({ PromiseType: promiseType.gwz, promiseToSolve: stock_details_1.GetStockDetails('NASDAQ', 'GWZ') });
        }
        else {
            this.setState({ PromiseType: promiseType.google, promiseToSolve: stock_details_1.GetStockDetails('NASDAQ', 'GOOGL') });
        }
    };
    AsyncComponentUsage2.prototype.onSuccess = function (payload) {
        var stock = payload[0];
        var IsUp = (stock.c.charAt(0) == '+');
        var containerClasses = function (status) { return (status) ? 'bs-callout bs-callout-success' : 'bs-callout bs-callout-danger'; };
        return (React.createElement("div", {className: "col-md-12"}, 
            React.createElement("div", {className: containerClasses(IsUp)}, 
                React.createElement("h4", null, 
                    stock.e, 
                    ":", 
                    stock.t, 
                    "- ", 
                    stock.lt), 
                React.createElement("span", null, 
                    stock.l_cur, 
                    "USD "), 
                React.createElement("span", {className: "small"}), 
                React.createElement("span", {className: IsUp ? 'text-success' : 'text-danger'}, 
                    React.createElement("i", {className: IsUp ? 'fa fa-arrow-up' : 'fa fa-arrow-down'}), 
                    React.createElement("strong", null, 
                        stock.c_fix, 
                        "(", 
                        stock.cp, 
                        "%)")))
        ));
    };
    AsyncComponentUsage2.prototype.onerror = function (error) {
        return (React.createElement("div", {className: "col-md-12 text-center"}, 
            React.createElement("div", {className: "col-xs-12"}, 
                React.createElement("i", {className: "fa fa-exclamation-triangle fa-3x text-danger", "aria-hidden": "true"})
            ), 
            React.createElement("span", {className: "text-danger"}, 
                React.createElement("b", null, "Ohh Snap!!, Somthing Wrong Happen")
            ), 
            React.createElement("br", null), 
            React.createElement("span", {className: "text-danger"}, 
                "Dude! that stock! does not exist in Exhange NASDAQ- Error returned: ", 
                error)));
    };
    AsyncComponentUsage2.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {className: "col-md-12"}, 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("button", {className: "btn btn-primary", onClick: function () { _this.changePromise(); }}, "Change Injected Promise")
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement(async_component_2_1.AsyncComponent2, {asyncPromise: this.state.promiseToSolve, asyncDelay: 3000, onSuccess: this.onSuccess})
            )));
    };
    return AsyncComponentUsage2;
}(React.Component));
exports.AsyncComponentUsage2 = AsyncComponentUsage2;
//# sourceMappingURL=async-component-usage2.js.map