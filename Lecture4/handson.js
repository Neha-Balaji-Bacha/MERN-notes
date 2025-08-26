//Note
//!! → double negation, so it forces any value into a boolean.
console.log(!!" "); // true   (non-empty string, even a space → true)
console.log(!!""); // false  (empty string → falsy)
console.log(!!0); // false
console.log(!!1); // true

console.log([] == 0); // true  ([] → "" → 0)
console.log(" " == 0); // true  (" " → 0)
console.log("" == 0); // true  ("" → 0)
console.log(false == 0); // true
console.log(null == 0); // false
console.log(undefined == 0); // false
