/// <reference path="view/loading-alert-view.tsx" />
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
var loading_alert_view_1 = require('./view/loading-alert-view');
var LoadingAlertComponent = (function (_super) {
    __extends(LoadingAlertComponent, _super);
    function LoadingAlertComponent() {
        _super.apply(this, arguments);
    }
    LoadingAlertComponent.prototype.render = function () {
        return loading_alert_view_1.LoadingAlertViews.GetView();
    };
    return LoadingAlertComponent;
}(React.Component));
exports.LoadingAlertComponent = LoadingAlertComponent;
//# sourceMappingURL=loadingAlertComponent.js.map