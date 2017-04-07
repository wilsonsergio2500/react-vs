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
var ReactShow = (function (_super) {
    __extends(ReactShow, _super);
    function ReactShow() {
        _super.apply(this, arguments);
    }
    ReactShow.prototype.componentWillUnmount = function () {
    };
    ReactShow.prototype.componentWillReceiveProps = function (nextprop) {
    };
    ReactShow.prototype.render = function () {
        if (!!this.props.show) {
            return React.cloneElement(this.props.children);
        }
        else {
            var style = {
                display: 'none'
            };
            return React.cloneElement(this.props.children, { style: style });
        }
    };
    return ReactShow;
}(React.Component));
exports.ReactShow = ReactShow;
//# sourceMappingURL=ReactShow.js.map