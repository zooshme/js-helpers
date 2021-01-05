import { chunkArrayElements } from "./chunkArrayElements";

describe("chunkArrayElements", () => {
  it("returns an array containing chunks of the same size", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const chunkLength = 3;
    const result = chunkArrayElements(arr, chunkLength);
    const expectedResult = [
      [1, 2, 3],
      [4, 5, 6],
    ];

    expect(result.length).toEqual(expectedResult.length);
    expect(result).toEqual(expectedResult);
  });

  it("returns an array containing chunks of the same size and one with remaining elements", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const chunkLength = 3;
    const result = chunkArrayElements(arr, chunkLength);
    const expectedResult = [[1, 2, 3], [4, 5, 6], [7]];

    expect(result.length).toBe(expectedResult.length);
    expect(result).toEqual(expectedResult);
  });

  it("returns an array containing a chunk with remaining elements", () => {
    const arr = [1];
    const chunkLength = 3;
    const result = chunkArrayElements(arr, chunkLength);
    const expectedResult = [[1]];

    expect(result.length).toBe(expectedResult.length);
    expect(result).toEqual(expectedResult);
  });

  it("returns an empty array if first parameter is an empty array", () => {
    const arr: any[] = [];
    const chunkLength = 3;
    const result = chunkArrayElements(arr, chunkLength);
    const expectedResult: any[] = [];

    expect(result).toEqual(expectedResult);
  });

  it("throws an error if chunk length is not an integer", () => {
    const arr = [1, 2, 3, 4, 5];
    const chunkLength = 3.5;
    const errorMessage = "Chunk length must be a positive integer";

    expect(() => {
      chunkArrayElements(arr, chunkLength);
    }).toThrow(errorMessage);
  });

  it("throws an error if chunk length is not a positive integer", () => {
    const arr = [1, 2, 3, 4, 5];
    const chunkLength = -1;
    const errorMessage = "Chunk length must be a positive integer";

    expect(() => {
      chunkArrayElements(arr, chunkLength);
    }).toThrow(errorMessage);
  });
});
