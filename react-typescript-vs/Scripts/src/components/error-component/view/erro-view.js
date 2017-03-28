"use strict";
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var React = require('react');
var react_bootstrap_1 = require('react-bootstrap');
var ErrorViews = (function () {
    function ErrorViews() {
    }
    ErrorViews.getView = function (transcludeItem) {
        return (React.createElement("div", {className: "col-md-12"}, 
            React.createElement(react_bootstrap_1.Alert, {bsStyle: "danger"}, 
                React.createElement("strong", null, "Ohhh Snap!!"), 
                transcludeItem)
        ));
    };
    return ErrorViews;
}());
exports.ErrorViews = ErrorViews;
//# sourceMappingURL=erro-view.js.map