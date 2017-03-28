"use strict";
var ActionType = (function () {
    function ActionType(action) {
        this.value = action;
    }
    ActionType.WEATHER_FETCH_SUCCESS = new ActionType('WEATHER_FETCH_SUCCESS');
    ActionType.WEATHER_FETCH_FAILURE = new ActionType('WEATHER_FETCH_FAILURE');
    ActionType.BOOK_SELECT = new ActionType('BOOK_SELECT');
    return ActionType;
}());
exports.ActionType = ActionType;
//# sourceMappingURL=actiontypes.js.map