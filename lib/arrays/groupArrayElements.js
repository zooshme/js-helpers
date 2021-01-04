"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupArrayElements = void 0;
function groupArrayElements(arr, groupLength) {
    var arrLength = arr.length;
    var multiples = Math.floor(arrLength / groupLength);
    var remainder = arrLength % groupLength;
    var result = [];
    var i = 0;
    for (i; i < multiples; i++) {
        result[i] = arr.slice(i * groupLength, i * groupLength + groupLength);
    }
    if (remainder > 0) {
        result[i] = arr.slice(i * groupLength, i * groupLength + remainder);
    }
    return result;
}
exports.groupArrayElements = groupArrayElements;
//# sourceMappingURL=groupArrayElements.js.map