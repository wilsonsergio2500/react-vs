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
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        _super.apply(this, arguments);
    }
    HomePage.prototype.componentWillMount = function () {
    };
    HomePage.prototype.componentWillReceiveProps = function (nextprop) {
    };
    HomePage.prototype.componentDidMount = function () {
    };
    HomePage.prototype.componentWillUnmount = function () {
    };
    HomePage.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("h1", {className: "page-header"}, 
                    "About ", 
                    React.createElement("small", null, "Project Overview"))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Getting Started"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("p", null, 
                            "get started by cloning the repo @ ", 
                            React.createElement("a", {href: "https://github.com/wilsonsergio2500/react-vs.git", target: "_blank"}, "https://github.com/wilsonsergio2500/react-vs.git")), 
                        React.createElement("p", null, 
                            "Install NodeJs If not already @ ", 
                            React.createElement("a", {href: "https://nodejs.org/en/", target: "_blank"}, "https://nodejs.org/en/")), 
                        React.createElement("p", null, 
                            "Run Command: ", 
                            React.createElement("code", null, " npm install -g webpack typescript typings ")), 
                        React.createElement("p", null, 
                            "Run Command: ", 
                            React.createElement("code", null, " npm link typescript "), 
                            " under folder ", 
                            React.createElement("b", null, "react-typescript-vs")), 
                        React.createElement("p", null, 
                            "Run Command: ", 
                            React.createElement("code", null, " npm install "), 
                            " under folder ", 
                            React.createElement("b", null, "react-typescript-vs"), 
                            " or open Visual Studio and let package.json do his thing")))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Motivation"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "block-quote"}, 
                            React.createElement("p", null, 
                                React.createElement("i", {className: "fa fa-quote-left"}), 
                                "  " + ' ' + "We cannot look at our own personal experiences or use the same mental model over and over again; we have to look at other disciplines and activities and relate or connect to them to what we know from our experiences and the strategic world we live in.", 
                                React.createElement("br", null), 
                                "... ", 
                                React.createElement("br", null), 
                                "Analysis and synthesis across a variety of domains, or across competing / independent channels of information, will enable us to spontaneously generate new mental images or impressions that match up with and unfolding world of uncertainty and change." + ' ' + " ", 
                                React.createElement("i", {className: "fa fa-quote-right"}))
                        ), 
                        React.createElement("div", null, 
                            React.createElement("b", null, " --- John Body")
                        )))
            ), 
            React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, "Forget It!..., Just Show me The Code!"), 
                    React.createElement("div", {className: "panel-body"}, 
                        "All the component examples could be found in my codepen.io @  ", 
                        React.createElement("a", {href: "https://codepen.io/wilsonsergio2500/", target: "_blank"}, "https://codepen.io/wilsonsergio2500/")))
            )));
    };
    return HomePage;
}(React.Component));
exports.HomePage = HomePage;
//# sourceMappingURL=home.js.map