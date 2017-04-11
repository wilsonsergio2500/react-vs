"use strict";
var String = (function () {
    function String() {
    }
    String.format = function (format) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    };
    return String;
}());
exports.String = String;
//# sourceMappingURL=StringExtended.js.map