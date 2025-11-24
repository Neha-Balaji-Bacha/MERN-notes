const value = 4 + ("34" + " ") / 17;
console.log(value);

const space = " ";
console.log(space * 1);

//Given a N*N grid, find the primary diagonal sum;
//TC:N ,SC:1
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
//primary diagoanl--> i==j
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//       sum += arr[i][i]
// }
// console.log({sum});

//secondary diagonal --> i+j==n-1
//TC:N,SC:1
// let sum = 0;
// let n = arr.length;
// let j = n - 1;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i][j];
//   j--;
// }
// console.log({ sum });

//or
// let sum = 0;
// let n = arr.length;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i][n - i - 1];
// }
// console.log({ sum });

//sum of all odd coloumn elements
// const arr = [
//   [1, 2, 3, 4, 5, 6],
//   [2, 6, 12, 43, 3],
//   [8, 10, 34],
// ];
// function mat(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (j % 2 != 0) {
//         sum += arr[i][j];
//       }
//     }
//   }
//   return sum;
// }
// console.log(mat(arr));

//print all odd coloumn element
// const arr = [
//   [1, 2, 3, 4, 5, 6],
//   [2, 6, 12, 43, 3, 5],
//   [8, 10, 34, 23, 3, 8],
// ];
// function mat(arr) {
//   for (let j = 0; j < arr[0].length; j++) {
//     //constant hai vo bahar
//     if (j % 2 != 0) {
//       for (let i = 0; i < arr.length; i++) {
//         //change ho raha hai vo bahar
//         console.log(arr[i][j]);
//       }
//     }
//   }
// }
// mat(arr);

//HW
//given a 2d matrix, reverse each odd coloumns and print it
// Input :
// [[1,2,3,4,5,6],
// [2,6,12,43,3,5],
// [8,10,34,23,12,8]]

//output

//write a function to find the sum of all subarrays
