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
var react_router_1 = require('react-router');
var LoadingButtonPage = (function (_super) {
    __extends(LoadingButtonPage, _super);
    function LoadingButtonPage() {
        _super.apply(this, arguments);
    }
    LoadingButtonPage.prototype.render = function () {
        return (React.createElement("div", null, 
            "hello world", 
            React.createElement(react_router_1.Link, {to: "/greet1", className: "btn btn-primary"})));
    };
    return LoadingButtonPage;
}(React.Component));
exports.LoadingButtonPage = LoadingButtonPage;
//# sourceMappingURL=loading-buton-page.js.map