export function chunkArrayElements(arr: any[], chunkLength: number) {
  const arrLength = arr.length;

  if (!Number.isInteger(chunkLength) || chunkLength < 1)
    throw "Chunk length must be a positive integer";

  const multiples = Math.floor(arrLength / chunkLength);
  const remainder = arrLength % chunkLength;

  const result = [];
  let i = 0;

  for (i; i < multiples; i++) {
    result[i] = arr.slice(i * chunkLength, (i + 1) * chunkLength);
  }

  if (remainder > 0) {
    result[i] = arr.slice(i * chunkLength, i * chunkLength + remainder);
  }

  return result;
}
