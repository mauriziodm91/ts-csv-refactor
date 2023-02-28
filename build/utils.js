"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringtoDate = void 0;
const dateStringtoDate = (dateString) => {
    const date = dateString
        .split('/')
        .map((value) => parseInt(value));
    return new Date(date[2], date[1] - 1, date[0]);
};
exports.dateStringtoDate = dateStringtoDate;
