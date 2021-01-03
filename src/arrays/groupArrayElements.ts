export function groupArrayElements(arr: any[], groupLength: number) {
  const arrLength = arr.length;
  const multiples = Math.floor(arrLength / groupLength);
  const remainder = arrLength % groupLength;

  const result = [];
  let i = 0;

  for (i; i < multiples; i++) {
    result[i] = arr.slice(i * groupLength, i * groupLength + groupLength);
  }

  if (remainder > 0) {
    result[i] = arr.slice(i * groupLength, i * groupLength + remainder);
  }

  return result;
}
