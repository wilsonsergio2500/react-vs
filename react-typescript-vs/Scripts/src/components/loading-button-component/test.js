/// <reference path="index.tsx" />
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
var index_1 = require('./index');
var LoadingButtonTest = (function (_super) {
    __extends(LoadingButtonTest, _super);
    function LoadingButtonTest() {
        _super.apply(this, arguments);
    }
    LoadingButtonTest.prototype.componentWillMount = function () {
        this.setState({ gotBusy: false });
    };
    LoadingButtonTest.prototype.OnClick = function () {
        console.log('you clicked me', 'I am on parent');
        this.setState({
            gotBusy: true
        });
        var that = this;
        setTimeout(function () {
            that.setState({ gotBusy: false });
        }, 8000);
    };
    LoadingButtonTest.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {className: "container"}, 
            React.createElement("div", {className: ""}), 
            React.createElement("div", {className: "col-md-2"}, 
                React.createElement(index_1.LoadingButton, {buttonClass: "btn btn-primary", type: "button", IsWorking: this.state.gotBusy, OnClick: function () { return _this.OnClick(); }}, 
                    React.createElement(index_1.BtnMesage, null, "Update"), 
                    React.createElement(index_1.BtnLoadingMessage, null, "Loading.."))
            ), 
            React.createElement("div", {className: "col-md-2"}, 
                React.createElement(index_1.LoadingButton, {buttonClass: "btn btn-danger", type: "button", IsWorking: this.state.gotBusy, OnClick: function () { return _this.OnClick(); }}, 
                    React.createElement(index_1.BtnMesage, null, 
                        React.createElement("i", {className: "fa fa-trash-o"})
                    ), 
                    React.createElement(index_1.BtnLoadingMessage, null, "Deleting Stuff..."))
            )));
    };
    return LoadingButtonTest;
}(React.Component));
exports.LoadingButtonTest = LoadingButtonTest;
//# sourceMappingURL=test.js.map