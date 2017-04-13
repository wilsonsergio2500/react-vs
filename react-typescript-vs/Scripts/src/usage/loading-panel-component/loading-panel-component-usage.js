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
var loadingpanelcomponent_1 = require('../../components/loading-panel-component/loadingpanelcomponent');
var LoadingPanelComponentUsage = (function (_super) {
    __extends(LoadingPanelComponentUsage, _super);
    function LoadingPanelComponentUsage() {
        _super.apply(this, arguments);
    }
    LoadingPanelComponentUsage.prototype.render = function () {
        return (React.createElement(loadingpanelcomponent_1.LoadingPanelComponent, null, "Loading Message Goes Here...."));
    };
    return LoadingPanelComponentUsage;
}(React.Component));
exports.LoadingPanelComponentUsage = LoadingPanelComponentUsage;
//# sourceMappingURL=loading-panel-component-usage.js.map