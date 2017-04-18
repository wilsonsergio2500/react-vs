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
var iframeStyle = { flex: 100 };
var UnitTestPage = (function (_super) {
    __extends(UnitTestPage, _super);
    function UnitTestPage() {
        _super.apply(this, arguments);
    }
    UnitTestPage.prototype.render = function () {
        return (React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("h1", {className: "page-header"}, 
                    "Unit Test ", 
                    React.createElement("small", null, "Mocha + Enzyme + Sinon"))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "responsive-iframe"}, 
                            React.createElement("iframe", {height: '265', scrolling: "yes", title: 'ReactShow (ngShow Equivalent)', src: '/test/mch.html', style: iframeStyle, frameBorder: 'no', allowTransparency: true, allowFullScreen: true}, "See the Pen")
                        )
                    )
                )
            )));
    };
    return UnitTestPage;
}(React.Component));
exports.UnitTestPage = UnitTestPage;
//# sourceMappingURL=unit-test-page.js.map