"use strict";
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var React = require('react');
var react_router_1 = require('react-router');
exports.Nav = (React.createElement("nav", {id: "mainNav", className: "navbar navbar-inverse navbar-fixed-top"}, 
    React.createElement("a", {className: "navbar-brand", href: "#"}, "Start Bootstrap"), 
    React.createElement("div", {className: "collapse navbar-collapse"}, 
        React.createElement("ul", {className: "nav navbar-nav side-nav"}, 
            React.createElement("li", {className: "nav-item active"}, 
                React.createElement("a", {className: "nav-link", href: "#"}, 
                    React.createElement("i", {className: "fa fa-fw fa-dashboard"}), 
                    " Dashboard")
            ), 
            React.createElement("li", {className: "nav-item"}, 
                React.createElement(react_router_1.Link, {to: "/reactshow", className: "nav-link"}, 
                    React.createElement("i", {className: "fa fa-fw fa-bolt"}), 
                    " React Show")
            ))
    )));
//# sourceMappingURL=nav.js.map