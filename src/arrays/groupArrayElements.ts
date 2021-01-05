import { chunkArrayElements } from "./chunkArrayElements";

export function groupArrayElements(arr: any[], resultLength: number) {
  const arrLength = arr.length;

  if (!Number.isInteger(resultLength) || resultLength < 1)
    throw "Result length must be a positive integer";

  if (arrLength === 0) return [];

  if (arrLength < resultLength)
    throw "Array length must be equal or greater than result length";

  const multiples = Math.floor(arrLength / resultLength);
  const remainder = arrLength % resultLength;
  let chunkedArray, chunkSize, remainingElements;

  if (remainder === 0) {
    chunkedArray = arr;
    chunkSize = multiples;
  } else if (resultLength - remainder === 1) {
    chunkedArray = arr;
    chunkSize = multiples + 1;
    return chunkArrayElements(arr, multiples + 1);
  } else {
    chunkedArray = arr.slice(0, -remainder);
    chunkSize = multiples;
    remainingElements = arr.slice(-remainder);
  }

  const result = chunkArrayElements(chunkedArray, chunkSize);

  if (remainingElements) {
    result[resultLength - 1] = [
      ...result[resultLength - 1],
      ...remainingElements,
    ];
  }

  return result;
}
