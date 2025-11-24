//H.W : Write a function to print all palindromic substring of a string
//==================Time complexity ======================
//  Time Complexity considers how many times each statement executes.
//1. o(n)
let n = 8;
for (let i = 1; i <= n; i++) {
  console.log("Hello World !!!");
}
//o(1)
console.log("Hello World");

//2.O(log2(n))
for (i = 1; i <= 8; i = i * 2) {
  console.log("Hello World !!!");
}

//3.Find the sum of all elements of a list/array
//O(n)
function list_Sum(A, n) {
  let sum = 0;
  for (let i = 0; i <= n - 1; i++) {
    sum = sum + A[i];
  }
  return sum;
}

let A = [5, 6, 1, 2];
let N = A.length;
console.log(list_Sum(A, N));

//4.Find the sum of all elements of a matrix
//O(k*m)
let k = 3;
let m = 3;
let array = [
  [3, 2, 7],
  [2, 6, 8],
  [5, 1, 9],
];
let sum = 0;
for (let i = 0; i < k; i++) {
  for (let j = 0; j < m; j++) {
    sum += array[i][j];
  }
}
console.log(sum);

//5.o(logn)
while (n > 0) {
  // process digit
  n = Math.floor(n / 10);
}

//O(log n)
while (low <= high) {
  mid = (low + high) / 2;
  // eliminate half side
}

// Time Complexity = O(logₖ n)
while (n > 0) {
  n = n / k;
}
//The loop never terminates → it’s an infinite loop.
let m1 = 7;
while (m1 > 0) {
  m1 *= 2; // multiply by 2
}

//O(log n)
let x = 1;
let n2 = 20;
while (x < n2) {
  console.log(x);
  x *= 2; // multiply by 2
}

//o(logn)
// Inner loop runs O(log n)
// Outer loop runs only 1 time (because n becomes 0 after first pass).
// Overall Complexity = 1*O(log n)=
for (let i = 0; i < n; i++) {
  while (n > 0) {
    n /= 2;
  }
}

//o(n)
// Outer loop (cheap checks) = n iterations → O(n).
// While loop = runs once → O(log n).
// Total =𝑂(𝑛)+𝑂(log𝑛)=𝑂(𝑛)
// O(n)+O(logn)=O(n)

for (let i = 0; i < n; i++) {
  // Outer loop → runs n times
  if (i == n / 2) {
    // condition true only once
    let m = n;
    while (m > 0) {
      // Inner loop
      m = Math.floor(m / 2);
    }
  }
}

//o(n^2)
let n3 = 5;
for (let i = 1; i <= n3; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }
}

//O(n)
let i = n;
while (i > 0) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
  i = Math.floor(i / 2);
}

//===========space complexity===============
//Space complexity (SC) measures the extra memory your algorithm uses while solving a problem.
//Temporary variables inside a loop → O(1)
//Data structures that store results for each iteration → O(N)

//o(1)--->auxiliary space
for (let i = 0; i < N; i++) {
  let x = i; //declared inside loop → only exists during that iteration, discarded afterward
  console.log(x);
}
//o(1)
for (let i = 0; i < N; i++) {
  x = i; //Memory for x exists once and is reused in every iteration
  console.log(x);
}

//o(n)
function reverseWithExtra(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

//2D array of size n × n → SC = O(n²)
function createMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}

//o(log n)
let n4 = 5;
let arr2 = [];

while (n4 > 0) {
  arr2.push(n4);
  n4 = Math.floor(n4 / 2);
}

console.log(arr2);

// Key Point
// AND (&&) → stops at first false
// OR (||) → stops at first true
//================searching===========
//1.Linear search
//create an array 1 to 100 search 57 and print
TC: O(N);
sc: O(N);
let arr3 = [];
for (let i = 0; i < 100; i++) {
  arr3.push(i + 1);
}
for (let i = 0; i < 100; i++) {
  if (arr3[i] == 57) {
    console.log(i);
    break;
  }
}

//first index and last index of 6
//TC : o(n),sc:o(1)
let arr10 = [1, 2, 4, 4, 6, 6, 6, 8];
for (let i = 0; i < arr10.length; i++) {
  if (arr10[i] == 6) {
    console.log(i);
    break;
  }
}
for (let i = arr1.length - 1; i >= 0; i--) {
  if (arr10[i] == 6) {
    console.log(i);
    break;
  }
}

//2.Binary search--> O(logN)
//mid = st idx +end idx /2
//array must be sorted
// arr[mid] < target-- > mid + 1;
// arr[mid] > target-- > mid - 1;
// arr[mid] == target, return mid.

function binarySearch(arr, target) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1; // not found
}
let arr1 = [2, 4, 6, 8, 10, 12, 14];
console.log(binarySearch(arr1, 10)); // Output: 4
