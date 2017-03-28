"use strict";
var actiontypes_1 = require('../enums/actiontypes');
function SelectBook(book) {
    console.log(book);
    return {
        type: actiontypes_1.ActionType.BOOK_SELECT,
        payload: book
    };
}
exports.SelectBook = SelectBook;
//# sourceMappingURL=book-detail-action.js.map