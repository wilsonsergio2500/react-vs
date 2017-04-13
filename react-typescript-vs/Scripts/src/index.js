// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var React = require('react');
var ReactDOM = require("react-dom");
var react_redux_1 = require('react-redux');
var redux_1 = require('redux');
var index_1 = require('./reducers/index');
var redux_thunk_1 = require('redux-thunk');
var routes_1 = require('./main/routes');
var react_router_1 = require('react-router');
var storeWisthMiddleware = redux_1.applyMiddleware(redux_thunk_1.default)(redux_1.createStore);
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: storeWisthMiddleware(index_1.default)}, 
    React.createElement(react_router_1.Router, {history: react_router_1.browserHistory, routes: routes_1.Routes})
), document.querySelector("#app"));
//# sourceMappingURL=index.js.map