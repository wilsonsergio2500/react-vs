"use strict";
var axios_1 = require('axios');
var actiontypes_1 = require('../../enums/actiontypes');
function GetStockPrice(ticket) {
    var key = 'AIzaSyABDmm3x6LCQohwMZ7rp4FlyCuXHUIZ4gY';
    var url = "https://www.google.com/finance/info?q=NASDAQ:" + ticket + "&key=" + key;
    return axios_1.default.get(url).then(function (r) {
        // becuase payload bellow was an string..
        return { type: actiontypes_1.ActionType.WEATHER_FETCH_SUCCESS, payload: JSON.parse(r.data.substr(3)) };
    }, function (e) {
        return { type: actiontypes_1.ActionType.WEATHER_FETCH_FAILURE, error: e.error };
    });
}
exports.GetStockPrice = GetStockPrice;
//# sourceMappingURL=stock-api-nasdaq.js.map