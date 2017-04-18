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
var react_error_title_1 = require('./react-error-title/react-error-title');
var react_error_message_1 = require('./react-error-message/react-error-message');
var ReactErrorComponent = (function (_super) {
    __extends(ReactErrorComponent, _super);
    function ReactErrorComponent() {
        _super.apply(this, arguments);
    }
    ReactErrorComponent.prototype.getChildrenArray = function () {
        return React.Children.map(this.props.children, function (element, index) {
            return element;
        });
    };
    ReactErrorComponent.prototype.getTitleInstance = function () {
        return this.getChildrenArray().filter(function (item, index) {
            return (item.type == react_error_title_1.ReactErrorTitle);
        });
    };
    ReactErrorComponent.prototype.getMessageInstance = function () {
        return this.getChildrenArray().filter(function (item, index) {
            return (item.type == react_error_message_1.ReactErrorMessage);
        });
    };
    ReactErrorComponent.prototype.render = function () {
        return (React.createElement("div", {className: "col-md-12 text-center"}, 
            React.createElement("div", {className: "col-xs-12"}, 
                React.createElement("i", {className: "fa fa-exclamation-triangle fa-3x text-danger", "aria-hidden": "true"})
            ), 
            React.createElement("br", null), 
            this.getTitleInstance(), 
            React.createElement("br", null), 
            this.getMessageInstance()));
    };
    return ReactErrorComponent;
}(React.Component));
exports.ReactErrorComponent = ReactErrorComponent;
//# sourceMappingURL=react-error.js.map