//1.Find the largest and smallest element in an array.
let arr = [6, 3, 4, 2];
let max = -Infinity;
let min = Infinity;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  } else if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min, max);

//2.Reverse an array (in-place and using extra space).
let arr1 = [9, 6, 8, 5];
let start = 0;
let end = arr1.length - 1;
while (start < end) {
  [arr1[start], arr1[end]] = [arr1[end], arr1[start]];
  start++;
  end--;
}
console.log(arr1);
//method 2
let arr2 = [2, 5, 1, 6, 8];
let result = [];
for (let i = arr2.length - 1; i >= 0; i--) {
  result.push(arr2[i]);
}
console.log(result);

//3.Find the sum / average of array elements.
let arr3 = [5, 2, 4, 2];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
  sum += arr3[i];
}
let avg = Math.floor(sum / arr3.length);
console.log(sum, avg);

//4.Check if an element exists in an array.
let arr4 = [9, 3, 5, 1];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] == 3) {
    console.log("present");
    break;
  }
}

//5.Count frequency of each element in an array.
let arr5 = [8, 8, 1, 4, 3, 2, 1];
let fre = {};
for (let i = 0; i < arr5.length; i++) {
  if (fre[arr5[i]]) {
    fre[arr5[i]]++;
  } else {
    fre[arr5[i]] = 1;
  }
}
console.log(fre);

//method-->2
let arr6 = [9, 1, 7, 1, 2, 4, 4];
let fre1 = [];
for (let i = 0; i < arr6.length; i++) {
  fre1[arr6[i]] = (fre1[arr6[i]] || 0) + 1;
}
console.log(fre1);

// [
//   <1 empty item>,  // index 0
//   2,               // index 1
//   1,               // index 2
//   <1 empty item>,  // index 3
//   2,               // index 4
//   <2 empty items>, // index 5,6
//   1,               // index 7
//   <1 empty item>,  // index 8
//   1                // index 9
// ]

for (let i = 0; i < fre1.length; i++) {
  if (fre1[i] !== undefined) {
    console.log(i, "-->", fre1[i]);
  }
}

//6.Find the second largest (or kth largest/smallest) element.
let arr7 = [4, 1, 27, 48];
let largest = -Infinity;
let secondLarge = -Infinity;
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] > largest) {
    secondLarge = largest;
    largest = arr7[i];
  } else if (arr7[i] > secondLarge && arr7[i] !== largest) {
    secondLarge = arr7[i];
  }
}
console.log(secondLarge);

//7.Remove duplicates from an array.
let arr8 = [1, 2, 4, 7, 2, 4];
let result3 = [];
for (let value of arr8) {
  if (result3.indexOf(value) == -1) {
    result3.push(value);
  }
}
console.log(result3);
//8.method -2 without inbuilt function
let unique = [];
for (let i = 0; i < arr8.length; i++) {
  let duplicate = false;
  for (let j = 0; j < unique.length; j++) {
    if (arr8[i] === unique[j]) {
      duplicate = true;
      break;
    }
  }
  if (!duplicate) {
    unique.push(arr8[i]);
  }
}
console.log(unique);

//9.Merge two sorted arrays.
// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 3, 6, 7, 8];
let merged = [];

let i = 0,
  j = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    if (merged[merged.length - 1] !== arr1[i]) {
      merged.push(arr1[i]);
    }
    i++;
  } else if (arr1[i] > arr2[j]) {
    if (merged[merged.length - 1] !== arr2[j]) {
      merged.push(arr2[j]);
    }
    j++;
  } else {
    // both are equal → push only once
    if (merged[merged.length - 1] !== arr1[i]) {
      merged.push(arr1[i]);
    }
    i++;
    j++;
  }
}

//10. Copy leftovers (also check for duplicates)
while (i < arr1.length) {
  if (merged[merged.length - 1] !== arr1[i]) {
    merged.push(arr1[i]);
  }
  i++;
}

while (j < arr2.length) {
  if (merged[merged.length - 1] !== arr2[j]) {
    merged.push(arr2[j]);
  }
  j++;
}

console.log(merged);
// [1, 2, 3, 5, 6, 7, 8]

//11.Rotate an array by k positions (left/right).
let arr9 = [2, 1, 5, 7];
// let ans1 = arr9.pop();
// arr9.unshift(ans1);
// console.log(arr9);

function clock(arr9, k) {
  let n = arr9.length;
  for (let i = 0; i < k; i++) {
    let last = arr9[n - 1];
    for (let j = n - 1; j > 0; j--) {
      arr9[j] = arr9[j - 1];
    }
    arr9[0] = last;
  }
  console.log(arr9);
}
clock(arr9, 2);

