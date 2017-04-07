"use strict";
var Helpers;
(function (Helpers) {
    var GUID = (function () {
        function GUID() {
        }
        GUID.NewGuid = function () {
            var s4 = function () {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            };
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        };
        return GUID;
    }());
    Helpers.GUID = GUID;
    var UUID = (function () {
        function UUID() {
        }
        UUID.NewUUID = function () {
            var d = new Date().getTime();
            if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
                d += performance.now(); //high-precision timer if available
            }
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        };
        return UUID;
    }());
    Helpers.UUID = UUID;
})(Helpers || (Helpers = {}));
exports.Helpers = Helpers;
//# sourceMappingURL=GuidGenerator.js.map