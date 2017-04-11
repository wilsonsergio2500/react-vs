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
var AsyncComponent = (function (_super) {
    __extends(AsyncComponent, _super);
    function AsyncComponent(props) {
        _super.call(this, props);
    }
    AsyncComponent.prototype.componentWillMount = function () {
        this.setState({ IsLoading: true });
        this.promiseHandler(this.props.asyncPromise);
    };
    AsyncComponent.prototype.promiseHandler = function (promise) {
        var _this = this;
        var completed = false;
        if (promise.isFulfilled()) {
            this.bindState({ resolved: promise.value(), IsLoading: false });
            completed = true;
        }
        if (promise.isRejected()) {
            this.bindState({ error: promise.reason(), IsLoading: false });
            completed = true;
        }
        if (!completed) {
            promise.then(function (r) {
                _this.bindState({ resolved: r, IsLoading: false });
            }).catch(function (e) {
                _this.bindState({ error: e, IsLoading: false });
            });
        }
    };
    AsyncComponent.prototype.bindState = function (state) {
        var that = this;
        if (!!this.props.asyncDelay) {
            setTimeout(function () {
                that.setState(state);
            }, that.props.asyncDelay);
        }
        else {
            setTimeout(function () {
                that.setState(state);
            }, 1);
        }
    };
    AsyncComponent.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.asyncPromise != this.props.asyncPromise) {
            this.setState({ IsLoading: true, resolved: null });
            this.promiseHandler(nextProps.asyncPromise);
        }
    };
    AsyncComponent.prototype.render = function () {
        var child = this.props.children;
        return (child(this.state));
    };
    return AsyncComponent;
}(React.Component));
exports.AsyncComponent = AsyncComponent;
//# sourceMappingURL=async-component.js.map