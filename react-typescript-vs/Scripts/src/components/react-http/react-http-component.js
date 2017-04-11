/// <reference path="../../apis/fetch/fetchasync.ts" />
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
var stringextended_1 = require('../../helpers/stringextended');
var fetchasync_1 = require('../../apis/fetch/fetchasync');
var ReactHttp = (function (_super) {
    __extends(ReactHttp, _super);
    function ReactHttp() {
        _super.apply(this, arguments);
    }
    ReactHttp.prototype.componentWillMount = function () {
        this.handleProps();
    };
    ReactHttp.prototype.handleProps = function () {
        if (this.props.queryProps) {
            if (this.props.queryProps.length > 0) {
                var uri = stringextended_1.String.format(this.props.url, this.props.queryProps);
                this.setState({ IsLoading: true, resolved: null });
                this.handlePromise(uri);
            }
        }
    };
    ReactHttp.prototype.handlePromise = function (uri) {
        var that = this;
        fetchasync_1.fetchAsync(uri).then(function (r) {
            that.bindState({ resolved: r, IsLoading: false });
        }).catch(function (e) {
            that.bindState({ error: e, IsLoading: false });
        });
    };
    ReactHttp.prototype.bindState = function (state) {
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
    ReactHttp.prototype.componentWillReceiveProps = function (nextProps) {
    };
    ReactHttp.prototype.render = function () {
        var child = this.props.children;
        return child(this.state);
    };
    return ReactHttp;
}(React.Component));
exports.ReactHttp = ReactHttp;
//# sourceMappingURL=react-http-component.js.map