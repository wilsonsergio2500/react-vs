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
var index_1 = require('../../components/react-error-component/index');
var ReactErrorComponentUsage = (function (_super) {
    __extends(ReactErrorComponentUsage, _super);
    function ReactErrorComponentUsage() {
        _super.apply(this, arguments);
    }
    ReactErrorComponentUsage.prototype.render = function () {
        return (React.createElement(index_1.ReactError.Error, null, 
            React.createElement(index_1.ReactError.Title, null, "Ohh Snap!!, Somthing Wrong Happen"), 
            React.createElement(index_1.ReactError.Message, null, "Dude You did Something wrong...")));
    };
    return ReactErrorComponentUsage;
}(React.Component));
exports.ReactErrorComponentUsage = ReactErrorComponentUsage;
//# sourceMappingURL=react-error-component-usage.js.map