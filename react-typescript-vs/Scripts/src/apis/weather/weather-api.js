"use strict";
var axios_1 = require('axios');
var actiontypes_1 = require('../../enums/actiontypes');
function WeatherAPI(url) {
    return axios_1.default.get(url).then(function (r) {
        return { type: actiontypes_1.ActionType.WEATHER_FETCH_SUCCESS, payload: r.data };
    }, function (e) {
        return { type: actiontypes_1.ActionType.WEATHER_FETCH_FAILURE, error: e.error };
    });
}
exports.WeatherAPI = WeatherAPI;
;
//# sourceMappingURL=weather-api.js.map