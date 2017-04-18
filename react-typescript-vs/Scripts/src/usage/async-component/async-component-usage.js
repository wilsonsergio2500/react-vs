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
var loadingpanelcomponent_1 = require('../../components/loading-panel-component/loadingpanelcomponent');
var async_component_1 = require('../../components/async-component/async-component');
var stock_details_1 = require('../../apis/stock/stock-details');
var index_1 = require('../../components/react-error-component/index');
var promiseType;
(function (promiseType) {
    promiseType[promiseType["google"] = 1] = "google";
    promiseType[promiseType["gwz"] = 2] = "gwz";
})(promiseType || (promiseType = {}));
var AsyncComponentUsage = (function (_super) {
    __extends(AsyncComponentUsage, _super);
    function AsyncComponentUsage() {
        _super.apply(this, arguments);
    }
    AsyncComponentUsage.prototype.componentWillMount = function () {
        this.setState({ PromiseType: promiseType.google, promiseToSolve: stock_details_1.GetStockDetails('NASDAQ', 'GOOGL') });
    };
    AsyncComponentUsage.prototype.changePromise = function () {
        if (this.state.PromiseType == promiseType.google) {
            this.setState({ PromiseType: promiseType.gwz, promiseToSolve: stock_details_1.GetStockDetails('NASDAQ', 'GWZ') });
        }
        else {
            this.setState({ PromiseType: promiseType.google, promiseToSolve: stock_details_1.GetStockDetails('NASDAQ', 'GOOGL') });
        }
    };
    AsyncComponentUsage.prototype.render = function () {
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
                        return (React.createElement(index_1.ReactError.Error, null, 
                            React.createElement(index_1.ReactError.Title, null, "Ohh Snap!!, Something Wrong Happen"), 
                            React.createElement(index_1.ReactError.Message, null, 
                                "Dude! that stock! does not exist in Exhange NASDAQ- Error returned: ", 
                                childstate.error)));
                    }
                })
            )));
    };
    return AsyncComponentUsage;
}(React.Component));
exports.AsyncComponentUsage = AsyncComponentUsage;
//# sourceMappingURL=async-component-usage.js.map