/// <reference path="../pages/react-show/react-show.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var React = require('react');
var react_router_1 = require('react-router');
var app_1 = require('./app');
var loading_buton_page_1 = require('../pages/loading-button/loading-buton-page');
var react_show_1 = require('../pages/react-show/react-show');
exports.Routes = (React.createElement(react_router_1.Route, {path: "/", component: app_1.App}, 
    React.createElement(react_router_1.Route, {path: "reactshow", component: react_show_1.ReactShowPage}), 
    React.createElement(react_router_1.Route, {path: "greet1", component: loading_buton_page_1.LoadingButtonPage})));
//# sourceMappingURL=routes.js.map