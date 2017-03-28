"use strict";
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var React = require('react');
var ErrorViews = (function () {
    function ErrorViews() {
    }
    ErrorViews.getView = function () {
        return (React.createElement("div", null));
    };
    return ErrorViews;
}());
exports.ErrorViews = ErrorViews;
//# sourceMappingURL=erro-view.js.map