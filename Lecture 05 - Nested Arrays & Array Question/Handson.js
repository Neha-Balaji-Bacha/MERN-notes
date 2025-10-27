console.log(true + true); //2
console.log(true + 3); //4
console.log("hello" + 30 / 2); //hello15
console.log(" " + 5); //" 5"
let n = " ";
console.log(n); //single space
console.log(n.length); //1 length
console.log(n + 3);
let empty = [] + []; //""
console.log(empty);
console.log([] + 5); //"5"
console.log([1, 2, 3] + 8); //"1,2,38"
console.log([5] - 2); // 3   ([5] --> "5" --> 5)
console.log([5, 6] - 2); // NaN ([5,6] --> "5,6" --> NaN)
console.log(null + 5); // 5   (null --> 0)
console.log(undefined + 5); // NaN (undefined --> NaN)

console.log(true * 5); // 5   (true --> 1)
console.log(false * 5); // 0   (false --> 0)
console.log(10 / null); // Infinity (null --> 0, so 10/0 = Infinity)
console.log(10 / undefined); // NaN

// Ques: Given a 2d matrix, reverse each odd columns and print it
// Input =====> TC : O(N) SC : O(1)
// const arr = [
//   [1, 2, 3, 4, 5, 6],
//   [2, 6, 12, 43, 3, 5],
//   [8, 10, 34, 23, 12, 8],
// ];
// function printOddColRevElements(arr) {
//   let m = arr[0].length;
//   let n = arr.length;
//   for (let j = 0; j < m; j++) {
//     if (j % 2 != 0) {
//       let top = 0;
//       let bottom = n - 1;
//       while (top < bottom) {
//         let temp = arr[top][j];
//         arr[top][j] = arr[bottom][j];
//         arr[bottom][j] = temp;
//         top++;
//         bottom--;
//       }
//     }
//   }
//   return arr;
// }
// console.log(printOddColRevElements(arr));
// Output =====>
// [
//   [1, 10, 3, 23, 5, 8],
//   [2, 6, 12, 43, 3, 5],
//   [8, 2, 34,  4, 12, 6],
// ];

/* H.W
Question: Write a function to find the sum of all subarrays
 */
// SC: O(1);

const arr1 = [1, 2, 3, 4];
let result = 0;
for (let i = 0; i < arr1.length; i++) {
  sum = 0;
  for (let j = i; j < arr1.length; j++) {
    sum += arr1[j];
    result += sum;
  }
}
console.log(result);
