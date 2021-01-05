import { groupArrayElements } from "./groupArrayElements";

describe("groupArrayElements", () => {
  it("returns a result containing the expected number of arrays of the same length", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const resultLength = 3;
    const result = groupArrayElements(arr, resultLength);
    const expectedResult = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    expect(result.length).toEqual(expectedResult.length);
    expect(result).toEqual(expectedResult);
  });

  it("returns a result containing arrays of the same length and one array with one less element", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const resultLength = 5;
    const result = groupArrayElements(arr, resultLength);
    const expectedResult = [[1, 2], [3, 4], [5, 6], [7, 8], [9]];

    expect(result.length).toEqual(expectedResult.length);
    expect(result).toEqual(expectedResult);
  });

  it("returns a result containing arrays of the same element and one array with remainder elements", () => {
    const arr = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];
    const resultLength = 7;
    const result = groupArrayElements(arr, resultLength);
    const expectedResult = [[1], [2], [3], [4], [5], [6], [7, 8, 9, 10]];

    expect(result.length).toBe(expectedResult.length);
    expect(result).toEqual(expectedResult);
  });

  it("returns an empty array if first parameter is an empty array", () => {
    const arr: any[] = [];
    const resultLength = 3;
    const result = groupArrayElements(arr, resultLength);
    const expectedResult: any[] = [];

    expect(result).toEqual(expectedResult);
  });

  it("throws an error if array length is less than the second parameter", () => {
    const arr: any[] = [1, 2];
    const resultLength = 3;
    const errorMessage = "Array length must be equal or greater than result length";

    expect(() => {
      groupArrayElements(arr, resultLength);
    }).toThrow(errorMessage);
  });

  it("throws an error if result length is not an integer", () => {
    const arr = [1, 2, 3, 4, 5];
    const resultLength = 3.5;
    const errorMessage = "Result length must be a positive integer";

    expect(() => {
      groupArrayElements(arr, resultLength);
    }).toThrow(errorMessage);
  });

  it("throws an error if result length is not a positive integer", () => {
    const arr = [1, 2, 3, 4, 5];
    const resultLength = -1;
    const errorMessage = "Result length must be a positive integer";

    expect(() => {
      groupArrayElements(arr, resultLength);
    }).toThrow(errorMessage);
  });
});
