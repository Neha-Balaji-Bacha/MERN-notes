//Absolute sum difference
const arr1 = [1, 1, 2, 3, 4, 8, 8];
function difference(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      sum += Math.abs(arr[i] - arr[j]);
    }
    if (max < sum) {
      max = sum;
    }
  }
  console.log(max);
}
difference(arr1);

//check prime or not
//TC : O(sqrt(N)) SC: O(1) or constant
function primeornot(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.pow(n, 0.5); i++) {
    //for(let i=2;i*i<=n;i++)
    //for(let i=2;i<=Math.sqrt(n);i++)
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(primeornot(7));

//pattern
// 1
// 12
// 234
// 3456
// 45678
function numberTriangle(n) {
  console.log("A");
  for (let i = 1; i < n; i++) {
    let row = "";
    for (let j = i; j < i + i + 1; j++) {
      row += String.fromCharCode(j);
    }
    console.log(row);
  }
}
numberTriangle(5);

// 1
// 23
// 345
// 4567
// 56789
function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j < i + i; j++) {
      row += j;
    }
    console.log(row);
  }
}

printPattern(5);
