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
var react_error_component_usage_1 = require('../../usage/react-error-component/react-error-component-usage');
var react_syntax_highlighter_1 = require('react-syntax-highlighter');
var styles_1 = require('react-syntax-highlighter/dist/styles');
var iframeStyle = { flex: 100 };
var ReactErrorPage = (function (_super) {
    __extends(ReactErrorPage, _super);
    function ReactErrorPage() {
        _super.apply(this, arguments);
    }
    ReactErrorPage.prototype.render = function () {
        return (React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("h1", {className: "page-header"}, 
                    "React Error ", 
                    React.createElement("small", null, "react error panel with transclusion"))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Info"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("p", null, "Error Loading Panel to be use across components")
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Usage"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement(react_syntax_highlighter_1.default, {language: 'javascript', style: styles_1.docco}, "<ReactError.Error>\n    <ReactError.Title>\n        title goes here\n    </ReactError.Title>\n    <ReactError.Message>\n        some message about the error..\n    </ReactError.Message>\n</ReactError.Error>")
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Example:"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement(react_error_component_usage_1.ReactErrorComponentUsage, null)
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Implementation:"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "responsive-iframe"}, 
                            React.createElement("iframe", {height: '265', scrolling: 'no', title: 'ReactShow (ngShow Equivalent)', src: '//codepen.io/wilsonsergio2500/embed/RVWwgX/?height=400&theme-id=light&default-tab=js,result&embed-version=2', style: iframeStyle, frameBorder: 'no', allowTransparency: true, allowFullScreen: true}, 
                                "See the Pen", 
                                React.createElement("a", {href: 'https://codepen.io/wilsonsergio2500/pen/RVWwgX/'}, "ReactShow (ngShow Equivalent)"), 
                                " by Sergio Wilson (", 
                                React.createElement("a", {href: 'http://codepen.io/wilsonsergio2500'}, "@wilsonsergio2500"), 
                                ") on ", 
                                React.createElement("a", {href: 'http://codepen.io'}, "CodePen"), 
                                ".")
                        )
                    ))
            )));
    };
    return ReactErrorPage;
}(React.Component));
exports.ReactErrorPage = ReactErrorPage;
//# sourceMappingURL=react-error-page.js.map