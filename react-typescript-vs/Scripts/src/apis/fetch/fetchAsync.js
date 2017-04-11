"use strict";
var Promise = require('bluebird');
function fetchAsync(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    reject(xhr.statusText);
                }
            }
        };
        xhr.open("GET", url, true);
        xhr.send(null);
    });
}
exports.fetchAsync = fetchAsync;
function fetchAsyncText(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(xhr.responseText);
                }
                else {
                    reject(xhr.response);
                }
            }
        };
        xhr.open("GET", url, true);
        xhr.send(null);
    });
}
exports.fetchAsyncText = fetchAsyncText;
//# sourceMappingURL=fetchAsync.js.map