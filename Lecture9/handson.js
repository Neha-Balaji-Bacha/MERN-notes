let str = "Hello World";
console.log(str.substring("1vd")); // "Hello World"-->Number("1vd")  // NaN --->If start is NaN → it’s treated as 0. --> str.substring(0);  // returns the whole string
console.log(str.substring()); //whole string
console.log(str.substring(1)); // "ello World"
console.log(str.substring(NaN)); // "Hello World" --> NaN --> It’s treated as 0. --> str.substring(0);  // returns the whole string
//Unlike slice(), if start > end, substring() swaps them (substring(2,7)).
console.log(str.substring(7, 2)); // "llo W"

console.log(str.substring(-3)); // "Hello World" (negative → 0)
console.log(str.substring(null, 5)); // "Hello"
console.log(str.substring(undefined, 5)); // "Hello"
console.log(str.substring("2", "7")); // "llo W"  (converted to numbers)

//=====slice=====
console.log(str.slice(-8, -3)); // "lo Wo"
console.log(str.slice(7, 2)); // ""        (no swap, empty string)
console.log(str.slice(-3)); // "rld"   (slice handles negatives)
console.log(str.slice("1vd")); // "Hello World" (same as substring)
console.log(str.slice()); // full copy [1,2,3,4,5]
console.log(str.slice(50)); // ""   (beyond length)
console.log(str.slice(2, 50)); // "llo World" (end auto-fixed)

console.log(str.slice(0, Infinity)); // "Hello World"
console.log(str.slice(-Infinity, 5)); // "Hello"

//Biggest differences from substring():
//slice() understands negative indexes (substring does not).
//slice() does not swap start and end.

//=======split=====
// Key Points to Remember
// Works only on strings (not arrays).
// Always returns an array.
// Separator can be a string or a regex.
// Doesn’t modify the original string.
console.log(str.split(" ", 1)); // ["Hello"]  (only 1 piece)
console.log(str.split(" ", 2)); // ["Hello", "World"]

console.log("".split("")); // []  (empty string → empty array)
console.log("".split(",")); // [""] (one element empty string)

let messy = "  apple   banana   mango  ";
console.log(messy.split(" "));
// ["", "", "apple", "", "", "banana", "", "", "mango", "", ""]

console.log("abc".split()); // ["abc"]   (no separator → whole string in array)
console.log("abc".split(null)); // ["abc"] (null treated as no separator)
console.log("abc".split(undefined)); // ["abc"]

//========spread=====
//spread operator can also be used to combine arrays
//array
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5]

//in objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3 };

let merged = { ...obj1, ...obj2 };
console.log(merged); // {a: 1, b: 2, c: 3}

//========rest======
//rest operator can be used to get the remaining elements of an array
//array
let [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest); // [20, 30, 40]

//in object
let user = { name: "Neha", age: 21, city: "Pune" };
let { name, ...details } = user;

console.log(name); // "Neha"
console.log(details); // {age: 21, city: "Pune"}

// Key Difference
// Spread = expand
// Rest = collect
