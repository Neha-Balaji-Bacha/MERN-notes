//Merge sort : sub Question
//Given two sorted arrays A & B merge both of them.
//A : [1,3,4,7,10]
//B  : [2,9,12]
// function sortArray(arr1, arr2) {
//   let result = [];
//   let n = arr1.length;
//   let m = arr2.length;
//   let j = 0;
//   let i = 0;
//   while (i < n && j < m) {
//     if (arr1[i] < arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < n) {
//     result.push(arr1[i]);
//     i++;
//   }
//   while (j < m) {
//     result.push(arr2[j]);
//     j++;
//   }
//   return result;
// }
// let arr1 = [1, 3, 4, 7, 10];
// let arr2 = [2, 9, 12];
// console.log(sortArray(arr1, arr2));

//second method
// function sortArray(arr3,arr4) {
//   let n = arr3.length;
//   let m = arr4.length;
//   let j = 0;
//   let i = 0;
//   let k = 0;
//   let result = new Array(n+m);
//   while(i<n && j<m){
//     if(arr3[i]<arr4[j]){
//         result.push(arr3[i]);
//         i++;
//     }
//     else{
//         result.push(arr4[j]);
//         j++;
//     }
//     k++;
//   }
//   while(i<n){
//     result.push(arr3[i]);
//     i++;
//     k++;
//   }
//   while(j<m){
//     result.push(arr4[j]);
//     j++;
//     k++;
//   }
//   return result;
// }
// let arr3 = [1, 3, 4, 7, 10];
// let arr4 = [2, 9, 12];
// console.log(sortArray(arr3,arr4));

//merge sort : In all case TC : O(n log n) - Main ques
//sc : O(N)
function sortArray(arr1, arr2) {
  let result = [];
  let n = arr1.length;
  let m = arr2.length;
  let j = 0;
  let i = 0;
  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < n) {
    result.push(arr1[i]);
    i++;
  }
  while (j < m) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function merge(arr, low, high) {
  if (low == high) {
    return [arr[low]];
  }
  //recursiven calls
  let mid = Math.floor((low + high) / 2);
  let leftSortedarr = merge(arr, low, mid);
  let rightsortedarr = merge(arr, mid + 1, high);

  //merging of returned arrays
  let mergedArr = sortArray(leftSortedarr, rightsortedarr);
  return mergedArr;
}
let arr = [3, 9, 5, 2, 19, 4, 7];
console.log(merge(arr, 0, arr.length - 1).join(", "));

//Insertion sort : sub Question
//add no in the array sub question
//following code works only some cases
function insertion(arr, val) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > val && arr[i - 1] < val) {
      result.push(val);
      result.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(insertion([1, 2, 7, 9], 6));

//method : 2
function insertion(arr, val) {
  let result = [];
  let inserted = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > val && !inserted) {
      result.push(val);
      result.push(arr[i]);
      inserted = true;
    } else {
      result.push(arr[i]);
    }
  }
  if (!inserted) result.push(val);
  return result;
}
console.log(insertion([1, 2, 7, 9], 6));

//Insertion sort : Main ,
// Best case : O(N), TC : O(N*N) SC : O(1)
function insertion(arr) {
  let ind = 0;
  for (let i = 1; i < arr.length; i++) {
    let firstElementOfUnsorted = arr[i];
    let indexTOInserAt = 0;
    for (let j = ind; j >= 0; j--) {
      if (arr[j] > firstElementOfUnsorted) {
        arr[j + 1] = arr[j];
      } else {
        indexTOInserAt = j + 1;
        break;
      }
    }
    arr[indexTOInserAt] = firstElementOfUnsorted;
    ind++;
  }
  return arr;
}
let arr5 = [3, 1, 6, 2, 8, 7, 4];
console.log("soretd array using insertion sort : " + insertion(arr5).join(" "));
