import { chunkArrayElements } from "./chunkArrayElements";

export function groupArrayElements(arr: any[], resultLength: number) {
  const arrLength = arr.length;

  if (!Number.isInteger(resultLength) || resultLength < 1)
    throw "Result length must be a positive integer";

  const result: any[] = [];
  const multiples = Math.floor(arrLength / (resultLength - 1));
  const remainder = arrLength % (resultLength - 1);

  let i = 0;
  if (remainder > 0 && multiples > 0) {
    // Generates equally sized arrays
    for (i; i < resultLength - 1; i++) {
      result.push(arr.slice(i * multiples, (i + 1) * multiples));
    }

    // Generates final array
    result.push(arr.slice(i * multiples));
  } else if (remainder === 0 && multiples > 1) {
    // Generates equally sized arrays
    for (i; i < resultLength - 1; i++) {
      result.push(arr.slice(i * (multiples - 1), (i + 1) * (multiples - 1)));
    }

    // Generates final array
    result.push(arr.slice(i * (multiples - 1)));
  } else {

    // Generates arrays with 1 element
    for (i; i < arrLength; i++) {
      result.push(arr.slice(i, i + 1));
    }
  }

  return result;
}
