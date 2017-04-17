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
var styles_1 = require('react-syntax-highlighter/dist/styles');
var react_http_component_usage_1 = require('../../usage/react-http-component/react-http-component-usage');
var iframeStyle = { flex: 100 };
var ReactHttpPage = (function (_super) {
    __extends(ReactHttpPage, _super);
    function ReactHttpPage() {
        _super.apply(this, arguments);
    }
    ReactHttpPage.prototype.render = function () {
        return (React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("h1", {className: "page-header"}, 
                    "React Http ", 
                    React.createElement("small", null, "Alternative to Polymer Http Component"))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Info"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("p", null, "Component will handle an http GET request, and enables to inject some url parameters. It will manage the state simiat to React Asnc  ")
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Usage"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement(react_syntax_highlighter_1.default, {language: 'javascript', style: styles_1.docco}, "\n<ReactHttp url=\"https://query.yahooapis.com/v1/public/yql?format=json&diagnostics=true&q={0}\" queryProps={[query]}>\n{\n    (state: IAsyncComponentState<any>) =>{\n        if (state.IsLoading){\n        ...\n        } else if(state.error){\n        ...\n        } else if (state.resolved){ \n        ...\n        }\n\n    }\n}\n</ReactHttp>\n")
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Example:"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement(react_http_component_usage_1.ReactHttpComponentUsage, null)
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Implementation:"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "responsive-iframe"}, 
                            React.createElement("iframe", {height: '265', scrolling: 'no', title: 'ReactShow (ngShow Equivalent)', src: '//codepen.io/wilsonsergio2500/embed/pPzWbw/?height=400&theme-id=light&default-tab=js,result&embed-version=2', style: iframeStyle, frameBorder: 'no', allowTransparency: true, allowFullScreen: true}, 
                                "See the Pen", 
                                React.createElement("a", {href: 'https://codepen.io/wilsonsergio2500/pen/pPzWbw/'}, "ReactShow (ngShow Equivalent)"), 
                                " by Sergio Wilson (", 
                                React.createElement("a", {href: 'http://codepen.io/wilsonsergio2500'}, "@wilsonsergio2500"), 
                                ") on ", 
                                React.createElement("a", {href: 'http://codepen.io'}, "CodePen"), 
                                ".")
                        )
                    ))
            )));
    };
    return ReactHttpPage;
}(React.Component));
exports.ReactHttpPage = ReactHttpPage;
//# sourceMappingURL=react-http-page.js.map