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
var loading_panel_view_1 = require('./view/loading-panel-view');
var LoadingPanelComponent = (function (_super) {
    __extends(LoadingPanelComponent, _super);
    function LoadingPanelComponent() {
        _super.apply(this, arguments);
    }
    LoadingPanelComponent.prototype.render = function () {
        return loading_panel_view_1.LoadingAlertViews.GetView(this.props.children);
    };
    return LoadingPanelComponent;
}(React.Component));
exports.LoadingPanelComponent = LoadingPanelComponent;
//# sourceMappingURL=loadingPanelComponent.js.map