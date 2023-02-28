"use strict";
exports.__esModule = true;
exports.dateStringtoDate = void 0;
var dateStringtoDate = function (dateString) {
    var date = dateString
        .split('/')
        .map(function (value) { return parseInt(value); });
    return new Date(date[2], date[1] - 1, date[0]);
};
exports.dateStringtoDate = dateStringtoDate;
console.log((0, exports.dateStringtoDate)('12/2/2023'));
