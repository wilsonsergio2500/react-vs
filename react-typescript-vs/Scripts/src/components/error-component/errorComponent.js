/// <reference path="view/erro-view.tsx" />
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
var erro_view_1 = require('./view/erro-view');
var ErrorComponent = (function (_super) {
    __extends(ErrorComponent, _super);
    function ErrorComponent() {
        _super.apply(this, arguments);
    }
    ErrorComponent.prototype.render = function () {
        return erro_view_1.ErrorViews.getView(this.props.children);
    };
    return ErrorComponent;
}(React.Component));
exports.ErrorComponent = ErrorComponent;
//# sourceMappingURL=errorComponent.js.map