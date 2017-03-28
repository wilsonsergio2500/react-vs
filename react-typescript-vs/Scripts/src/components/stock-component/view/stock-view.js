/// <reference path="../../../helpers/mergeobject.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var React = require('react');
var classNames = require('classnames');
var mergeobject_1 = require('../../../helpers/mergeobject');
var StockViews = (function () {
    function StockViews() {
    }
    StockViews.GetView = function (stock) {
        var IsUp = (stock.c.charAt(0) == '+');
        var colorStatus = {
            'text-success': IsUp,
            'text-danger': !IsUp
        };
        var containerClasses = classNames({
            'bs-callout': true,
            'bs-callout-success': IsUp,
            'bs-callout-danger': !IsUp
        });
        var iconClasses = classNames(mergeobject_1.Helpers.MergeObject({
            'fa': true,
            'fa-arrow-up': IsUp,
            'fa-arrow-down': !IsUp
        }, colorStatus));
        var statusClass = classNames(colorStatus);
        var changeIcon = React.createElement("i", {className: iconClasses});
        return (React.createElement("div", {className: "col-md-12"}, 
            React.createElement("div", {className: containerClasses}, 
                React.createElement("h4", null, 
                    stock.e, 
                    ":", 
                    stock.t, 
                    "- ", 
                    stock.lt), 
                React.createElement("span", null, 
                    stock.l_cur, 
                    " USD "), 
                React.createElement("span", {className: "small"}), 
                changeIcon, 
                React.createElement("span", {className: statusClass}, 
                    React.createElement("strong", null, 
                        stock.c_fix, 
                        "(", 
                        stock.cp, 
                        "%)")
                ))
        ));
    };
    return StockViews;
}());
exports.StockViews = StockViews;
//# sourceMappingURL=stock-view.js.map