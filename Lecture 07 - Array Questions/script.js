// //calculate max sum among all subarrays
const arr1 = [-1, 5, -3, 2, -1, 3];
function maxSubarraysum(arr) {
  let n = arr.length;
  let max = -Infinity;
  let startIndex = 0;
  let endIndex = n - 1;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (max < sum) {
        max = sum;
        startIndex = i;
        endIndex = j;
      }
    }
  }
  console.log("max subarray sum from", startIndex, "to", endIndex, "is", max);
}
maxSubarraysum(arr1);

//count all subarrays  whose sum is equal to 0
//sc : O(1),tc:O(n*n)
// const arr = [1, 2, -3, 0, 1, -1, 1];
// let k = 0;
// function maxSubarraysum(arr, k) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if (sum === k) {
//         count++;
//       }
//     }
//   }
//   console.log(count);
// }
// maxSubarraysum(arr, k);

//given a sum k find the longest subarray whose sum is equal to k
// const arr = [1, 2, -3, 0, 1, -1, 1];
// let k = 0;
// function maxSubarraysum(arr, k) {
//   let length = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if (sum === k) {
//         length = Math.max(length, j - i + 1);
//       }
//     }
//   }
//   console.log(length);
// }

// maxSubarraysum(arr, k);

//write a function to print of size k all subarrys
// TC : O(n*n) , SC : O(1);
// function subArrayK(arr, k) {
//   for (let i = 0; i < arr.length; i++) {
//     //method 1
//     let result = "";
//     for (let j = i; j < arr.length; j++) {
//       result += arr[j] + " ";
//       let len = j - i + 1;
//       if (len == k) {
//         console.log(result);
//         break;
//       }
//     }
//   }
//   //method 2
//   let subk = [];
//   for (let i = 0; i <= arr.length - k; i++) {
//     subk.push(arr.slice(i, i + k));
//   }
//   console.log(subk);
// }
// subArrayK([1, 2, -3, 0, 1, -1, 1], 3);
