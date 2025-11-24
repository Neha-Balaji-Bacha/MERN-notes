// Subarray = continuous part of an array & maintains the order.
// Subsequence = maintains order but may skip elements.

//Note
//!! → double negation, so it forces any value into a boolean.

console.log(!!""); // false  (empty string → falsy)
console.log(!!0); // false
console.log(!!1); // true

console.log([] == 0); // true  ([] → "" → 0)
console.log(" " == 0); // true  (" " → 0)
console.log("" == 0); // true  ("" → 0)
console.log(false == 0); // true
console.log(null == 0); // false
console.log(undefined == 0); // false


function reverseInPlace(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]; // swap without temp
    start++;
    end--;
  }

  return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseInPlace(arr));
