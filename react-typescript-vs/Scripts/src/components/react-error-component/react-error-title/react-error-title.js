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
var ReactErrorTitle = (function (_super) {
    __extends(ReactErrorTitle, _super);
    function ReactErrorTitle() {
        _super.apply(this, arguments);
    }
    ReactErrorTitle.prototype.render = function () {
        return (React.createElement("span", {className: "text-danger"}, 
            React.createElement("b", null, this.props.children)
        ));
    };
    return ReactErrorTitle;
}(React.Component));
exports.ReactErrorTitle = ReactErrorTitle;
//# sourceMappingURL=react-error-title.js.map