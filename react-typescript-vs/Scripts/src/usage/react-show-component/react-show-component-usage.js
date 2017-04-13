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
var reactshow_1 = require('../../components/react-show-component/reactshow');
var ReactShowComponentUsage = (function (_super) {
    __extends(ReactShowComponentUsage, _super);
    function ReactShowComponentUsage(props) {
        _super.call(this, props);
        this.state = {};
        this.state.IsShow = true;
    }
    ReactShowComponentUsage.prototype.clickHandler = function () {
        this.setState({ IsShow: !this.state.IsShow });
    };
    ReactShowComponentUsage.prototype.render = function () {
        var _this = this;
        var IsShow = true;
        return (React.createElement("div", {className: "col-md-112"}, 
            React.createElement("button", {type: "button", className: "btn btn-primary", onClick: function () { return _this.clickHandler(); }}, this.state.IsShow ? 'Hide Me' : 'Show Me'), 
            React.createElement(reactshow_1.ReactShow, {show: this.state.IsShow}, 
                React.createElement("code", null, "Item Shown")
            )));
    };
    return ReactShowComponentUsage;
}(React.Component));
exports.ReactShowComponentUsage = ReactShowComponentUsage;
//# sourceMappingURL=react-show-component-usage.js.map