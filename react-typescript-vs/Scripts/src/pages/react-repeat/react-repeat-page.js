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
var repeater_component_usage_1 = require('../../usage/repeater-component/repeater-component-usage');
var styles_1 = require('react-syntax-highlighter/dist/styles');
var iframeStyle = { flex: 100 };
var ReactRepeatPage = (function (_super) {
    __extends(ReactRepeatPage, _super);
    function ReactRepeatPage() {
        _super.apply(this, arguments);
    }
    ReactRepeatPage.prototype.render = function () {
        return (React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("h1", {className: "page-header"}, 
                    "React Repeat ", 
                    React.createElement("small", null, "emulates an angular ngRepeat"))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Info"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("p", null, "The repeat component provides a handler in order to pass the template of the repeat array. This way .map function does not have to be call each time and the developer" + ' ' + "can remain Dry.")
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Usage"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement(react_syntax_highlighter_1.default, {language: 'javascript', style: styles_1.docco}, "<ReactRepeater array={getBooks()}\nParentTag=\"div\"\nParentTagClass=\"row\"\nRepeatItemHandler={this.repeatHandler}></ReactRepeater>\n//or\n<ReactRepeater array={getBooks()}\nParentTag=\"div\"\nParentTagClass=\"row\"\nRepeatItemHandler={(book: IBookVM, index: number) => {\nreturn (<div className=\"col-md-12\" key={index}> {book.title} <b>By:</b> <code>{book.author}</code></div>);\n    }}>\n</ReactRepeater>\n")
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Example:"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement(repeater_component_usage_1.ReactRepeaterComponentUsage, null)
                    ))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Implementation:"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "responsive-iframe"}, 
                            React.createElement("iframe", {height: '265', scrolling: 'no', title: 'ReactShow (ngShow Equivalent)', src: '//codepen.io/wilsonsergio2500/embed/mWoOQQ/?height=400&theme-id=light&default-tab=js,result&embed-version=2', style: iframeStyle, frameBorder: 'no', allowTransparency: true, allowFullScreen: true}, 
                                "See the Pen", 
                                React.createElement("a", {href: 'https://codepen.io/wilsonsergio2500/pen/mWoOQQ/'}, "ReactShow (ngShow Equivalent)"), 
                                " by Sergio Wilson (", 
                                React.createElement("a", {href: 'http://codepen.io/wilsonsergio2500'}, "@wilsonsergio2500"), 
                                ") on ", 
                                React.createElement("a", {href: 'http://codepen.io'}, "CodePen"), 
                                ".")
                        )
                    ))
            )));
    };
    return ReactRepeatPage;
}(React.Component));
exports.ReactRepeatPage = ReactRepeatPage;
//# sourceMappingURL=react-repeat-page.js.map