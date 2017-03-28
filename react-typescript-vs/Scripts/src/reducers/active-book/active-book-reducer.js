"use strict";
var actiontypes_1 = require('../../enums/actiontypes');
function ActiveBookReducer(state, action) {
    if (state === void 0) { state = null; }
    if (action.type == actiontypes_1.ActionType.BOOK_SELECT) {
        return action.payload;
    }
    return state;
}
exports.ActiveBookReducer = ActiveBookReducer;
//# sourceMappingURL=active-book-reducer.js.map