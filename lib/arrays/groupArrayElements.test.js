"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var groupArrayElements_1 = require("./groupArrayElements");
describe("groupArrayElements", function () {
    it("returns an array containing slices of the same size", function () {
        var arr = [1, 2, 3, 4, 5, 6];
        var groupLength = 3;
        var result = groupArrayElements_1.groupArrayElements(arr, groupLength);
        var expectedResult = [
            [1, 2, 3],
            [4, 5, 6],
        ];
        expect(result.length).toEqual(expectedResult.length);
        expect(result).toEqual(expectedResult);
        expect(result[0]).toEqual(expectedResult[0]);
        expect(result[1]).toEqual(expectedResult[1]);
    });
    it("returns an array containing slices of the same size and one with remaining elements", function () {
        var arr = [1, 2, 3, 4, 5, 6, 7];
        var groupLength = 3;
        var result = groupArrayElements_1.groupArrayElements(arr, groupLength);
        var expectedResult = [[1, 2, 3], [4, 5, 6], [7]];
        expect(result.length).toBe(expectedResult.length);
        expect(result[0]).toEqual(expectedResult[0]);
        expect(result[1]).toEqual(expectedResult[1]);
        expect(result[2]).toEqual(expectedResult[2]);
    });
    it("returns an array containing a slice with remaining elements", function () {
        var result = groupArrayElements_1.groupArrayElements([1], 3);
        var expectedResult = [[1]];
        expect(result.length).toBe(expectedResult.length);
        expect(result[0]).toEqual(expectedResult[0]);
    });
    it("returns an empty array", function () {
        var result = groupArrayElements_1.groupArrayElements([], 3);
        var expectedResult = [];
        expect(result.length).toBe(expectedResult.length);
    });
});
//# sourceMappingURL=groupArrayElements.test.js.map