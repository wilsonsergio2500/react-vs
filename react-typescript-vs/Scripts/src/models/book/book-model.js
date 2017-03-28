"use strict";
var BookVm = (function () {
    function BookVm(title, IsBestSeller) {
        if (IsBestSeller === void 0) { IsBestSeller = false; }
        this.title = title;
        this.IsBestSeller = IsBestSeller;
    }
    return BookVm;
}());
exports.BookVm = BookVm;
//# sourceMappingURL=book-model.js.map