"use strict";
var fetchasync_1 = require('../fetch/fetchasync');
function fetchYQLPlace(city, state) {
    var query = encodeURI("select * from geo.places where text=\"" + city + ", " + state + "\" AND placeTypeName.code = 7");
    var url = "https://query.yahooapis.com/v1/public/yql?format=json&diagnostics=true&q=" + query;
    return fetchasync_1.fetchAsync(url);
}
exports.fetchYQLPlace = fetchYQLPlace;
//# sourceMappingURL=yql-place.js.map