const arr = [1, 2, 1, 4, 2, 2, 4];
function findFrequency(arr) {
  const frequency = new Array(arr);
  result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (frequency[arr[i]]) {
        frequency[arr[i]]++;
      } else {
        frequency[arr[i]] = 1;
      }
    }
    result.push([i, frequency[arr[i]]]);
  }
  return result;
}
console.log(findFrequency(arr));