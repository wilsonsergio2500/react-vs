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
var ReactShowPage = (function (_super) {
    __extends(ReactShowPage, _super);
    function ReactShowPage() {
        _super.apply(this, arguments);
    }
    ReactShowPage.prototype.render = function () {
        return (React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("h1", {className: "page-header"}, 
                    "React Show ", 
                    React.createElement("small", null, "emulates angular ngShow"))
            )
        ));
    };
    return ReactShowPage;
}(React.Component));
exports.ReactShowPage = ReactShowPage;
//# sourceMappingURL=react-show.js.map