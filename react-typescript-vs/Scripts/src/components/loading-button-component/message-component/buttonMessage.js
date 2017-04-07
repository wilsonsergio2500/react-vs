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
var reactshow_1 = require('../../react-show-component/reactshow');
var ButtonMessage = (function (_super) {
    __extends(ButtonMessage, _super);
    function ButtonMessage() {
        _super.apply(this, arguments);
    }
    ButtonMessage.prototype.render = function () {
        var NotWorking = (this.props.IsWorking == false);
        return (React.createElement(reactshow_1.ReactShow, {show: NotWorking}, 
            React.createElement("span", null, this.props.children)
        ));
    };
    return ButtonMessage;
}(React.Component));
exports.ButtonMessage = ButtonMessage;
//# sourceMappingURL=buttonMessage.js.map