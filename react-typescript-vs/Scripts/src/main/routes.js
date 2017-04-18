// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var React = require('react');
var react_router_1 = require('react-router');
var app_1 = require('./app');
var loading_buton_page_1 = require('../pages/loading-button/loading-buton-page');
var react_show_1 = require('../pages/react-show/react-show');
var loading_panel_1 = require('../pages/loading-panel/loading-panel');
var react_repeat_page_1 = require('../pages/react-repeat/react-repeat-page');
var react_async1_page_1 = require('../pages/react-async/react-async1-page');
var react_async2_page_1 = require('../pages/react-async/react-async2-page');
var react_http_page_1 = require('../pages/react-http/react-http-page');
var home_1 = require('../pages/home/home');
var react_error_page_1 = require('../pages/react-error/react-error-page');
var unit_test_page_1 = require('../pages/unit-test/unit-test-page');
exports.Routes = (React.createElement(react_router_1.Route, {path: "/", component: app_1.App}, 
    React.createElement(react_router_1.IndexRoute, {component: home_1.HomePage}), 
    React.createElement(react_router_1.Route, {path: "home", component: home_1.HomePage}), 
    React.createElement(react_router_1.Route, {path: "reactshow", component: react_show_1.ReactShowPage}), 
    React.createElement(react_router_1.Route, {path: "reactrepeat", component: react_repeat_page_1.ReactRepeatPage}), 
    React.createElement(react_router_1.Route, {path: "loadingpanel", component: loading_panel_1.LoadingPanelPage}), 
    React.createElement(react_router_1.Route, {path: "reacterror", component: react_error_page_1.ReactErrorPage}), 
    React.createElement(react_router_1.Route, {path: "loadingbutton", component: loading_buton_page_1.LoadingButtonPage}), 
    React.createElement(react_router_1.Route, {path: "reactasync1", component: react_async1_page_1.AsyncComponent1Page}), 
    React.createElement(react_router_1.Route, {path: "reactasync2", component: react_async2_page_1.AsyncComponent2Page}), 
    React.createElement(react_router_1.Route, {path: "reacthttp", component: react_http_page_1.ReactHttpPage}), 
    React.createElement(react_router_1.Route, {path: "unittest", component: unit_test_page_1.UnitTestPage})));
//# sourceMappingURL=routes.js.map