function anticlock(arr9, k) {
  let n = arr9.length;
  for (let i = 0; i < k; i++) {
    let first = arr9[0];
    for (let j = 0; j < n - 1; j++) {
      arr9[j] = arr9[j + 1];
    }
    arr9[n - 1] = first;
  }
  console.log(arr9);
}
anticlock(arr9, 2);
//12.Check if an array is sorted.
let array = [1, 2, 3, 4];
let first = array[0];
let sorted = true;
for (let i = 1; i < array.length; i++) {
  if (array[i] < first) {
    sorted = false;
    break;
  }
  first = array[i];
}
if (sorted) {
  console.log("sorted array");
} else {
  console.log("array is not sorted");
}

//=============Intermediate===============
//1.Find the missing number in an array (1 to n).

function missingNo(arr) {
  let n = arr.length + 1; //since one no is missing
  let total = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return total - sum;
}
console.log(missingNo([1, 3, 4, 5]));

//2.Find duplicate numbers in an array.
let arr10 = [1, 2, 3, 1, 4, 1, 4];
let exist = [];
for (let i = 0; i < arr10.length; i++) {
  for (let j = i + 1; j < arr10.length; j++) {
    if (arr10[i] === arr10[j]) {
      if (!exist.includes(arr10[i])) {
        console.log("Duplicates", arr10[i]);
        exist.push(arr10[i]);
      }
      break;
    }
  }
}
//3.Find the intersection & union of two arrays.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

// Intersection
let intersection = [];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      if (!intersection.includes(arr1[i])) {
        // avoid duplicates
        intersection.push(arr1[i]);
      }
    }
  }
}

// Union
let union = [];
for (let i = 0; i < arr1.length; i++) {
  if (!union.includes(arr1[i])) {
    union.push(arr1[i]);
  }
}
for (let i = 0; i < arr2.length; i++) {
  if (!union.includes(arr2[i])) {
    union.push(arr2[i]);
  }
}

console.log("Union:", union);
console.log("Intersection:", intersection);

//4.Move all zeros to the end of the array.
let a2 = [1, 20, 0, 8, 0, 3];
let output = [];
let n = a2.length;
for (let i = 0; i < n; i++) {
  if (a2[i] !== 0) {
    output.push(a2[i]);
  }
}
for (let j = output.length; j < n; j++) {
  output.push(0);
}
console.log(output);

//5.Sort an array of 0s, 1s, and 2s (Dutch National Flag Problem).
let arr11 = [0, 2, 1, 1, 0, 2];
let zero = 0,
  one = 0,
  two = 0;
for (let i = 0; i < arr11.length; i++) {
  if (arr11[i] == 0) zero++;
  else if (arr11[i] == 1) one++;
  else if (arr11[i] == 2) two++;
}
let index = 0;
for (let i = 0; i < zero; i++) arr11[index++] = 0;
for (let i = 0; i < one; i++) arr11[index++] = 1;
for (let i = 0; i < two; i++) arr11[index++] = 2;
console.log(arr11);

//6.Find pairs in array with a given sum.
function sumArray(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == k) {
        console.log("pairs are : " + arr[i], arr[j]);
      }
    }
  }
}
sumArray([1, 2, 3, 4, 5, 9], 3);

//7.Subarray with a given sum (sliding window / hashing).
function subsumArray(arr, k) {
  //o(n*n) this is not a window or hashing technique
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum == k) {
        console.log("pairs are : " + arr.slice(i, j + 1));
      }
    }
  }
}
subsumArray([1, 2, 3, 4, 5, 9], 3);

//8.Maximum subarray sum (Kadane’s Algorithm).
function maxSubarraysum(arr) {
  //O(n*n)
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
maxSubarraysum([-1, 5, -3, 2, -1, 3]);

//9.Find leaders in an array (element greater than all to its right).
function findLeaders(arr) {
  let n = arr.length;
  let maxFromRight = arr[n - 1]; // last element is always leader
  console.log(maxFromRight);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > maxFromRight) {
      maxFromRight = arr[i];
      console.log(arr[i]);
    }
  }
}

findLeaders([-1, 5, -3, 2, -1, 3]);

//10.Find equilibrium index (where left sum = right sum).
function equilibriumIndex(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let leftSum = 0,
      rightSum = 0;

    for (let j = 0; j < i; j++) leftSum += arr[j]; // left sum
    for (let j = i + 1; j < n; j++) rightSum += arr[j]; // right sum

    if (leftSum === rightSum) {
      console.log("Equilibrium Index:", i);
    }
  }
}
equilibriumIndex([1, 3, 5, 2, 2]);
