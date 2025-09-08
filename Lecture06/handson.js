// /* ===================== ROTATIONS in Array  ========================*/
// /* Q: Rotate array right (clockwise) by 1 element */
// const arr1 = [1, 2, 3, 4];
// let deleted = arr1.pop();
// arr1.unshift(deleted);
// console.log(arr1);

// function clockwise(arr, k) {
//   let n = arr.length;
//   for (let i = 0; i < k; i++) {
//     let last = arr[n - 1];
//     for (let j = n - 1; j > 0; j--) {
//       arr[j] = arr[j - 1];
//     }
//     arr[0] = last;
//   }
//   return arr;
// }
// console.log(clockwise([1, 2, 3, 4], 1));
// /* Q: Rotate array left (anti - clockwise) by 1 element */
// const arr2 = [1, 2, 3, 4];
// let added = arr2.shift();
// arr2.push(added);
// console.log(arr2);

// function anticlockwise(arr3, k) {
//   let n = arr3.length;
//   for (let i = 0; i < k; i++) {
//     let first = arr3[0];
//     for (let j = 0; j < n - 1; j++) {
//       arr3[j] = arr3[j + 1];
//     }
//     arr3[n - 1] = first;
//   }
//   return arr3;
// }
// console.log(anticlockwise([1, 2, 3, 4], 1));
/* HOMEWORK */
/* Q: Write a function to Rotate array right (clockwise) by k element */
function rotateClock(arr4, k) {
  for (let i = 0; i < k; i++) {
    let a = arr4.pop();
    arr4.unshift(a);
  }
  console.log(arr4);
}
rotateClock([4, 3, 2, 1], 2); //2 1 4 3
/* Q: Write a function to Rotate array left (anti - clockwise) by k element */
function rotateAntiClock(arr5, k) {
  for (let i = 0; i < k; i++) {
    let a = arr5.shift();
    arr5.push(a);
  }
  console.log(arr5);
}
rotateAntiClock([4, 3, 2, 1], 2); //2 1 4 3
