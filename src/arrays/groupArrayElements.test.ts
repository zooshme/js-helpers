import { groupArrayElements } from "./groupArrayElements";

describe("groupArrayElements", () => {
  it("returns an array containing slices of the same size", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const groupLength = 3;
    const result = groupArrayElements(arr, groupLength);
    const expectedResult = [
      [1, 2, 3],
      [4, 5, 6],
    ];

    expect(result.length).toEqual(expectedResult.length);
    expect(result).toEqual(expectedResult);
    expect(result[0]).toEqual(expectedResult[0]);
    expect(result[1]).toEqual(expectedResult[1]);
  });

  it("returns an array containing slices of the same size and one with remaining elements", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const groupLength = 3;
    const result = groupArrayElements(arr, groupLength);
    const expectedResult = [[1, 2, 3], [4, 5, 6], [7]];

    expect(result.length).toBe(expectedResult.length);
    expect(result[0]).toEqual(expectedResult[0]);
    expect(result[1]).toEqual(expectedResult[1]);
    expect(result[2]).toEqual(expectedResult[2]);
  });

  it("returns an array containing a slice with remaining elements", () => {
    const result = groupArrayElements([1], 3);
    const expectedResult = [[1]];

    expect(result.length).toBe(expectedResult.length);
    expect(result[0]).toEqual(expectedResult[0]);
  });

  it("returns an empty array", () => {
    const result = groupArrayElements([], 3);
    const expectedResult = [];

    expect(result.length).toBe(expectedResult.length);
  });
});
