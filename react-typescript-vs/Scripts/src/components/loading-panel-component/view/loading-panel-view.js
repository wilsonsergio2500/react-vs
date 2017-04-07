// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var React = require('react');
var LoadingAlertViews = (function () {
    function LoadingAlertViews() {
    }
    LoadingAlertViews.GetView = function (children) {
        return (React.createElement("div", {className: "col-md-12 text-center"}, 
            React.createElement("div", {className: "col-xs-12"}, 
                React.createElement("i", {className: "fa fa-circle-o-notch fa-spin fa-3x fa-fw"})
            ), 
            children));
    };
    return LoadingAlertViews;
}());
exports.LoadingAlertViews = LoadingAlertViews;
//# sourceMappingURL=loading-panel-view.js.map