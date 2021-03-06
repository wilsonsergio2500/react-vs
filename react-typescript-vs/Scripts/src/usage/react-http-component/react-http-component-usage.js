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
var loadingpanelcomponent_1 = require('../../components/loading-panel-component/loadingpanelcomponent');
var react_http_component_1 = require('../../components/react-http/react-http-component');
var reactrepeatercomponent_1 = require('../../components/repeater-component/reactrepeatercomponent');
var ReactHttpComponentUsage = (function (_super) {
    __extends(ReactHttpComponentUsage, _super);
    function ReactHttpComponentUsage() {
        _super.apply(this, arguments);
        this.RegionWoeid = {
            Omaha: 2465512
        };
    }
    ReactHttpComponentUsage.prototype.componentWillMount = function () {
        this.setState({ RegionWoeid: this.RegionWoeid.Omaha });
    };
    ReactHttpComponentUsage.prototype.repeatHandler = function (item, index) {
        return (React.createElement("div", {className: "col-md-12", key: index}, 
            React.createElement("div", {className: "col-md-3"}, 
                "Date: ", 
                item.date), 
            React.createElement("div", {className: "col-md-3"}, 
                "Day: ", 
                item.day), 
            React.createElement("div", {className: "col-md-3"}, 
                "High: ", 
                item.high), 
            React.createElement("div", {className: "col-md-3"}, 
                "Low: ", 
                item.low)));
    };
    ReactHttpComponentUsage.prototype.render = function () {
        var _this = this;
        var CurrentWoeid = this.state.RegionWoeid;
        var query = encodeURI("select * from weather.forecast where woeid=" + CurrentWoeid);
        return (React.createElement("div", {className: "col-md-12"}, 
            React.createElement(react_http_component_1.ReactHttp, {url: "https://query.yahooapis.com/v1/public/yql?format=json&diagnostics=true&q={0}", queryProps: [query]}, function (state) {
                if (state.IsLoading) {
                    return (React.createElement(loadingpanelcomponent_1.LoadingPanelComponent, null, "Loading Weather Foreacst..."));
                }
                if (state.resolved) {
                    return (React.createElement("div", {className: "col-md-12"}, 
                        React.createElement("div", {className: "col-md-12"}, 
                            React.createElement("h2", null, "Omaha Weather Forecast:")
                        ), 
                        React.createElement("div", {className: "col-md-12"}, 
                            React.createElement(reactrepeatercomponent_1.ReactRepeater, {array: state.resolved.query.results.channel.item.forecast, ParentTag: "div", ParentTagClass: "row", RepeatItemHandler: _this.repeatHandler})
                        )));
                }
            })
        ));
    };
    return ReactHttpComponentUsage;
}(React.Component));
exports.ReactHttpComponentUsage = ReactHttpComponentUsage;
//# sourceMappingURL=react-http-component-usage.js.map