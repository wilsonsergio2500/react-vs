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
var stock_api_nasdaq_1 = require('../../apis/stock-nasdaq/stock-api-nasdaq');
var stock_view_1 = require('./view/stock-view');
var loadingalertcomponent_1 = require('../loading-alert-component/loadingalertcomponent');
var StockComponent = (function (_super) {
    __extends(StockComponent, _super);
    function StockComponent(props) {
        _super.call(this, props);
    }
    StockComponent.prototype.componentWillMount = function () {
        this.setState({ IsWorking: true });
        this.fetchStock(this.props.ticket);
    };
    StockComponent.prototype.componentWillReceiveProps = function (nextprop) {
        if (!!nextprop.ticket) {
            this.fetchStock(nextprop.ticket);
        }
    };
    StockComponent.prototype.fetchStock = function (ticketSymbol) {
        var _this = this;
        stock_api_nasdaq_1.GetStockPrice(ticketSymbol).then(function (x) {
            if (!!x.error) {
                _this.setState({ error: x.error, IsWorking: false });
            }
            else {
                _this.setState({ stockInfo: x.payload, IsWorking: false });
            }
        });
    };
    StockComponent.prototype.render = function () {
        if (this.state.IsWorking) {
            //return (<div>Loading...</div>);
            return (React.createElement(loadingalertcomponent_1.LoadingAlertComponent, null));
        }
        return stock_view_1.StockViews.GetView(this.state.stockInfo[0]);
    };
    return StockComponent;
}(React.Component));
exports.StockComponent = StockComponent;
//# sourceMappingURL=stockComponent.js.map