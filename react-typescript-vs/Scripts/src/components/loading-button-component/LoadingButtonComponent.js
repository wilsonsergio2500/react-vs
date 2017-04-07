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
var LoadingButtonComponent = (function (_super) {
    __extends(LoadingButtonComponent, _super);
    function LoadingButtonComponent() {
        _super.apply(this, arguments);
    }
    LoadingButtonComponent.prototype.getComponents = function (busy) {
        var children = this.props.children.map(function (item, index) {
            return React.cloneElement(item, { IsWorking: busy, key: index });
        });
        return children;
    };
    LoadingButtonComponent.prototype.render = function () {
        return (React.createElement("button", {type: this.props.type, className: this.props.buttonClass, disabled: this.props.IsWorking, onClick: this.props.OnClick}, this.getComponents(this.props.IsWorking)));
    };
    return LoadingButtonComponent;
}(React.Component));
exports.LoadingButtonComponent = LoadingButtonComponent;
//# sourceMappingURL=LoadingButtonComponent.js.map