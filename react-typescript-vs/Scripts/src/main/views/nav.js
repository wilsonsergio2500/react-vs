"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var React = require('react');
var react_router_1 = require('react-router');
var react_bootstrap_1 = require('react-bootstrap');
var Nav = (function (_super) {
    __extends(Nav, _super);
    function Nav(props) {
        _super.call(this, props);
        this.state = {
            async: { open: false }
        };
    }
    Nav.prototype.render = function () {
        var _this = this;
        return (React.createElement("nav", {id: "mainNav", className: "navbar navbar-inverse navbar-fixed-top"}, 
            React.createElement("a", {className: "navbar-brand", href: "#"}, "React Components"), 
            React.createElement("div", {className: "collapse navbar-collapse"}, 
                React.createElement("ul", {className: "nav navbar-nav side-nav"}, 
                    React.createElement("li", {className: "nav-item active"}, 
                        React.createElement(react_router_1.Link, {to: "/", className: "nav-link"}, 
                            React.createElement("i", {className: "fa fa-fw fa-home"}), 
                            " About")
                    ), 
                    React.createElement("li", {className: "nav-item"}, 
                        React.createElement(react_router_1.Link, {to: "/reactshow", className: "nav-link"}, 
                            React.createElement("i", {className: "fa fa-fw fa-bolt"}), 
                            " React Show")
                    ), 
                    React.createElement("li", {className: "nav-item"}, 
                        React.createElement(react_router_1.Link, {to: "/reactrepeat", className: "nav-link"}, 
                            React.createElement("i", {className: "fa fa-fw fa-bolt"}), 
                            " React Repeat")
                    ), 
                    React.createElement("li", {className: "nav-item"}, 
                        React.createElement(react_router_1.Link, {to: "/loadingpanel", className: "nav-link"}, 
                            React.createElement("i", {className: "fa fa-fw fa-bolt"}), 
                            " Loading Panel")
                    ), 
                    React.createElement("li", {className: "nav-item"}, 
                        React.createElement(react_router_1.Link, {to: "/reacterror", className: "nav-link"}, 
                            React.createElement("i", {className: "fa fa-fw fa-bolt"}), 
                            " React Error Panel")
                    ), 
                    React.createElement("li", {className: "nav-item"}, 
                        React.createElement(react_router_1.Link, {to: "/loadingbutton", className: "nav-link"}, 
                            React.createElement("i", {className: "fa fa-fw fa-bolt"}), 
                            " Loading Button")
                    ), 
                    React.createElement("li", {className: "nav-item"}, 
                        React.createElement("a", {onClick: function () { return _this.setState({ async: { open: !_this.state.async.open } }); }}, 
                            "React Async", 
                            React.createElement("i", {className: "fa fa-fw fa-caret-down"})), 
                        React.createElement(react_bootstrap_1.Collapse, {in: this.state.async.open}, 
                            React.createElement("ul", null, 
                                React.createElement("li", {className: "nav-item"}, 
                                    React.createElement(react_router_1.Link, {to: "/reactasync1", className: "nav-link"}, 
                                        React.createElement("i", {className: "fa fa-fw fa-bolt"}), 
                                        "React Async 1")
                                ), 
                                React.createElement("li", {className: "nav-item"}, 
                                    React.createElement(react_router_1.Link, {to: "/reactasync2", className: "nav-link"}, 
                                        React.createElement("i", {className: "fa fa-fw fa-bolt"}), 
                                        "React Async 2")
                                ))
                        )), 
                    React.createElement("li", null, 
                        React.createElement(react_router_1.Link, {to: "/reacthttp", className: "nav-link"}, 
                            React.createElement("i", {className: "fa fa-fw fa-bolt"}), 
                            " React Http")
                    ))
            )));
    };
    return Nav;
}(React.Component));
exports.Nav = Nav;
//# sourceMappingURL=nav.js.map