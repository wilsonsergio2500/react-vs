"use strict";
var fetchasync_1 = require('../fetch/fetchasync');
var Promise = require('bluebird');
function GetStockDetails(exchange, ticket) {
    var key = 'AIzaSyABDmm3x6LCQohwMZ7rp4FlyCuXHUIZ4gY';
    var url = "https://crossorigin.me/https://www.google.com/finance/info?q=" + exchange + ":" + ticket + "&key=" + key;
    return new Promise(function (resolve, reject) {
        fetchasync_1.fetchAsyncText(url).then(function (x) {
            var response = x.substr(3);
            resolve(JSON.parse(response));
        }).catch(function (e) {
            reject(e);
        });
    });
}
exports.GetStockDetails = GetStockDetails;
//# sourceMappingURL=stock-details.js.map