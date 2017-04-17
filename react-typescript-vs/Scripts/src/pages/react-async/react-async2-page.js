"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var React = require('react');
var react_syntax_highlighter_1 = require('react-syntax-highlighter');
var async_component_usage_1 = require('../../usage/async-component/async-component-usage');
var styles_1 = require('react-syntax-highlighter/dist/styles');
var iframeStyle = { flex: 100 };
var AsyncComponent2Page = (function (_super) {
    __extends(AsyncComponent2Page, _super);
    function AsyncComponent2Page() {
        _super.apply(this, arguments);
    }
    AsyncComponent2Page.prototype.render = function () {
        return (React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("h1", {className: "page-header"}, 
                    "React Async 2 ", 
                    React.createElement("small", null, "Alternative solution to Angular 2 async pipe state parameter"))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Info"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("p", null, "This component will take a promise and handle its state. Somehow similar to Angular 2 async filter. The difference between this one an React Async 1 is that this component" + ' ' + "will take the callback state as a parameter rather than in the chidl transculsion callback ")
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Usage"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement(react_syntax_highlighter_1.default, {language: 'javascript', style: styles_1.docco}, "\n...\nonSuccess(payload: IStock[]) {\n        let stock = payload[0];\n        let IsUp = (stock.c.charAt(0) == '+');\n        let containerClasses = (status: boolean) => { return (status) ? 'bs-callout bs-callout-success' : 'bs-callout bs-callout-danger' };\n        return (\n            <div className=\"col-md-12\">\n                <div className={containerClasses(IsUp)}>\n                    <h4>{stock.e}:{stock.t}- {stock.lt}</h4>\n\n\n                    <span>{stock.l_cur}USD </span>\n                    <span className=\"small\"></span>\n\n                    <span className={IsUp ? 'text-success' : 'text-danger'}>\n                        <i className={IsUp ? 'fa fa-arrow-up' : 'fa fa-arrow-down'}></i>\n                        <strong>{stock.c_fix}({stock.cp}%)</strong>\n                    </span>\n                </div>\n            </div>\n        );\n    }\n...\n<AsyncComponent2 asyncPromise={this.state.promiseToSolve} asyncDelay={3000} onSuccess={this.onSuccess}>\n\n</AsyncComponent2>")
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Example:"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement(async_component_usage_1.AsyncComponentUsage, null)
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Implementation:"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "responsive-iframe"}, 
                            React.createElement("iframe", {height: '265', scrolling: 'no', title: 'ReactShow (ngShow Equivalent)', src: '//codepen.io/wilsonsergio2500/embed/vmExOm/?height=400&theme-id=light&default-tab=js,result&embed-version=2', style: iframeStyle, frameBorder: 'no', allowTransparency: true, allowFullScreen: true}, 
                                "See the Pen", 
                                React.createElement("a", {href: 'https://codepen.io/wilsonsergio2500/pen/vmExOm/'}, "ReactShow (ngShow Equivalent)"), 
                                " by Sergio Wilson (", 
                                React.createElement("a", {href: 'http://codepen.io/wilsonsergio2500'}, "@wilsonsergio2500"), 
                                ") on ", 
                                React.createElement("a", {href: 'http://codepen.io'}, "CodePen"), 
                                ".")
                        )
                    ))
            )));
    };
    return AsyncComponent2Page;
}(React.Component));
exports.AsyncComponent2Page = AsyncComponent2Page;
//# sourceMappingURL=react-async2-page.js.map