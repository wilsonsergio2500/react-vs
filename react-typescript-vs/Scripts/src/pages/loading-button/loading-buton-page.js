/// <reference path="../../usage/loading-button-component/loading-button-component-usage.tsx" />
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
var react_syntax_highlighter_1 = require('react-syntax-highlighter');
var loading_button_component_usage_1 = require('../../usage/loading-button-component/loading-button-component-usage');
var styles_1 = require('react-syntax-highlighter/dist/styles');
var iframeStyle = { flex: 100 };
var LoadingButtonPage = (function (_super) {
    __extends(LoadingButtonPage, _super);
    function LoadingButtonPage() {
        _super.apply(this, arguments);
    }
    LoadingButtonPage.prototype.render = function () {
        return (React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("h1", {className: "page-header"}, 
                    "Loading Button ", 
                    React.createElement("small", null))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Info"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("p", null, "The Loading button implements a UI that signals to the end user when a process is working. The user can set the content of the iddle and Loading state ")
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Usage"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement(react_syntax_highlighter_1.default, {language: 'javascript', style: styles_1.docco}, "<LoadingButton buttonClass=\"btn btn-primary\" type=\"button\" IsWorking={this.state.gotBusy} OnClick={() => this.OnClick()}>\n<BtnMesage>\n    Update\n</BtnMesage>\n<BtnLoadingMessage>\n    Loading..\n</BtnLoadingMessage>\n</LoadingButton>")
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Example:"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement(loading_button_component_usage_1.LoadingButtonComponentUsage, null)
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Implementation:"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "responsive-iframe"}, 
                            React.createElement("iframe", {height: '265', scrolling: 'no', title: 'ReactShow (ngShow Equivalent)', src: '//codepen.io/wilsonsergio2500/embed/GmKvrY/?height=400&theme-id=light&default-tab=js,result&embed-version=2', style: iframeStyle, frameBorder: 'no', allowTransparency: true, allowFullScreen: true}, 
                                "See the Pen", 
                                React.createElement("a", {href: 'https://codepen.io/wilsonsergio2500/pen/GmKvrY/'}, "ReactShow (ngShow Equivalent)"), 
                                " by Sergio Wilson (", 
                                React.createElement("a", {href: 'http://codepen.io/wilsonsergio2500'}, "@wilsonsergio2500"), 
                                ") on ", 
                                React.createElement("a", {href: 'http://codepen.io'}, "CodePen"), 
                                ".")
                        )
                    ))
            )));
    };
    return LoadingButtonPage;
}(React.Component));
exports.LoadingButtonPage = LoadingButtonPage;
//# sourceMappingURL=loading-buton-page.js.map