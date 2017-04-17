/// <reference path="../loading-panel-component/loadingpanelcomponent.tsx" />
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
var async_component_1 = require('./async-component');
var loadingpanelcomponent_1 = require('../loading-panel-component/loadingpanelcomponent');
var AsyncComponent2 = (function (_super) {
    __extends(AsyncComponent2, _super);
    function AsyncComponent2(props) {
        _super.call(this, props);
        this.getChildState = this.getChildState.bind(this);
    }
    AsyncComponent2.prototype.componentWillMount = function () {
        this.initState();
    };
    AsyncComponent2.prototype.initState = function () {
        this.setState({
            asyncPromise: this.props.asyncPromise, asyncDelay: this.props.asyncDelay,
            onError: (!!this.props.onError) ? this.props.onError : this.onError,
            onLoading: (!!this.props.onLoading) ? this.props.onLoading : this.onLoading
        });
    };
    AsyncComponent2.prototype.onError = function (error) {
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
    AsyncComponent2.prototype.onLoading = function () {
        return (React.createElement(loadingpanelcomponent_1.LoadingPanelComponent, null, "Fetching data.."));
    };
    AsyncComponent2.prototype.getChildState = function (state) {
        if (state.IsLoading) {
            if (this.state.onLoading) {
                return this.state.onLoading();
            }
        }
        else if (state.error) {
            if (this.state.onError) {
                return this.state.onError(state.error);
            }
        }
        else {
            return this.props.onSuccess(state.resolved);
        }
        return (React.createElement("div", null));
    };
    AsyncComponent2.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.asyncPromise != this.props.asyncPromise) {
            this.setState({ asyncPromise: nextProps.asyncPromise });
        }
    };
    AsyncComponent2.prototype.render = function () {
        return (React.createElement(async_component_1.AsyncComponent, {asyncPromise: this.state.asyncPromise, asyncDelay: this.state.asyncDelay}, this.getChildState));
    };
    return AsyncComponent2;
}(React.Component));
exports.AsyncComponent2 = AsyncComponent2;
//# sourceMappingURL=async-component-2.js.map