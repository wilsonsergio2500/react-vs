/// <reference path="../book-component/reducer/book-reducer.ts" />
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
var ParentTag = (function (_super) {
    __extends(ParentTag, _super);
    function ParentTag(props) {
        _super.call(this, props);
        this.state = { TagName: this.props.TagName };
    }
    ParentTag.prototype.render = function () {
        return (React.createElement(this.state.TagName, null, this.props.children));
    };
    return ParentTag;
}(React.Component));
exports.ParentTag = ParentTag;
var ReactRepeater = (function (_super) {
    __extends(ReactRepeater, _super);
    function ReactRepeater() {
        _super.apply(this, arguments);
    }
    ReactRepeater.prototype.getList = function () {
        var resolvedArray = this.props.array.map(this.props.RepeatItemHandler);
        return resolvedArray;
    };
    ReactRepeater.prototype.render = function () {
        return (React.createElement(ParentTag, {TagName: this.props.ParentTag, ElementClass: this.props.ParentTagClass}, this.getList()));
    };
    return ReactRepeater;
}(React.Component));
exports.ReactRepeater = ReactRepeater;
//# sourceMappingURL=reactRepeaterComponent.js.map