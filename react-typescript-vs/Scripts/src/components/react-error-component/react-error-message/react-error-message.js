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
var ReactErrorMessage = (function (_super) {
    __extends(ReactErrorMessage, _super);
    function ReactErrorMessage() {
        _super.apply(this, arguments);
    }
    ReactErrorMessage.prototype.render = function () {
        return (React.createElement("span", {className: "text-danger"}, this.props.children));
    };
    return ReactErrorMessage;
}(React.Component));
exports.ReactErrorMessage = ReactErrorMessage;
//# sourceMappingURL=react-error-message.js.map