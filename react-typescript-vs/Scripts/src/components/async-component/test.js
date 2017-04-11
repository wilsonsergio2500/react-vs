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
var yql_place_1 = require('../../apis/yql-place/yql-place');
var async_component_1 = require('./async-component');
var loadingpanelcomponent_1 = require('../loading-panel-component/loadingpanelcomponent');
var stock_details_1 = require('../../apis/stock/stock-details');
var AsyncComponentTest = (function (_super) {
    __extends(AsyncComponentTest, _super);
    function AsyncComponentTest() {
        _super.apply(this, arguments);
    }
    AsyncComponentTest.prototype.componentWillMount = function () {
        this.setState({ promiseToResolved: yql_place_1.fetchYQLPlace('Omaha', 'NE') });
    };
    AsyncComponentTest.prototype.render = function () {
        return (React.createElement(async_component_1.AsyncComponent, {asyncPromise: this.state.promiseToResolved, asyncDelay: 3000}, function (childstate) {
            if (childstate.IsLoading) {
                return (React.createElement(loadingpanelcomponent_1.LoadingPanelComponent, null, "Retrieving"));
            }
            if (childstate.resolved) {
                return (React.createElement("div", {className: "col-md-12"}, 
                    "City: ", 
                    React.createElement("b", null, childstate.resolved.query.results.place.locality1.content), 
                    "Where On Earth Id: ", 
                    React.createElement("b", null, childstate.resolved.query.results.place.locality1.woeid)));
            }
        }));
    };
    return AsyncComponentTest;
}(React.Component));
exports.AsyncComponentTest = AsyncComponentTest;
var promiseType;
(function (promiseType) {
    promiseType[promiseType["google"] = 1] = "google";
    promiseType[promiseType["gwz"] = 2] = "gwz";
})(promiseType || (promiseType = {}));
var AsyncComponentStockSymbol = (function (_super) {
    __extends(AsyncComponentStockSymbol, _super);
    function AsyncComponentStockSymbol() {
        _super.apply(this, arguments);
    }
    AsyncComponentStockSymbol.prototype.componentWillMount = function () {
        this.setState({ PromiseType: promiseType.google, promiseToSolve: stock_details_1.GetStockDetails('NASDAQ', 'GOOGL') });
    };
    AsyncComponentStockSymbol.prototype.changePromise = function () {
        if (this.state.PromiseType == promiseType.google) {
            this.setState({ PromiseType: promiseType.gwz, promiseToSolve: stock_details_1.GetStockDetails('NASDAQ', 'GWZ') });
        }
        else {
            this.setState({ PromiseType: promiseType.google, promiseToSolve: stock_details_1.GetStockDetails('NASDAQ', 'GOOGL') });
        }
    };
    AsyncComponentStockSymbol.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {className: "col-md-12"}, 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("button", {className: "btn btn-primary", onClick: function () { _this.changePromise(); }}, "Change Injected Promise")
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement(async_component_1.AsyncComponent, {asyncPromise: this.state.promiseToSolve, asyncDelay: 3000}, function (childstate) {
                    if (childstate.IsLoading) {
                        return (React.createElement(loadingpanelcomponent_1.LoadingPanelComponent, null, "Retrieving"));
                    }
                    if (childstate.resolved) {
                        var stock = childstate.resolved[0];
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
                    }
                    if (childstate.error) {
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
                                childstate.error)));
                    }
                })
            )));
    };
    return AsyncComponentStockSymbol;
}(React.Component));
exports.AsyncComponentStockSymbol = AsyncComponentStockSymbol;
//# sourceMappingURL=test.js.map