//sum of n natural no
function sumN(n) {
  if (n === 0) return 0;
  return n + sumN(n - 1);
}

console.log(sumN(5));
// Time Complexity: O(N)
//Space Complexity: O(N)

//sum of array ele
function sumArray(arr, n) {
  if (n === 0) return 0;
  return arr[n - 1] + sumArray(arr, n - 1);
}

let arr1 = [1, 2, 3, 4];
console.log(sumArray(arr1, arr1.length));

//find max ele in array
function maxArray(arr, n) {
  if (n === 1) return arr[0];
  return Math.max(arr[n - 1], maxArray(arr, n - 1));
}

let arr2 = [2, 7, 3, 1, 9];
console.log(maxArray(arr2, arr2.length));
