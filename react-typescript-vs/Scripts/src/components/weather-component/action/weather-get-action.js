"use strict";
var weather_api_1 = require('../../../apis/weather/weather-api');
function LoadCurses(url) {
    return function (dispatch) {
        return weather_api_1.WeatherAPI(url).then(function (item) {
            dispatch(item);
        });
    };
}
exports.LoadCurses = LoadCurses;
//# sourceMappingURL=weather-get-action.js.map